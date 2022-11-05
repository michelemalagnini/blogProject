import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { SinglePostPageComponent } from './components/single-post-page/single-post-page.component'



const routes: Routes = [
  {path:'', component: BlogPostsComponent},
  {path:'blog-post', redirectTo:'', pathMatch:'full'},
  { path: 'detail/:id', component: SinglePostPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
