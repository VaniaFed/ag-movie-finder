import { Injectable } from '@angular/core';

interface Toggle {
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchControlsService {

  constructor() { }
  searchToggle: Toggle[] = [
    {
      text: 'Title',
    },
    {
      text: 'Genres'
    }
  ];

  sortToggle: Toggle[] = [
    {
      text: 'Release date',
    },
    {
      text: 'Rating'
    }
  ];
  sortBy: string = this.sortToggle[0].text;
  searchBy: string = this.searchToggle[0].text;
  searchValue: string;
  handleChangeSortToggle = (val: string) => {
    this.sortBy = val;
  }

  handleChangeSearchToggle = (val: string) => {
    this.searchBy = val;
  }

  handleInput(textInput: string) {
    this.searchValue = textInput;
  }
}
