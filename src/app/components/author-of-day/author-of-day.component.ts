import { Component, Input, OnInit } from '@angular/core';
import { AuthorModel } from 'src/app/models/author.model';

@Component({
  selector: 'app-author-of-day',
  templateUrl: './author-of-day.component.html',
  styleUrls: ['./author-of-day.component.scss']
})
export class AuthorOfDayComponent implements OnInit {
  @Input() authorOfDay: AuthorModel;

  constructor() { }

  ngOnInit(): void { }

}
