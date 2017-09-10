import { Component, OnInit } from '@angular/core';
import { Todo } from './shared/todo';
import { TodoService } from "./shared/todo.service";
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router';
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
    private todoService: TodoService,
    private router: Router
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

  goToShow(todo: Todo): void {
    let link = ['/todos', todo.id];
    this.router.navigate(link)
  }

}
