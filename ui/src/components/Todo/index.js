import React from 'react';

import TodoActions from 'actions/TodoActions';
import styles from './styles';

const Todo = ({ ...props }) => {
  const action = props.todo.done ? (
    <span>
      <button
        onClick={ () => { TodoActions.redoTask(props.todo) } }
      >Redo</button>
      <button
        onClick={ () => { TodoActions.deleteTask(props.todo) } }
      >Remove</button>
    </span>
  ) : (
    <button
      onClick={ () => { TodoActions.finishTask(props.todo) } }
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
