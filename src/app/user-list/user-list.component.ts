import {Component, Input} from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgStyle,
    NgForOf
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {


  @Input() userList: Array<string> = []
}
