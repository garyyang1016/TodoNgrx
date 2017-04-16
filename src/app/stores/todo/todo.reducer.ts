import {INITIAL_TODO_STATE, TodoState} from './todo.store';
import {ADD_TODO, CLEAR_TODOS, REMOVE_TODO} from './todo.action';
import {Action} from '@ngrx/store';

export function todoReducer(state: TodoState = INITIAL_TODO_STATE, action: Action): TodoState {
  const {type, payload} = action;

  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {
          id: state.todos.length + 1,
          title: payload.title
        }],
        lastUpdate: new Date()
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload.id),
        lastUpdate: new Date()
      };

    case CLEAR_TODOS:
      return {
        ...state,
        todos: [],
        lastUpdate: new Date()
      };

    default:
      return state;
  }
}
