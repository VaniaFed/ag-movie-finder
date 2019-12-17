import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../../shared/movie.service'

@Component({
  selector: 'card-movie-info',
  templateUrl: './card-movie-info.component.html',
  styleUrls: ['./card-movie-info.component.css']
})
export class CardMovieInfoComponent implements OnInit {
  @Input() movie: Movie;
  constructor() { }

  ngOnInit() {
  }

}
