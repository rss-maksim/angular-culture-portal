import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { AuthorsListComponent } from './pages/authors-list/authors-list.component';
import { AuthorFullViewComponent } from './pages/author-full-view/author-full-view.component';
import { TeamComponent } from './pages/team/team.component';
import { WorklogComponent } from './pages/worklog/worklog.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'authors', component: AuthorsListComponent },
  { path: 'author/:id', component: AuthorFullViewComponent },
  { path: 'team', component: TeamComponent },
  { path: 'worklog', component: WorklogComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
