import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blog } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  
  createBlog(data: blog) {
    return this.http.post('http://localhost:3000/blogs', data);
  }

  cBlogList() {
    let creator= localStorage.getItem('creator');
    let creatorId= creator && JSON.parse(creator)[0].id;
    return this.http.get<blog[]>(`http://localhost:8080/blogs?creatorId=${creatorId}`);
  }

  deleteBlog(id:number) {
    return this.http.delete(`http://localhost:3000/blogs/${id}`)
  }

  getBlog(id: string) {
    return this.http.get<blog>(`http://localhost:3000/blogs/${id}`)
  }

  updateBlog(blog: blog) {
    return this.http.put<blog>(`http://localhost:3000/blogs/${blog.id}`, blog)
  }

  latestBlogs() {
    return this.http.get<blog[]>("http://localhost:8080/blogs?_limit=10")
  }
}
