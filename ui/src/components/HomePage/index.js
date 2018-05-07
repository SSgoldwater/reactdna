import React from 'react';
import todoActions from '../../actions/todoActions';

import Todo from 'components/Todo';
import styles from './styles';

const HomePage = ({ ...props }) => {
  const updateInput = (e) => {
    e.preventDefault();

    todoActions.updateInput(e.target.value)
  }

  const create = (e) => {
    e.preventDefault();

    todoActions.createTodo(props.inputValue);
  }

  const tasks = props.todos.map(todo =>
    !todo.done ? (
      <Todo
        key={ todo.id }
        todo={ todo }
      />
    ) : null
  );

  const done = props.todos.map(todo =>
    todo.done ? (
      <Todo
        key={ todo.id }
        todo={ todo }
      />
    ) : null
  );

  return (
    <div>
      <h4>Homepage</h4>
      Create Todo
      <form>
        <input
          type={ "text" }
          placeholder={ "Wash the car" }
          value={ props.inputValue }
          onChange={ (e) => { updateInput(e) } }
        />
        <button
          id={ `addButton` }
          onClick={ create }
        >Create</button>
      </form>
      <h5>Tasks</h5>
        { tasks }
      <h5>Done</h5>
        { done }
    </div>
  );
}

export default HomePage;
