import { Component, Input, OnInit } from '@angular/core';

import { BiographyModel } from '../../models/biography.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() biography: BiographyModel[];

  constructor() { }

  ngOnInit(): void {
  }

  onDotClick(event: Event): void {

  }

  onExpandEntry(expanded, index): void {
    console.log(`Expand status of entry #${index} changed to ${expanded}`);
  }

  onHeaderClick(event): void {

  }
}
