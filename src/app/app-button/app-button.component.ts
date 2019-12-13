import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css']
})
export class AppButtonComponent implements OnInit {
  @Input() text: string;
  @Input() className: string;
  @Output() click: any = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }


  handleClick() {
    this.click.emit();
  }
}
