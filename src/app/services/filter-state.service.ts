import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterStateService {

  public onFilterChange: EventEmitter<string> = new EventEmitter();

  private wordFilter: string = null;

  constructor() { }

  public changeWordFilter(word: string): void {
    this.wordFilter = word;
    this.onFilterChange.emit(this.wordFilter);
  }
}
