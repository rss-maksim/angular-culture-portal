import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorsService } from 'src/app/services/authors.service';
import { AuthorModel } from '../../models/author.model';

@Component({
  selector: 'app-authors-cards-list',
  templateUrl: './authors-cards-list.component.html',
  styleUrls: ['./authors-cards-list.component.scss']
})
export class AuthorsCardsListComponent implements OnInit {

  public authors$: Observable<AuthorModel[]>;

  constructor(public authorsService: AuthorsService, public router: Router) { }

  ngOnInit(): void {
    this.authors$ = this.authorsService.getAuthors();
  }

  public onMoreClick(index: number): void {
    this.router.navigate(['author', index + 1]);
  }

}
