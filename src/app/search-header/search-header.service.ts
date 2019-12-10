import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchHeaderService {

  constructor() { }
  searchToggle = [
    {
      text: 'Title',
    },
    {
      text: 'Genres'
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
  searchBy: string = this.searchToggle[0].text;
  sortBy: string = this.sortToggle[0].text;
  searchValue: string;

  handleChangeSearchToggle = val => {
    this.searchBy = val;
  }
  handleChangeSortToggle = val => {
    this.sortBy = val;
  }

  handleInput(textInput: string) {
    this.searchValue = textInput;
  }
}
