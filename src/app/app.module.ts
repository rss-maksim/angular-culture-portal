import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { MainComponent } from './pages/main/main.component';
import { AuthorsListComponent } from './pages/authors-list/authors-list.component';
import { AuthorFullViewComponent } from './pages/author-full-view/author-full-view.component';
import { TeamComponent } from './pages/team/team.component';
import { WorklogComponent } from './pages/worklog/worklog.component';
import { Page404Component } from './pages/page404/page404.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavigationComponent,
    AuthorsListComponent,
    AuthorFullViewComponent,
    TeamComponent,
    WorklogComponent,
    Page404Component,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
