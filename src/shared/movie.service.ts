import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { stringify } from 'query-string';

interface Movie {
  id: string;
  title: string;
  posterPath: string;
  genres: string[];
  releaseDate: string;
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

  movies = [];

  format = val => {
    return val.replace(/\s/ig, "_").toLowerCase();
  }

  fetchMovies = (search, searchBy = 'title', sortBy = 'release_date') => {
    const paramsData = {
      search,
      searchBy: this.format(searchBy),
      sortBy: this.format(sortBy)
    };
    const params = stringify(paramsData);
    return this.httpClient.get<GotMovies>(`http://reactjs-cdp.herokuapp.com/movies?${params}`)
      .pipe(tap(movies => {
        this.movies = this.validate(movies.data);
      }));
  }

  validate = movies =>
    movies.map(movie =>
      this.makeCamelCaseForAllProps(movie));

  makeCamelCaseForAllProps = obj => {
    return Object.entries(obj).reduce((acc, c) => {
      const key = c[0];
      const val = c[1];
      return {
        ...acc,
        [this.makeCamelCase(key)]: val
      };
    }, {});
  }

  makeCamelCase = str => {
    if (!/_+?\w{1}/ig.test(str)) {
      return str;
    }
    return str.replace(/_+?(\w{1})/ig, (_, g1) => g1.toUpperCase());
  }
}
