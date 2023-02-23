import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieFavouritesComponent } from './movie-favourites/movie-favourites.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

const routes: Routes = [
  {path: 'movie-search', component: MovieSearchComponent},
  {path: 'movie-favourites', component: MovieFavouritesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
