import { AfterViewInit, Component } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { changeFilter } from 'src/app/redux/actions';
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

  constructor(private store: Store<IAppReducer>) { }

  ngAfterViewInit(): void {
    this.filterInputSub = fromEvent(document.getElementById('filter-input'), 'input')
      .pipe(
        map((event: KeyboardEvent) => (event.target as HTMLInputElement).value),
        debounceTime(400),
        distinctUntilChanged())
      .subscribe(filter => this.store.dispatch(changeFilter({ filter })));
  }

  public onSearchClick(): void {
    this.searchLineWidth = this.isFilterShown ? 0 : 250;
    this.isFilterShown = !this.isFilterShown;
  }

  // changed(event: InputEvent): void {
  //   const input: HTMLInputElement = event.target as HTMLInputElement;
  //   const filter = input.value;
  //   this.store.dispatch(changeFilter({ filter }));
  // }
}

