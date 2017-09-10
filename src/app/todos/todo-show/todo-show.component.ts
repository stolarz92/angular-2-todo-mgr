import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Todo } from '../shared/todo'
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-show',
  templateUrl: './todo-show.component.html',
  styleUrls: ['./todo-show.component.sass'],
  providers: [ TodoService ]
})
export class TodoShowComponent implements OnInit {
  id: number;
  routeId: any;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
  ) { }

  @Input()
  todo: Todo;

  ngOnInit(): void {
    let todoRequest = this.route.params
      .flatMap((params: Params) =>
        this.todoService.getTodo(+params['id']));
    todoRequest.subscribe(response => this.todo = response.json())
  }
}
