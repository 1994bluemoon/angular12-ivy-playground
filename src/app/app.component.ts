import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular ' + VERSION.major;

  constructor() {}

  ngOnInit() {
    let observable = from([10, 20, 30]);
    let s = observable.subscribe(x => console.log(x));
    s.unsubscribe();
  }

  ngOnDestroy() {}
}
