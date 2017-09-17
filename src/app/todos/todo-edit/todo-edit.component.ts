import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.sass']
})
export class TodoEditComponent implements OnInit {
  id: number;
  editMode = false;
  todoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      )
  }

  onSubmit() {
    console.log(this.todoForm);
  }

  private initForm() {
    let todoTitle = '';
    let todoItems = new FormArray([]);

    if (this.editMode) {
      const todo = this.todoService.getTodo(this.id);
      todoTitle = todo.title;
      if (todo['items']) {
        for (let item of todo.items) {
          todoItems.push(
            new FormGroup({
              'name': new FormControl(item.name),
              'done': new FormControl(item.done)
            })
          )
        }
      }
    }

    this.todoForm = new FormGroup({
      'title': new FormControl(todoTitle),
      'items': todoItems
    });
  }

}
