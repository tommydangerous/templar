import { connect } from 'react-redux';
import React from 'react';

// Action Creators
import { addTodo } from '../action_creators/todos';
import { removePost } from '../action_creators/posts';

const mapDispatchToProps = (dispatch) => {
  return {
    createCallback: (post) => {
      return (e) => {
        e.preventDefault();
        dispatch(addTodo(post.title, post.url));
        dispatch(removePost(post));
      };
    },
  };
};

function SaveForLater({ createCallback, post }) {
  return (
    <a href="#" onClick={createCallback(post)}>
      Save For Later
    </a>
  );
}

export default connect(null, mapDispatchToProps)(SaveForLater);
