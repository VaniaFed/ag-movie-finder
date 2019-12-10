import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ToggleService } from './toggle.service';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  constructor(private toggleService: ToggleService) { }
  @Input() toggle: any;
  @Output() changed: any = new EventEmitter<string>();
  public active: string;

  handleChangeToggle = toggledText => {
    if (this.toggleService.shouldChangeToggle(this.active, toggledText)) {
      this.changed.emit(toggledText);
      this.active = toggledText;
    }
  }

  ngOnInit() {
    this.active = this.toggle[0].text;
  }
}
