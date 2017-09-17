import { Todo } from './todo.model';
import { Item } from '../shared/item.model';

export class TodoService {

  private todos: Todo[] = [
    new Todo('Test Title', [
      new Item('Item 1', true)
      ]
    ),
    new Todo('Another Test Title', [
      new Item('Item 2', false)
    ]),
  ];

  getTodos() {
    return this.todos.slice();
  }

  getTodo(index: number) {
    return this.todos[index];
  }
}

