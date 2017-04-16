import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Todo, TodoState} from '../stores/todo/todo.store';
import {Store} from '@ngrx/store';
import {CLEAR_TODOS} from '../stores/todo/todo.action';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html'
})
export class TodoDashboardComponent {
  todos: Observable<Todo[]>;
  lastUpdate: Observable<Date>;

  constructor(private store: Store<TodoState>) {
    this.todos = store.select('todos');
    this.lastUpdate = store.select('lastUpdate');
  }

  clearTodos() {
    this.store.dispatch({
      type: CLEAR_TODOS
    });
  }
}
