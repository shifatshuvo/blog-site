import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { blog } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creator-create-blog',
  templateUrl: './creator-create-blog.component.html',
  styleUrl: './creator-create-blog.component.css'
})
export class CreatorCreateBlogComponent implements OnInit{
  createBlogMessage: string | undefined;
  

  constructor(private blog: BlogService, private router: Router) {}

  ngOnInit(): void {
    
  }

  createNewBlog(data: blog) {
    // console.warn(data)
      let creator= localStorage.getItem('creator');
      let creatorId= creator && JSON.parse(creator)[0].id;
      let creatorName= creator && JSON.parse(creator)[0].name;
      
      var blogData= Object.assign(data, {"creatorId": creatorId, "creatorName": creatorName});
      console.warn(blogData)

      this.blog.createBlog(blogData).subscribe((result)=> {
      console.warn(result)
      if(result) {
        this.createBlogMessage= "Blog is successfully created";
        setTimeout(() => {
          this.createBlogMessage= undefined;
          this.router.navigate(['creator-home']);
        }, 3000);
      }
    });
  }
}
