import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'List of Articles' }
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    data: { title: 'List of Articles' }
  },
  {
    path: 'bookmarks',
    component: BookmarksComponent,
    data: { title: 'List of Articles' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
