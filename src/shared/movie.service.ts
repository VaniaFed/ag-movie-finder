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
    console.log(params);
    return this.httpClient.get<GotMovies>(`http://reactjs-cdp.herokuapp.com/movies?${params}`)
      .pipe(tap(movies => { this.movies = this.validate(movies.data); console.log(this.movies); }));
  }

  validate = movies => {
      return movies.map(movie => {
        const validMovie = movie;
        validMovie.posterPath = movie.poster_path;
        validMovie.releaseDate = movie.release_date;
        delete validMovie.poster_path;
        delete validMovie.release_date;
        return validMovie;
      });
  }
}
