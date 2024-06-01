import { Component } from '@angular/core';
import {CounterComponent} from "../counter/counter.component";

@Component({
  selector: 'app-counter-parent-component',
  standalone: true,
  imports: [
    CounterComponent
  ],
  templateUrl: './counter-parent-component.component.html',
  styleUrl: './counter-parent-component.component.css'
})
export class CounterParentComponentComponent {
  counter: number = 0;

  updateCounter(value: number) {
    this.counter = value;
  }
}
