import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorsService } from 'src/app/services/authors.service';
import { AuthorModel } from '../../models/author.model';
import {
  MatCard,
  MatCardHeader,
  MatCardActions,
  MatCardTitle,
  MatCardSubtitle,
  MatCardContent,
  MatCardImage
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-authors-cards-list',
  templateUrl: './authors-cards-list.component.html',
  styleUrls: ['./authors-cards-list.component.scss']
})
export class AuthorsCardsListComponent implements OnInit {

  public authors$: Observable<AuthorModel[]>;

  constructor(public authorsService: AuthorsService) { }

  ngOnInit(): void {
    this.authors$ = this.authorsService.getAuthors();
  }

}
