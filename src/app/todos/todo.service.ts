import { EventEmitter } from '@angular/core';
import { Todo } from './todo.model';

export class TodoService {
  todoSelected = new EventEmitter<Todo>();

  private todos: Todo[] = [
    new Todo('Test Title'),
    new Todo('Another Test Title'),
  ];

  getTodos() {
    return this.todos.slice();
  }
}

