import React, { Component } from 'react';
import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  };

  _add = () => {
    this.setState({ count: this.state.count + 1 });
  }

  _subtract = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        Homepage
        <br />
        <p id={ `count` }>
          Count: { this.state.count }
        </p>
        <br />
        <button
          id={ `addButton` }
          onClick={ this._add }
        >Add</button>
        <button
          onClick={ this._subtract }
        >!Add</button>
      </div>
    );
  }
}

export default Home;
