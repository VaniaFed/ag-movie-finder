import {Component, OnInit} from '@angular/core';
import { SearchControlsService } from '../../shared/search-controls.service';
import {MovieService} from '../../shared/movie.service';

@Component({
  selector: 'search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent implements OnInit {

  constructor(private searchControlsService: SearchControlsService, private movieService: MovieService) { }

  ngOnInit() {
  }

  lookForMovies() {
    const { searchValue, searchBy, sortBy } = this.searchControlsService;
    this.movieService.fetchMovies(searchValue, searchBy, sortBy);
  }

}
