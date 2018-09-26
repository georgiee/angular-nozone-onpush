import { Component, ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nozone-test';
  constructor(private app: ApplicationRef) { }
  setTitle(useTick = false) {
    console.log('setTitle1', this.title);
    this.title = this.currentDate;

    if (useTick) {
      this.app.tick();
    }
  }
  get currentDate() {
    return new Date() + '';
  }
}
