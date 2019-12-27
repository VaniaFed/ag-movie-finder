import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../../shared/movie.service'
import {SearchControlsService} from '../../../../shared/search-controls.service';

@Component({
  selector: 'search-info',
  templateUrl: './search-info.component.html',
  styleUrls: ['./search-info.component.css']
})
export class SearchInfoComponent implements OnInit {
  constructor(private movieService: MovieService, private searchControls: SearchControlsService) { }

  ngOnInit() {
  }

}
