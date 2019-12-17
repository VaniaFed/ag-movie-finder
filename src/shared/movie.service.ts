import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { stringify } from 'query-string';

export interface Movie {
  id: string;
  title: string;
  posterPath: string;
  genres: string[];
  releaseDate: string;
  runtime: string;
  overview: string;
}

interface GotMovies {
  data: Movie[];
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private httpClient: HttpClient) {
  }

  movies: Movie[] = [];
  currentMovie: Movie = {
    id: '1',
    title: 'hello',
    posterPath: '/',
    genres: ['gg', 'hh', '44'],
    releaseDate: '2018',
    runtime: '20',
    overview: 'loree'
  };

  sameGenresMovies: Movie[] = [];

  format = (val: string) => {
    return val.replace(/\s/ig, '_').toLowerCase();
  }

  // TODO: make type SearchData and pass an object instead of list of variables
  fetchMovies = (search: string, searchBy: string = 'title', sortBy: string = 'release_date') => {
    const paramsData = {
      search,
      searchBy: this.format(searchBy),
      sortBy: this.format(sortBy)
    };
    const params = stringify(paramsData);
    return this.httpClient.get<GotMovies>(`http://reactjs-cdp.herokuapp.com/movies?${params}`)
      .pipe(tap((movies: GotMovies) => {
        this.movies = this.validate(movies.data);
      }));
  }

  getMovie = (id: string) => {
    return this.httpClient.get<Movie>(`http://reactjs-cdp.herokuapp.com/movies/${id}`)
      .pipe(tap((movie: Movie) => {
        console.log(movie);
        this.currentMovie = this.validate([ movie ])[0];
      }));
  };

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
}
