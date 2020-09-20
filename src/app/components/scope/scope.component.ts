import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

import { Scope } from 'src/app/constants/scope.model';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.scss']
})
export class ScopeComponent implements OnInit {
  points: number;
  @Input() isRoot: boolean;
  @Input() scope: Scope;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  private updatePoints() {
    this.points = this.isRoot ? Math.max(0, this.scope.currentPoints) : this.scope.currentPoints;
  }

  ngOnInit(): void {
    this.updatePoints();
  }

  onSliderChanged({ value }: MatSliderChange): void {
    this.scope.currentPoints = value;
    this.updatePoints();
    this.change.emit(value);
  }

  onUpdate(): void {
    this.updatePoints();
    this.change.emit(this.scope.currentPoints);
  }

  get scoreClass(): any {

    return {
      score: true,
      'max-score': this.scope.currentPoints >= this.scope.max >>> 1,
      'min-score': this.scope.currentPoints < 0 || this.scope.currentPoints < this.scope.max >>> 1,
      // 'max-score': this.scope.currentPoints === this.scope.max,
    };
  }
}
