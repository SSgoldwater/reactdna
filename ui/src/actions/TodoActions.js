import AppDispatcher from 'dispatcher/AppDispatcher';
import TodoActionTypes from 'data/actionTypes/TodoActionTypes';

export default {
  updateInput: (value) => {
    AppDispatcher.dispatch({
      type: TodoActionTypes.UPDATE_INPUT,
      data: { value }
    });
  },
  createTodo: (content) => {
    AppDispatcher.dispatch({
      type: TodoActionTypes.CREATE_TODO,
      data: { content }
    });
  },
  finishTask: (todo) => {
    AppDispatcher.dispatch({
      type: TodoActionTypes.FINISH_TASK,
      data: { todo }
    });
  },
  redoTask: (todo) => {
    AppDispatcher.dispatch({
      type: TodoActionTypes.REDO_TASK,
      data: { todo }
    });
  },
  deleteTask: (todo) => {
    AppDispatcher.dispatch({
      type: TodoActionTypes.DELETE_TASK,
      data: { todo }
    });
  },
};
