import { ReduceStore } from 'flux/utils';
import AppDispatcher from 'dispatcher/AppDispatcher';
import todoActionTypes from 'data/actionTypes/todoActionTypes';

class TodoStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return {
      inputValue: "",
      todos: []
    }
  }

  reduce(state, action) {
    let todos

    switch(action.type) {
      case todoActionTypes.FETCH_TODOS:
        return Object.assign({}, state, {
          todos: action.todos
        })

      case todoActionTypes.UPDATE_INPUT:
        return Object.assign({}, state, {
          inputValue: action.data.value
        })

      case todoActionTypes.CREATE_TODO:
        todos = state.todos

        todos.push({
          id: action.todo.id,
          content: action.todo.content,
          done: action.todo.done
        })

        return Object.assign({}, state, {
          todos: todos,
          inputValue: ""
        })

      case todoActionTypes.UPDATE_TODO:
        todos = state.todos.map(todo => {
          if ( todo.id === action.todo.id ) {
            todo.done = true
          }

          return todo
        })

        return Object.assign({}, state, {
          todos
        })

      case todoActionTypes.DELETE_TODO:
        todos = state.todos.filter(todo =>
          todo.id !== parseInt(action.todo.id)
        )

        return Object.assign({}, state, {
          todos
        })

      default:
        return state;
    }
  }
};

export default new TodoStore;
