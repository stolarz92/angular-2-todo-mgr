import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../todo.model';
import { TodoService } from '../../todo.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onSelected(event: Event) {
    event.preventDefault();
    this.todoService.todoSelected.emit(this.todo);
  }

}
