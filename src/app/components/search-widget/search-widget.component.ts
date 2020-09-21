import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.scss']
})
export class SearchWidgetComponent implements OnInit {

  public isFilterShown = false;
  public searchLineWidth = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public onSearchClick(): void {
    this.searchLineWidth = this.isFilterShown ? 0 : 250;
    this.isFilterShown = !this.isFilterShown;
  }

}
