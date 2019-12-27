import { Component, OnInit } from '@angular/core';
import {Movie, MovieService} from '../../../shared/movie.service';
import {SearchControlsService} from '../../../shared/search-controls.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements  OnInit {
  isUserTriedToLookFor = false;
  constructor(private movieService: MovieService, private searchControlsService: SearchControlsService) { }

  lookForMovies() {
    const { search, searchBy, sortBy } = this.searchControlsService;
    this.movieService
      .fetchMovies({ search, searchBy, sortBy })
      .subscribe((movies: Movie[]) => {
        this.movieService.movies = this.movieService.validate((movies as any).data);
        this.isUserTriedToLookFor = true;
      });
  }
  ngOnInit = () => {
    console.log('init');
    /*
    * if we have something in URL
    *   get movies
    *
    * */
  }
}
