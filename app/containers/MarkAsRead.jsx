import { connect } from 'react-redux';
import React from 'react';

// Action Creators
import {
  addTodo,
  markMostRecentCompleted,
} from '../action_creators/todos';
import { removePost } from '../action_creators/posts';

const mapDispatchToProps = (dispatch) => {
  return {
    createOnClickCallback: (post) => {
      return (e) => {
        e.preventDefault();
        dispatch(addTodo(post.title, post.url));
        dispatch(markMostRecentCompleted());
        dispatch(removePost(post));
      };
    },
  };
};

function MarkAsRead({ createOnClickCallback, post }) {
  return (
    <a href="#" onClick={createOnClickCallback(post)}>
      Mark as Read
    </a>
  );
}

export default connect(null, mapDispatchToProps)(MarkAsRead);
