import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SearchControlComponent {

  constructor() { }
  @Input() findText: string;
  @Output() inputSearchValue = new EventEmitter<string>();
  @Output() submit = new EventEmitter();

  inputText = '';
  handleInput = e => {
    this.inputText = e.target.value;
    this.inputSearchValue.emit(this.inputText);
  }

  handlePressEnter = () => {
    this.submit.emit();
  }

  handleSubmit() {
    this.submit.emit();
  }
}
