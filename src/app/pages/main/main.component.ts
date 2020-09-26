import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthorModel } from 'src/app/models/author.model';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  authorOfDay$: Observable<AuthorModel>;

  constructor(private authorsService: AuthorsService) { }

  ngOnInit(): void {
    this.authorOfDay$ = this.authorsService.getAuthorOfDay();
  }
}
