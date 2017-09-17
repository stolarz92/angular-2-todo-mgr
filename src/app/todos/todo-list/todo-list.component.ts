import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo.model';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  @Output() todoWasSelected = new EventEmitter<Todo>();
  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  onTodoSelected(todo: Todo) {
    this.todoWasSelected.emit(todo);
  }

}
