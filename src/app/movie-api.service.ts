import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  constructor(private http: HttpClient) { }

  getMovie(movieName: string): Observable<Movie> {
    return this.http.get<Movie>(`http://www.omdbapi.com/?t=${movieName}&apikey=2462814`);
  }

  getFavouriteMovies() {
    return this.http.get<Movie[]>(`http://localhost:3000/movies`);
  }

  saveFavouriteMovie(movie: Movie) {
    return this.http.post(`http://localhost:3000/movies`, movie)
  }

  deleteFavouriteMovie(movie: any) {
    return this.http.delete(`http://localhost:3000/movies${movie}`)
  }

}
