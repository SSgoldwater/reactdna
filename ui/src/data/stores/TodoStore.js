import { ReduceStore } from 'flux/utils';
import AppDispatcher from 'dispatcher/AppDispatcher';
import TodoActionTypes from 'data/actionTypes/TodoActionTypes';

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
      case TodoActionTypes.UPDATE_INPUT:
        return Object.assign({}, state, {
          inputValue: action.data.value
        })

      case TodoActionTypes.CREATE_TODO:
        todos = state.todos

        todos.push({
          id: Math.random(),
          content: action.data.content,
          done: false
        })

        return Object.assign({}, state, {
          todos: todos,
          inputValue: ""
        })

      case TodoActionTypes.FINISH_TASK:
        todos = state.todos.map(todo => {
          if ( todo.id === action.data.todo.id ) {
            todo.done = true
          }

          return todo
        })

        return Object.assign({}, state, {
          todos
        })

      case TodoActionTypes.REDO_TASK:
        todos = state.todos.map(todo => {
          if ( todo.id === action.data.todo.id ) {
            todo.done = false
          }

          return todo
        })

        return Object.assign({}, state, {
          todos
        })

      case TodoActionTypes.DELETE_TASK:
        todos = state.todos.filter(todo =>
          todo.id !== action.data.todo.id
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
