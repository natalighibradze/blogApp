import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { Post } from '../post';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  title: string = '';
  content: string = '';

  constructor(public blogService: BlogService) { }

  addPost() {
    const newPost: Post = {
      id: new Date().getTime(),
      title: this.title,
      content: this.content
    };
    this.blogService.addPost(newPost);
    this.title = '';
    this.content = '';
  }
}
