import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: { id: number; text: string }[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      const newId = Date.now()
      this.todos.push({id: newId, text: this.newTodo});
      this.newTodo = '';
    }
  }

  removeTodo(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) { // Check if item exists
      this.todos.splice(index, 1);
    }
  }

  ngOnInit() {
  }
}
