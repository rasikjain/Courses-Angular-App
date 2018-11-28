import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get(this.url).subscribe(response => {
      this.posts = response as [];
      console.log(this.posts);
    });
  }

  createPost(input: HTMLInputElement) {
    const post: any = { title: input.value };
    this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
      post.id = response['id'];
      this.posts.splice(0, 0, post);
      input.value = '';
    });
  }

  updatePost(post) {
    const post: any = { title: input.value };
    this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
      post.id = response['id'];
      this.posts.splice(0, 0, post);
      input.value = '';
    });
  }

  ngOnInit() {}
}

interface PostResponse {
  id: number;
}