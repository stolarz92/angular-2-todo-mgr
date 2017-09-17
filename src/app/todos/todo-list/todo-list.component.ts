import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo.model';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  @Output() todoWasSelected = new EventEmitter<Todo>();
  todos: Todo[] = [
    new Todo('Test Title'),
    new Todo('Another Test Title'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onTodoSelected(todo: Todo) {
    this.todoWasSelected.emit(todo);
  }

}
