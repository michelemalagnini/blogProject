import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css']
})
export class FilterModalComponent implements OnInit {

  constructor() { }

  @Input() categories = '';
  @Output() filterPosts: EventEmitter<string> = new EventEmitter();


  ngOnInit(): void {
  }

}
