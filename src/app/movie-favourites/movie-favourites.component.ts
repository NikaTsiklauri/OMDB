import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieApiService } from '../movie-api.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-favourites',
  templateUrl: './movie-favourites.component.html',
  styleUrls: ['./movie-favourites.component.scss']
})
export class MovieFavouritesComponent implements OnInit{

  favouriteMoviesList$: Observable<Movie[]> = this.movieApiService.getFavouriteMovies(); 

  constructor(private movieApiService: MovieApiService) {}

  ngOnInit(): void {}

  deleteFavouriteMovie(movie: any) {
    this.movieApiService.deleteFavouriteMovie(movie).subscribe
  }
}
