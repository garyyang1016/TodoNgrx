import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Todo, TodoState} from '../stores/todo/todo.store';
import {Store} from '@ngrx/store';
import {ADD_TODO, REMOVE_TODO} from '../stores/todo/todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
  todos: Observable<Todo[]>;

  constructor(private store: Store<TodoState>) {
    this.todos = store.select('todos');
  }

  addTodo(input: HTMLInputElement) {
    if (!input.value) {
      return;
    }

    this.store.dispatch({
      type: ADD_TODO,
      payload: {
        title: input.value
      }
    });

    input.value = '';
  }

  removeTodo(todo: Todo) {
    this.store.dispatch({
      type: REMOVE_TODO,
      payload: {
        id: todo.id
      }
    });
  }
}
