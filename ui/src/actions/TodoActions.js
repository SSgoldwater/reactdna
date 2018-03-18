import AppDispatcher from 'dispatcher/AppDispatcher';
import todoActionTypes from 'data/actionTypes/todoActionTypes';
import Client from 'client/Client';

const client = new Client();

export default {
  fetchTodos: () => {
    client.getTodos().then(r => {
      AppDispatcher.dispatch({
        type: todoActionTypes.FETCH_TODOS,
        todos: r.data
      });
    });
  },
  updateInput: (value) => {
    AppDispatcher.dispatch({
      type: todoActionTypes.UPDATE_INPUT,
      data: { value }
    });
  },
  createTodo: (content) => {
    const todo = JSON.stringify({
      content,
      done: false
    });

    client.createTodo(todo).then(r => {
      AppDispatcher.dispatch({
        type: todoActionTypes.CREATE_TODO,
        todo: r.data
      });
    });
  },
  finishTask: (todo) => {
    const _todo = JSON.stringify(Object.assign(todo, {
      done: true
    }))

    client.updateTodo(_todo).then(r => {
      AppDispatcher.dispatch({
        type: todoActionTypes.UPDATE_TODO,
        todo: r.data
      });
    });
  },
  redoTask: (todo) => {
    const _todo = JSON.stringify(Object.assign(todo, {
      done: false
    }))

    client.updateTodo(_todo).then(r => {
      AppDispatcher.dispatch({
        type: todoActionTypes.UPDATE_TODO,
        todo: r.data
      });
    });
  },
  deleteTask: (todo) => {
    client.deleteTodo(todo).then(r => {
      AppDispatcher.dispatch({
        type: todoActionTypes.DELETE_TODO,
        todo: r.data
      });
    });
  },
};
