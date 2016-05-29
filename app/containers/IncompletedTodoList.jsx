import { connect } from 'react-redux';

// Action Creators
import { toggleTodo } from '../action_creators/todos';

// Components
import TodoList from '../components/TodoList';

const incompletedTodos = (todos) => {
  return todos.filter(t => !t.completed);
};

const mapStateToProps = (state) => {
  return {
    todos: incompletedTodos(state.todos),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

const AllTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default AllTodos;
