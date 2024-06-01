import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Post } from '../post';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(public blogService: BlogService) { }

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
  }

  removePost(id: number) {
    this.blogService.removePost(id);
    this.posts = this.blogService.getPosts();
  }
}
