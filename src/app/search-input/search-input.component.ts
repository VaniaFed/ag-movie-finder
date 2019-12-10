import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  constructor() { }
  @Input() findText: string;
  @Output() inputSearchValue = new EventEmitter<string>();
  @Output() submit = new EventEmitter();
  ngOnInit() {
  }

  handleInput = e => {
    const inputText = e.target.value;
    this.inputSearchValue.emit(inputText);
  }

  handleSubmit() {
    this.submit.emit();
  }
}
