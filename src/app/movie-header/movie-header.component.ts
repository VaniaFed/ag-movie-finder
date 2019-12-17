import { Component } from '@angular/core';
import {MovieService} from '../../shared/movie.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.css']
})
export class MovieHeaderComponent {

  constructor(private movieService: MovieService) { }
}
