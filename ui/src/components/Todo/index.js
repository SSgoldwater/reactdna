import React from 'react';

import todoActions from 'actions/todoActions';
import styles from './styles';

const Todo = ({ ...props }) => {
  const action = props.todo.done ? (
    <span>
      <button
        onClick={ () => { todoActions.redoTask(props.todo) } }
      >Redo</button>
      <button
        onClick={ () => { todoActions.deleteTask(props.todo) } }
      >Remove</button>
    </span>
  ) : (
    <button
      onClick={ () => { todoActions.finishTask(props.todo) } }
    >Done</button>
  )

  return (
    <div style={ styles.container }>
      { props.todo.content }
      { action }
    </div>
  )
};

export default Todo;
