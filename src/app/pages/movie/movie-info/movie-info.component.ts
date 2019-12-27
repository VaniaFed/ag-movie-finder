import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  @Input() genre: string;
  constructor() { }

  ngOnInit() {
  }

}
