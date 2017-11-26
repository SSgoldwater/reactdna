import AppDispatcher from 'dispatcher/AppDispatcher';
import CounterActionTypes from 'data/actionTypes/CounterActionTypes';

export default {
  addCount: () => {
    AppDispatcher.dispatch({
      type: CounterActionTypes.ADD,
      data: null
    });
  },
  subtractCount: () => {
    AppDispatcher.dispatch({
      type: CounterActionTypes.SUBTRACT,
      data: null
    });
  }
};
