import { Component, OnInit, Input, ChangeDetectionStrategy, ApplicationRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-pushy',
  templateUrl: './pushy.component.html',
  styleUrls: ['./pushy.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushyComponent implements OnInit {
  _title1 = 'unknown';
  _title2 = 'unknown';
  _title3 = 'unknown';
  _title4 = 'unknown';

  constructor(private app: ApplicationRef, private cd: ChangeDetectorRef) { }

  @Input()
  set title1(value) {
    this._title1 = value;
    console.log('this._title1', this._title1);
  }
  get title() {
    return this._title1;
  }

  setTitle2(value) {
    this._title2 = value;
    console.log('this._title2', this._title2);
  }
  setTitle3(value) {
    this._title3 = value;
    console.log('this._title3', this._title3);
  }

  setTitle4(value) {
    this._title4 = value;
    console.log('this._title4', this._title4);
    this.app.tick();
  }

  setTitle5(value) {
    this._title4 = value;
    console.log('this._title4', this._title4);
    this.app.tick();
    this.cd.markForCheck();
  }

  ngOnInit() {
  }
  get currentDate() {
    return new Date() + '';
  }
}
