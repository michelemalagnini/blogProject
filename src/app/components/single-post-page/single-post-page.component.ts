import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiServiceService } from 'src/app/shared/api-service.service';
import { Post } from 'src/app/models/post';


@Component({
  selector: 'app-single-post-page',
  templateUrl: './single-post-page.component.html',
  styleUrls: ['./single-post-page.component.css']
})
export class SinglePostPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private ApiService: ApiServiceService,
    private location: Location
  ) {}

  post: Post;
  ngOnInit(): void {
    this.getPost();
  }

  getPost(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ApiService.getPostById(id.toString()).subscribe(res => {
      this.post = res;
    })
  }

  goBack(): void{
    this.location.back();
  }

}
