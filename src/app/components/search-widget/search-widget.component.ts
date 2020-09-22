import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { changeFilter } from '../../redux/actions';
import { IAppReducer } from 'src/app/redux/state.model';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.scss']
})
export class SearchWidgetComponent implements OnInit {

  constructor(private store: Store<IAppReducer>) { }

  ngOnInit(): void {
  }

  changed(event: InputEvent): void {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    const filter = input.value;
    this.store.dispatch(changeFilter({ filter }));
  }
}

