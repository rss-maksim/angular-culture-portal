import { Component, Input } from '@angular/core';

import { WorksModel } from '../../models/works.model';

@Component({
  selector: 'app-masterpiece',
  templateUrl: './masterpiece.component.html',
  styleUrls: ['./masterpiece.component.scss']
})
export class MasterpieceComponent {
  @Input() works: WorksModel[];
}
