import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../shared/movie.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.css']
})
export class MovieHeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) { }
  movie = {};
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe();
  }

}
