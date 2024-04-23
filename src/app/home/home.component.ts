import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { blog } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  latestBlog: undefined | blog[];

  constructor(private blog: BlogService) {}

  ngOnInit(): void {
    this.blog.latestBlogs().subscribe((data)=> {
      this.latestBlog= data;
    });
  }

}
