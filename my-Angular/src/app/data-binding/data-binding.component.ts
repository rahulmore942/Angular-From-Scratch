import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nm = 'Developers world' 
  mul = '2'
  typ = 'button'
  cls = 'btn btn-success'
  anyThing : string ="hello"


  constructor() { }

  ngOnInit() {

  }
  ClickMe(ev : MouseEvent){
     console.log("Clicked")
     console.log(ev) 
  }

}
