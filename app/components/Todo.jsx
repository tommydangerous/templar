import { Types } from 'react-validators';
import React from 'react';

// Shapes
import TodoShape from '../shapes/Todo';

export default function Todo({ onClick, todo }) {
  const {
    completed,
    text,
  } = todo;

  let body = text;
  if (!!todo.url) {
    body = (
      <a href={todo.url} target="_blank">
        {text}
      </a>
    );
  }

  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {body}
    </li>
  );
}

Todo.propTypes = {
  onClick: Types.func.isRequired,
  todo: TodoShape.isRequired,
};
