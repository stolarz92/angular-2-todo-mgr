import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.sass']
})
export class TodoEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

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

  private initForm() {
    let todoTitle = '';

    if (this.editMode) {
      const todo = this.todoService.getTodo(this.id);
        todoTitle = todo.title;
    }

    this.recipeForm = new FormGroup({
      'title': new FormControl(),
    });
  }

}
