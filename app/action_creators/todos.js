import {
  TODOS_ADD,
  TODOS_MARK_MOST_RECENT_COMPLETED,
  TODOS_TOGGLE,
} from '../actions/todos';

let nextTodoId = 0;

export const addTodo = (text, url) => {
  nextTodoId++;
  return {
    type: TODOS_ADD,
    id: nextTodoId,
    text,
    url,
  };
}

export const markMostRecentCompleted = () => {
  return {
    type: TODOS_MARK_MOST_RECENT_COMPLETED,
    id: nextTodoId,
  };
}

export const toggleTodo = (id) => {
  return {
    type: TODOS_TOGGLE,
    id,
  };
}
