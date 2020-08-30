import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WireframeComponent } from './wireframe/wireframe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs'
import {MatRippleModule} from '@angular/material/core'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import {MatCardModule} from '@angular/material/card';
import { SharedDataService } from "./shared.service";
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ArticlesComponent } from './articles/articles.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SafePipeModule } from 'safe-pipe';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookmarksComponent,
    ArticlesComponent,
    WireframeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatRippleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatExpansionModule,
    MatTooltipModule,
    MatDialogModule,
    SafePipeModule
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent],
  entryComponents: [WireframeComponent]
})
export class AppModule { }
