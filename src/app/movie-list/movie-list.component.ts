import {Component, Input, OnInit} from '@angular/core';
import {Movie, MovieService} from '../../shared/movie.service';
@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  @Input() movieList: Movie[];
  @Input() notFoundText: string;
  constructor() {}

}
