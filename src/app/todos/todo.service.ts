import { Todo } from './todo.model';

export class TodoService {
  private todos: Todo[] = [
    new Todo('Test Title'),
    new Todo('Another Test Title'),
  ];

  getTodos() {
    return this.todos.slice();
  }
}

