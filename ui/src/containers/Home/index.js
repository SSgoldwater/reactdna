import React, { Component } from 'react';
import { Container } from 'flux/utils';
import HomePage from 'components/HomePage';
import TodoStore from 'data/stores/TodoStore';

class Home extends Component {
  constructor(props) {
    super(props);

    const todoState = TodoStore.getState();

    this.state = {
      inputValue: todoState.inputValue,
      todos: todoState.todos
    };
  }

  static getStores() {
    return [TodoStore];
  }

  static calculateState() {
    const todoState = TodoStore.getState();

    return {
      inputValue: todoState.inputValue,
      todos: todoState.todos
    };
  }

  render() {
    return (
      <HomePage
        todos={ this.state.todos }
        inputValue={ this.state.inputValue }
      />
    );
  }
};

const _Home = Container.create(Home);

export default _Home;
