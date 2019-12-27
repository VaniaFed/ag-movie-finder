import { Injectable } from '@angular/core';

interface Toggle {
  text: string;
}

export type SortBy = 'release_date' | 'rating';
export type SearchBy = 'title' | 'genres';
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
  sortBy: SortBy = this.sortToggle[0].text as any;
  searchBy: SearchBy = this.searchToggle[0].text as any;
  search = '';
  handleChangeSortToggle = (val: string) => {
    this.sortBy = val as any;
  }

  handleChangeSearchToggle = (val: string) => {
    this.searchBy = val as any;
  }

  handleInput(textInput: string) {
    this.search = textInput;
  }
}
