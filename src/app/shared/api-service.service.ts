import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.baseUrl;

  addPost(data: Post){
    return this.http.post<Post>(this.baseUrl+'posts',data);
  }

  getAllPost(){
    return this.http.get<Post[]>(this.baseUrl+'posts');
  }

  deletePost(id: number){
    return this.http.delete<any>(this.baseUrl+'posts/'+id)
  }

  updatePost(data: Post, id:number){
    return this.http.put<Post>(this.baseUrl+'posts/'+id, data);
  }

  // se volessimo creare la view dell post 
  getPostById(id: string) {
    const url = `${this.baseUrl}posts/${id}`;
    return this.http.get<Post>(url);
  }
}
