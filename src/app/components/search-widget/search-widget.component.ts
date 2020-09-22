import { AfterViewInit, Component, OnInit, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FilterStateService } from 'src/app/services/filter-state.service';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.scss']
})
export class SearchWidgetComponent implements AfterViewInit {

  public isFilterShown = false;
  public searchLineWidth = 0;
  public filterInputSub: Subscription;

  constructor(private filterStateService: FilterStateService) { }

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

}
