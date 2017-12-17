import React from 'react';
import CounterActions from 'actions/CounterActions';
import styles from './styles';

const HomePage = ({ ...props }) => {

  const _add = () => {
    CounterActions.addCount();
  }

  const _subtract = () => {
    CounterActions.subtractCount();
  }

  return (
    <div>
      Homepage
      <br />
      <p id={ `count` }>
        Count: { props.count }
      </p>
      <br />
      <button
        id={ `addButton` }
        onClick={ _add }
      >Add</button>
      <button
        id={ `subtractButton` }
        onClick={ _subtract }
      >!Add</button>
    </div>
  );
}

export default HomePage;
