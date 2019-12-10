import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

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
  fetchMovies = () => {
    return this.httpClient.get<GotMovies>('http://reactjs-cdp.herokuapp.com/movies')
      .pipe(tap(movies => this.movies = this.validate(movies.data)));
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
