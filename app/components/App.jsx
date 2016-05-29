import React from 'react';

// Components
import AddTodo from '../containers/AddTodo';
import CompletedTodoList from '../containers/CompletedTodoList';
import FetchPostsButton from '../containers/FetchPostsButton';
import IncompletedTodoList from '../containers/IncompletedTodoList';
import Posts from '../containers/Posts';

export default function App() {
  return (
    <div>
      <FetchPostsButton />
      <AddTodo />

      <h1>Posts:</h1>
      <Posts />

      <h1>Todos:</h1>
      <IncompletedTodoList />

      <h1>Completed:</h1>
      <CompletedTodoList />
    </div>
  );
}
