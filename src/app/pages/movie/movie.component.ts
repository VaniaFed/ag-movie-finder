import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {MovieService} from '../../../shared/movie.service';
import {log} from 'util';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) {}

  ngOnInit() {
    console.log('hihi');
  }
}
