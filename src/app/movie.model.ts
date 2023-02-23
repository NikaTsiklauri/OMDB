export interface Movie {
    Title: string;
    Year: number;
    Actors: string;
    Poster: string;
    Runtime: string;
    CountryInfo: any[];
}

export interface Country {
  name: {
    common: String;
  }
  currencies: {
    [key: string]: {name: string; symbol: string};
  }
  flags: {
    png: string;
  }
  cca2: string;
  population: number;
}