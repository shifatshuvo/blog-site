import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { blog } from '../data-type';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit{
  blogData: undefined | blog;

  constructor(private activeRoute: ActivatedRoute, private blog: BlogService) {}

  ngOnInit(): void {
    let blogId = this.activeRoute.snapshot.paramMap.get('blogId');
    blogId && this.blog.getBlog(blogId).subscribe((result)=> {
      this.blogData= result;
    });
  }

}
