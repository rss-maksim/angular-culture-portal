import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({

  imports: [
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatTabsModule,
    MatRadioModule,
  ],
  exports: [
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatTabsModule,
    MatRadioModule,
  ],
})
export class AppMaterialModule { }
