import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { blog } from '../data-type';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-creator-home',
  templateUrl: './creator-home.component.html',
  styleUrl: './creator-home.component.css'
})
export class CreatorHomeComponent implements OnInit{
  creatorBlogList: undefined | blog[];
  blogMessage: undefined | string;
  icon= faTrash;
  editIcon= faEdit;

  constructor(private blog: BlogService) {}

  ngOnInit(): void {
    this.bList();
  }

  deleteBlog(id:number) {

    this.blog.deleteBlog(id).subscribe((result)=> {
      if(result) {
        this.blogMessage= "Blog is deleted"
        this.bList();
      }
    })

    setTimeout(() => {
      this.blogMessage= undefined;
    }, 3000);
  }

  bList() {
    this.blog.cBlogList().subscribe((result)=> {
      // console.warn(result)
      this.creatorBlogList= result;
    })
  }
}
