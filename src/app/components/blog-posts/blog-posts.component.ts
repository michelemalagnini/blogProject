import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule, FormGroup } from '@angular/forms';
import { ApiServiceService } from 'src/app/shared/api-service.service';
import { FormBuilder } from '@angular/forms';
import { Post } from 'src/app/models/post';
@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  postForm: FormGroup;
  postModel: Post;
  postDetails: Post[];
  postDetailsFilterByCategory: Post[];
  showAddBtn: boolean = true;
  showUpdateBtn: boolean = false;
  categories: string[];



  constructor(private api: ApiServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createPostForm();
    this.getAllPostDetail();
    this.categories = [
      'gatti',
      'cani',
      'pesci'
    ];
  }


  createPostForm() {
    this.postForm = this.fb.group({
      id:[''],
      title:[''],
      body:[''],
      image:[''],
      category:[''],
      author:[''],
      date:['']
    })
  }

  getAllPostDetail(){
    this.api.getAllPost().subscribe(res => {
      this.postDetails = res;
    })
  }

  filterPosts(category: string){
    console.log(category)
    this.api.getAllPost().subscribe(res => {
      if(category) {
        this.postDetails  = res.filter(x => x.category === category);
      } if(category === 'all'){
        this.postDetails = res;
      }
    })
  }

  addPostBlog(){
    this.postForm.controls['date'].setValue(new Date());
    this.postModel = Object.assign({}, this.postForm.value)
    this.api.addPost(this.postModel).subscribe(res => {
      let close = document.getElementById('close');
      close.click();
      this.postForm.reset();
      this.getAllPostDetail();
    }, err => {
      alert('Error');
    })
  }

  deletPostDetail(id: number){
    this.api.deletePost(id).subscribe(res => {
      this.getAllPostDetail();
    }, err => {
      alert('Error');
    })
  }

  edit(post: Post) {
    this.showAddBtn = false;
    this.showUpdateBtn = true;
    this.postForm.controls['id'].setValue(post.id);
    this.postForm.controls['title'].setValue(post.title);
    this.postForm.controls['body'].setValue(post.body);
    this.postForm.controls['image'].setValue(post.image);
    this.postForm.controls['category'].setValue(post.category);
    this.postForm.controls['author'].setValue(post.author);
    this.postForm.controls['date'].setValue(post.date);
  }

  updatePostBlog(){
    this.postModel = Object.assign({}, this.postForm.value)
    this.api.updatePost(this.postModel, this.postModel.id).subscribe(res => {
      let close = document.getElementById('close');
      close.click();
      this.getAllPostDetail();
      this.postForm.reset();
      this.postModel = Object.assign({});
    }, err => {
      alert('Error');
    })
  }

  addClick(){
    this.showAddBtn = true;
    this.showUpdateBtn = false;
  }

  reset(){
    this.postForm.reset();
    this.postModel = Object.assign({});
  }

}
