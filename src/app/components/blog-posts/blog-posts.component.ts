import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule, FormGroup } from '@angular/forms';
import { ApiServiceService } from 'src/app/shared/api-service.service';
import { FormBuilder } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {
  // inizializzo le variabilit e gli assegno un type
  postForm: FormGroup;
  postModel: Post;
  postDetails: Post[];
  postDetailsFilterByCategory: Post[];
  showAddBtn: boolean = true;
  showUpdateBtn: boolean = false;
  categories: string[];
  gattiNposts: Post[];
  caniNposts: Post[];
  pesciNposts: Post[];



  // ignetto il servizio per poi fare le chiamate al back end JSON SERVE
  constructor(private api: ApiServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createPostForm();
    this.getAllPostDetail();
    // array per popolare le categorie del blog
    this.categories = [
      'gatti',
      'cani',
      'pesci'
    ];
  }
  // oggetto per l editor WYSIWYG
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    // upload: (file: File) => { ... }
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};

// creo il reactive form per inserire i post lo richiamo all apertura del componente nell ngOnInit
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
// metodo che parte all ngOnInit grazie al quale ottengo tutti i post presenti nel blog
  getAllPostDetail(){
    this.api.getAllPost().subscribe(res => {
      this.postDetails = res;
      this.gattiNposts = res.filter(x => x.category === 'gatti');
      this.caniNposts = res.filter(x => x.category === 'cani');
      this.pesciNposts = res.filter(x => x.category === 'pesci');
    })
  }
// metodo per filtrare in base alla categoria la visualizzazione dei post
  filterPosts(category: string){
    this.api.getAllPost().subscribe(res => {
      let close = document.getElementById('closeFilter');
      close.click();
      if(category) {
        this.postDetails  = res.filter(x => x.category === category);
      } if(category === 'all'){
        this.postDetails = res;
      }
    })
  }
// metodo per aggiungere post al database
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
// metodo per eliminare i post
  deletPostDetail(id: number){
    this.api.deletePost(id).subscribe(res => {
      this.getAllPostDetail();
    }, err => {
      alert('Error');
    })
  }
// metodo per modificare i post
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
// metodo per fare l update alla chiusura della modal
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
// modifico il bottone della modale da update a edit
  addClick(){
    this.showAddBtn = true;
    this.showUpdateBtn = false;
  }
// metodo per resettare il form
  reset(){
    this.postForm.reset();
    this.postModel = Object.assign({});
  }



}
