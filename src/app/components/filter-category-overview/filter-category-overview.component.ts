import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-filter-category-overview',
  templateUrl: './filter-category-overview.component.html',
  styleUrls: ['./filter-category-overview.component.css']
})
export class FilterCategoryOverviewComponent implements OnInit {

  constructor() { }

  @Input() categories = [];
  @Input() gattiNposts: Post[];
  @Input() caniNposts: Post[];
  @Input() pesciNposts: Post[];

  ngOnInit(): void {

  }

  addClick(){

  }

}
