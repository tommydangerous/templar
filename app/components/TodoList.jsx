import { Types } from 'react-validators';
import React from 'react';

// Components
import Todo from './Todo';

// Shapes
import TodoShape from '../shapes/Todo';

export default function TodoList({ onTodoClick, todos }) {
  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          onClick={() => onTodoClick(todo.id)}
          todo={todo}
        />
      )}
    </ul>
  );
}

TodoList.propTypes = {
  onTodoClick: Types.func.isRequired,
  todos: Types.arrayOf(TodoShape.isRequired).isRequired,
};
