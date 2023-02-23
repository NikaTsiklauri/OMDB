import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from '../movie.model';
import { MovieApiService } from '../movie-api.service';
import { FormControl } from '@angular/forms';
import { delay, finalize, forkJoin, map, Observable, of, switchMap, tap } from 'rxjs';
import { CountryApiService } from '../country-api.service';
import { MovieFavouritesComponent } from '../movie-favourites/movie-favourites.component';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent {
  constructor(
    private movieApiService: MovieApiService,
    private countryApiService: CountryApiService
  ) {}

  input = new FormControl();
  loading: boolean = false;
  currentYear = new Date().getFullYear();
  movie$: Observable<Movie> | undefined;

  addToFavourites(movie: Movie) {
    this.movieApiService.saveFavouriteMovie(movie).subscribe(x => console.log(x));
  }

  searchMovie() {
    const movieName = this.input.value;
    this.loading = true;
    this.movie$ = this.movieApiService.getMovie(movieName).pipe(
      delay(2000),
      switchMap((movieData: any) => {
        const cast = movieData.Actors.split(', ')
              .map((actorFullName: string) => actorFullName.split(' ')[0])
              .join(', ');
        const countryNames: string[] = movieData.Country.split(', ');
        return forkJoin(countryNames.map((x) => this.countryApiService.getCountry(x))).pipe(map((e) => {
          return {
            Title: movieData.Title,
            Year: this.currentYear - parseInt(movieData.Year),
            Actors: cast,
            Poster: movieData.Poster,
            Runtime: movieData.Runtime,
            CountryInfo: e
          };
        }));
      }),
      finalize(()=> this.loading = false),
      // tap(console.log)
    )

    console.log(this.movie$);
  }
}
