import {Component, OnInit} from '@angular/core';
import { MovieService } from '../../shared/movie.service';
@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  constructor(private movieService: MovieService) { }
  ngOnInit() {
    console.log(this.movieService.fetchMovies().subscribe((a) => {console.log('hehehe', a)}));
  }
}
