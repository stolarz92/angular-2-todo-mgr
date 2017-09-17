import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { ActivatedRoute, Params } from '@angular/router';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.sass']
})
export class TodoDetailComponent implements OnInit {
  todo: Todo;
  id: number;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.todo = this.todoService.getTodo(this.id)
        }
      );
  }

}
