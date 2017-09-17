import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [
    new Todo('Test Title'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
