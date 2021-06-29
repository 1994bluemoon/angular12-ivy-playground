import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular ' + VERSION.major;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
