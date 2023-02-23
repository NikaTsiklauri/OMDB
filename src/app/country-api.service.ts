import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Country } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  constructor(private http: HttpClient) { }

  getCountry(countryName: string): Observable<Country[]> {
    return this.http.get<Country[]>(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).pipe(map((e: any) => e[0]));
  }
}
