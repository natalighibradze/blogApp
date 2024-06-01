import {Component} from '@angular/core';
import {CounterComponent} from "./counter-container/counter/counter.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {
  CounterParentComponentComponent
} from "./counter-container/counter-parent-component/counter-parent-component.component";
import {UserListComponent} from "./user-list/user-list.component";
import {PostListComponent} from "./post-list/post-list.component";
import {AddPostComponent} from "./add-post/add-post.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [
    CounterComponent,
    TodoListComponent,
    CounterParentComponentComponent,
    UserListComponent,
    PostListComponent,
    AddPostComponent,
  ]
})
export class AppComponent {

}
