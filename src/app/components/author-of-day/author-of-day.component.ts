import { Component, Input } from '@angular/core';
import { AuthorModel } from 'src/app/models/author.model';

@Component({
  selector: 'app-author-of-day',
  templateUrl: './author-of-day.component.html',
  styleUrls: ['./author-of-day.component.scss']
})
export class AuthorOfDayComponent {
  @Input() authorOfDay: AuthorModel;
}
