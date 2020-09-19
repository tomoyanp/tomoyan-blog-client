import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';


const routes: Routes = [
  { path: 'blog-list', component: BlogListComponent },
  { path: 'blog-details', component: BlogDetailsComponent },
  { path: 'blog-post', component: BlogPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
