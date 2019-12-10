import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchToggle = [
    {
      text: 'Title',
    },
    {
      text: 'Genre'
    }
  ];
  sortToggle = [
    {
      text: 'Release date',
    },
    {
      text: 'Rating'
    }
  ];
  handleChangeSearchToggle = () => {
    console.log('search was updated');
  }
  handleChangeSortToggle = () => {
    console.log('sort was updated');
  }
}
