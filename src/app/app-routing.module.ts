import { CreatorCreateBlogComponent } from './creator-create-blog/creator-create-blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatorAuthComponent } from './creator-auth/creator-auth.component';
import { CreatorHomeComponent } from './creator-home/creator-home.component';
import { authGuard } from './auth.guard';
import { CreatorUpdateBlogComponent } from './creator-update-blog/creator-update-blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: CreatorAuthComponent,
    path: 'creator-auth',
  },
  {
    component: CreatorHomeComponent,
    path: 'creator-home',
    canActivate: [authGuard]
  },
  {
    component: CreatorCreateBlogComponent,
    path: 'creator-create-blog',
    canActivate: [authGuard]
  },
  {
    component: CreatorUpdateBlogComponent,
    path: 'creator-update-blog/:id',
    canActivate: [authGuard]
  },
  {
    component: BlogDetailsComponent,
    path: 'details/:blogId'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
