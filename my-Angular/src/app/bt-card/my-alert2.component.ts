import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-alert2',
  template: `
  <div    class="alert alert-primary" role="alert">
          Yes..!! I am a Developer..
  </div>
  `,
  styles: []
})
export class MyAlert2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
