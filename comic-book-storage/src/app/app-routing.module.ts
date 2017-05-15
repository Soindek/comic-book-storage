import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicBookListComponent } from './comic-book-list/comic-book-list.component';
import { EditComicBookComponent } from './edit-comic-book/edit-comic-book.component';

const routes: Routes = [
  { path: '', redirectTo: '/comics', pathMatch: 'full' },
  { path: 'comics', component: ComicBookListComponent },
  { path: 'detail/:id', component: EditComicBookComponent },
  { path: 'new', component: EditComicBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
