import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HideHowComponentsService {
  slider_visible: boolean;
  constructor() { this.slider_visible = true; }
  hide() { this.slider_visible = false; }

  show() { this.slider_visible = true; }

  toggle() { this.slider_visible = !this.slider_visible; }
}
