import {Component, OnInit} from '@angular/core';
import { SearchHeaderService } from './search-header.service';
import {MovieService} from '../../shared/movie.service';

@Component({
  selector: 'search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent implements OnInit {

  constructor(private searchHeaderService: SearchHeaderService, private movieService: MovieService) { }

  ngOnInit() {
  }

  lookForMovies() {
    const { searchValue, searchBy, sortBy } = this.searchHeaderService;
    console.log(this.movieService.fetchMovies(searchValue, searchBy, sortBy).subscribe(a => {console.log('hehehe', a)}));
  }
}
