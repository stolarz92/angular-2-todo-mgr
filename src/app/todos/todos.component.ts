import { Component, OnInit } from '@angular/core';
import { Todo } from './shared/todo';
import { TodoService } from "./shared/todo.service";
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass'],
  providers: [ TodoService ]
})
export class TodosComponent implements OnInit {
  pageTitle: 'Todos';
  todos: Todo[];
  errorMessage: string;

  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getTodos());
  }

  getTodos() {
    this.todoService.getTodos()
        .subscribe(
          todos => this.todos = todos,
          error => this.errorMessage = <any>error
        );
  }

}
