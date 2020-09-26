import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { IAppStore } from '../../redux/state.model';
import { AuthorsService } from '../../services/authors.service';
import { AuthorModel } from '../../models/author.model';
import { WorksModel } from '../../models/works.model';

@Component({
  selector: 'app-author-full-view',
  templateUrl: './author-full-view.component.html',
  styleUrls: ['./author-full-view.component.scss']
})
export class AuthorFullViewComponent implements OnInit {
  architect: AuthorModel;

  constructor(private route: ActivatedRoute, private store: Store<IAppStore>, private authorsServide: AuthorsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.authorsServide.getAuthor(id).subscribe((archtect: AuthorModel) => {
        console.log(archtect);
        this.architect = archtect;
      });
    });
  }

  getPhotos(works: WorksModel[]): string[] {
    // @ts-ignore
    return works.reduce((acc, { img }: WorksModel) => {
      if (Array.isArray(img)) {
        return [...acc, ...img];
      }
      return [...acc, img];
    }, [])
      .filter((img: string) => Boolean(img));
  }
}
