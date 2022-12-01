import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SinglePostPageComponent } from './components/single-post-page/single-post-page.component';
import { NavComponent } from './components/nav/nav.component';
import { FilterCategoryOverviewComponent } from './components/filter-category-overview/filter-category-overview.component';
import { FilterModalComponent } from './components/modals/filter-modal/filter-modal.component';
import { AddPostModalComponent } from './components/modals/add-post-modal/add-post-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    BlogPostsComponent,
    SinglePostPageComponent,
    NavComponent,
    FilterCategoryOverviewComponent,
    FilterModalComponent,
    AddPostModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
