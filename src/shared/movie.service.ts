import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { stringify } from 'query-string';
import {SearchBy, SortBy} from './search-controls.service';

export interface Movie {
  id: string;
  title: string;
  posterPath: string;
  genres: string[];
  releaseDate: string;
  runtime: string;
  overview: string;
}

export interface SearchData {
  search: string;
  searchBy: SearchBy;
  sortBy: SortBy;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private httpClient: HttpClient) {
  }

  movies: Movie[] = [];
  currentMovie: Movie;
  sameGenresMovies: Movie[] = [];
  lastSearchData = {
    search: '',
    searchBy: 'title',
    sortBy: 'release_date'
  };

  fetchMovies = (searchData: SearchData): Observable<Movie[]> => {
    const formattedSearchData = this.formatSearchData(searchData);
    if (!this.isSearchDataChanged(formattedSearchData)) {
        console.log('getting movies from cache');
        return of({ data: this.movies }) as any;
    }
    console.log('making a query');
    this.lastSearchData = formattedSearchData;
    const params = stringify(formattedSearchData);
    return this.httpClient.get<Movie[]>(`http://reactjs-cdp.herokuapp.com/movies?${params}`);
  }

  isSearchDataChanged = (searchData: SearchData) => {
    console.log(searchData);
    console.log(this.lastSearchData);
    return searchData.search !== this.lastSearchData.search ||
      searchData.searchBy !== this.lastSearchData.searchBy ||
      searchData.sortBy !== this.lastSearchData.sortBy;
  }

  formatSearchData = (searchData: SearchData): SearchData => {
    return {
      search: searchData.search,
      searchBy: this.replaceSpacesWithUnderscore(searchData.searchBy) as any,
      sortBy: this.replaceSpacesWithUnderscore(searchData.sortBy) as any
    };
  }

  replaceSpacesWithUnderscore = (val: string) => {
    return val.replace(/\s/ig, '_').toLowerCase();
  }

  getMovie = (id: string): Observable<Movie> => {
    return this.httpClient.get<Movie>(`http://reactjs-cdp.herokuapp.com/movies/${id}`)
      .pipe(tap((movie: Movie) => {
        this.currentMovie = this.validate([ movie ])[0];
      }));
  }

  validate = (movies: Movie[]): Movie[] =>
    movies.map(movie =>
      this.makeCamelCaseForAllProps(movie));

  makeCamelCaseForAllProps = (obj: any): any => {
    return Object.entries(obj).reduce((acc, c) => {
      const key = c[0];
      const val = c[1];
      return {
        ...acc,
        [this.makeCamelCase(key)]: val
      };
    }, {});
  }

  makeCamelCase = (str: string) => {
    if (!/_+?\w{1}/ig.test(str)) {
      return str;
    }
    return str.replace(/_+?(\w{1})/ig, (_, g1) => g1.toUpperCase());
  }

  getSameGenreMovies = (genre: string) => {
    const sameGenresSearchData: SearchData = { searchBy: 'genres',
      sortBy: 'rating',
      search: genre
    };
    this
      .fetchMovies(sameGenresSearchData)
      .subscribe((movies: Movie[]) => {
        this.sameGenresMovies = this.validate(movies);
      });
  }
}
