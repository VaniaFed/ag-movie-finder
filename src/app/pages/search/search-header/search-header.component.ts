import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { SearchControlsService } from '../../../../shared/search-controls.service';

@Component({
  selector: 'search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent {
  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  constructor(private searchControlsService: SearchControlsService) { }

  handleSearch = () => {
    this.onSearch.emit();
  }
}
