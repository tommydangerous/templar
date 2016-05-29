// Actions
import {
  TODOS_ADD,
  TODOS_MARK_MOST_RECENT_COMPLETED,
  TODOS_TOGGLE,
} from '../actions/todos';

const addTodo = (action) => {
  return {
    completed: false,
    id: action.id,
    text: action.text,
    url: action.url,
  };
};

const toggleTodo = (todo) => {
  return Object.assign({}, todo, { completed: !todo.completed });
}

const todos = (state = [], action) => {
  switch (action.type) {
    case TODOS_ADD: {
      return [
        ...state,
        addTodo(action),
      ];
    }
    case TODOS_MARK_MOST_RECENT_COMPLETED: {
      return state.map(t => {
        if (t.id !== action.id) {
          return t;
        }
        return Object.assign({}, t, { completed: true });
      });
    }
    case TODOS_TOGGLE: {
      return state.map(t => {
        if (t.id !== action.id) {
          return t;
        }
        return toggleTodo(t);
      });
    }
    default: {
      return state;
    }
  }
};

export default todos;
