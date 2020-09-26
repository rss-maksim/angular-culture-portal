import { Component, Input } from '@angular/core';

import { BiographyModel } from '../../models/biography.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  @Input() biography: BiographyModel[];

  onDotClick(event: Event): void {}

  onExpandEntry(expanded, index): void {}

  onHeaderClick(): void {}
}
