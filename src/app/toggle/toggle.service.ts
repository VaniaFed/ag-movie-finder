import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  constructor() { }
  public shouldChangeToggle = (active: string, toggleText: string) => {
    return active !== toggleText;
  }
}
