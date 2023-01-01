import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: `<router-outlet></router-outlet>`,
  template: `<h1>Photo Mcro App</h1>`,
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     console.log('ngOnInit');
  }
}
