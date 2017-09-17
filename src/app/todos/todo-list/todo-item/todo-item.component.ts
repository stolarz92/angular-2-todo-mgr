import { Component, OnInit, Input, EventEmitter , Output} from '@angular/core';
import { Todo } from '../../todo.model';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(event: Event) {
    event.preventDefault();
    this.todoSelected.emit();
  }

}
