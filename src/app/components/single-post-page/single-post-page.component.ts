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

  // inizializzo la variabille 
  post: Post;
  // ignetto i servizi per il routing e per le chiamate al back end 
  constructor(
    private route: ActivatedRoute,
    private ApiService: ApiServiceService,
    private location: Location
  ) {}

  

  ngOnInit(): void {
    this.getPost();
  }
  // metodo che parte all init del componente che mi permette di ottenere il post selezionato
  getPost(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ApiService.getPostById(id.toString()).subscribe(res => {
      this.post = res;
    })
  }
  // metodo per tornare alla pagina iniziale
  goBack(): void{
    this.location.back();
  }

}
