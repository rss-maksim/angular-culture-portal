import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthorsService } from 'src/app/services/authors.service';
import { AuthorModel } from 'src/app/models/author.model';

@Component({
  selector: 'app-authors-cards-list',
  templateUrl: './authors-cards-list.component.html',
  styleUrls: ['./authors-cards-list.component.scss']
})
export class AuthorsCardsListComponent implements OnInit {

  public authors$: Observable<AuthorModel[]>;

  public wordState: string = null;

  public page = 0;
  public cardsPerPage = 5;

  constructor(private authorsService: AuthorsService, private router: Router) { }

  ngOnInit(): void {
    this.filterStateService.onFilterChange.subscribe((word: string) => {
      this.wordState = word;
      this.page = 0;
    });
    this.authors$ = this.authorsService.getAuthors();
  }

  public onMoreClick(id: string): void {
    this.router.navigate(['author', id]);
  }

  public onPaginatorClick($event: PageEvent): void{
    this.page = $event.pageIndex;
    this.cardsPerPage = $event.pageSize;
  }
}
