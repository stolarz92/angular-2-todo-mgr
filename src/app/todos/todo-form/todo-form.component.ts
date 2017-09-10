import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.sass'],
  providers: [ TodoService ]
})
export class TodoFormComponent {
  todo = new Todo;
  // submitted = false;
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }

  createTodo(todo) {
    // this.submitted = true
    this.todoService.createTodo(todo)
        .subscribe(
          data => { return true },
          error => {
            console.log("Error saving proposal.");
            return Observable.throw(error);
          }
        );
  }
}
