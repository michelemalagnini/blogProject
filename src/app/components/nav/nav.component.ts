import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  // modifico il bottone della modale da update a edit
  @Output() addClick: EventEmitter<boolean> = new EventEmitter


  ngOnInit(): void {
  }

  

}
