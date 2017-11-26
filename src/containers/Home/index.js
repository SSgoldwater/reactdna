import React, { Component } from 'react';
import { Container } from 'flux/utils';
import HomePage from 'components/HomePage';
import CounterStore from 'data/stores/CounterStore';

class Home extends Component {
  constructor(props) {
    super(props);

    const _counterState = CounterStore.getState();

    this.state = {
      count: _counterState.get(`count`)
    };
  }

  static getStores() {
    return [CounterStore];
  }

  static calculateState() {
    const _counterState = CounterStore.getState();

    return {
      count: _counterState.get(`count`)
    };
  }

  render() {
    return (
      <HomePage
        count={ this.state.count }
      />
    );
  }
};

const _Home = Container.create(Home);

export default _Home;
