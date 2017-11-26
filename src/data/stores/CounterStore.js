import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';
import AppDispatcher from 'dispatcher/AppDispatcher';
import CounterActionTypes from 'data/actionTypes/CounterActionTypes';

class CounterStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return Immutable.Map({
      count: 0
    });
  }

  reduce(state, action) {
    switch(action.type) {
      case CounterActionTypes.ADD:
        return state.set(`count`, state.get(`count`) + 1);

      case CounterActionTypes.SUBTRACT:
        return state.set(`count`, state.get(`count`) - 1);
      default:
        return state;
    }
  }
};

export default new CounterStore;
