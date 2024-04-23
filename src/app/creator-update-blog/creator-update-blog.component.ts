import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { blog } from '../data-type';

@Component({
  selector: 'app-creator-update-blog',
  templateUrl: './creator-update-blog.component.html',
  styleUrl: './creator-update-blog.component.css'
})
export class CreatorUpdateBlogComponent implements OnInit{
  blogData: undefined | blog;
  blogMessage: undefined | string;

  constructor(private route: ActivatedRoute, private blog: BlogService, private router: Router) {}

  ngOnInit(): void {
    let blogId = this.route.snapshot.paramMap.get('id');

    if (blogId) {
      this.blog.getBlog(blogId).subscribe((data)=> {
        this.blogData = data;
      });  
    }
  }

  submit(data: blog) {
    if(this.blogData) {
      data.id = this.blogData.id;
      data.creatorId = this.blogData.creatorId;
      data.creatorName = this.blogData.creatorName;
    }

    this.blog.updateBlog(data).subscribe(
      (result) => {
        if(result) {
          this.blogMessage= "Blog has updated";
          setTimeout(() => {
            this.blogMessage = undefined;
            this.router.navigate(['creator-home']);
          }, 3000);
      
        }
      });
  }
}
