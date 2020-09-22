import { AfterViewInit, Component } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { FilterStateService } from 'src/app/services/filter-state.service';

import { Store } from '@ngrx/store';

import { changeFilter } from '../../redux/actions';
import { IAppReducer } from 'src/app/redux/state.model';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.scss']
})
export class SearchWidgetComponent implements AfterViewInit {
  public isFilterShown = false;
  public searchLineWidth = 0;
  public filterInputSub: Subscription;

  constructor(private filterStateService: FilterStateService, private store: Store<IAppReducer>) { }

  ngAfterViewInit(): void {
    this.filterInputSub = fromEvent(document.getElementById('filter-input'), 'input')
      .pipe(
        map((event: KeyboardEvent) => (event.target as HTMLInputElement).value),
        debounceTime(400),
        distinctUntilChanged())
      .subscribe(inputValue => {
        this.filterStateService.changeWordFilter(inputValue);
      });
  }

  public onSearchClick(): void {
    this.searchLineWidth = this.isFilterShown ? 0 : 250;
    this.isFilterShown = !this.isFilterShown;
  }

  changed(event: InputEvent): void {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    const filter = input.value;
    this.store.dispatch(changeFilter({ filter }));
  }
}

