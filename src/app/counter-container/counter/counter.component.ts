import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-counter',
  imports: [
    NgStyle
  ],
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {


  @Input() count: number = 0
  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChange.emit(this.count);
    console.log('Count:', this.count);
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
      this.countChange.emit(this.count);
    }
  }
}
