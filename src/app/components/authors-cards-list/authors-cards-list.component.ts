import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { AuthorsService } from 'src/app/services/authors.service';
import { FilterStateService } from 'src/app/services/filter-state.service';
import { AuthorModel } from '../../models/author.model';

@Component({
  selector: 'app-authors-cards-list',
  templateUrl: './authors-cards-list.component.html',
  styleUrls: ['./authors-cards-list.component.scss']
})
export class AuthorsCardsListComponent implements OnInit {

  public authors$: Observable<AuthorModel[]>;

  public wordState: string = null;

  constructor(private authorsService: AuthorsService, private filterStateService: FilterStateService, private router: Router)
  { }

  ngOnInit(): void {
    this.filterStateService.onFilterChange.subscribe((word: string) => {
      this.wordState = word;
    });
    this.authors$ = this.authorsService.getAuthors();
  }

  public onMoreClick(id: string): void {
    this.router.navigate(['author', id]);
  }

}
