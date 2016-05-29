// Actions
import {
  POSTS_RECEIVED,
  POSTS_REMOVE_POST,
  POSTS_REQUESTED,
} from '../actions/posts';

export default function posts(state = {}, action) {
  switch (action.type) {
    case POSTS_RECEIVED: {
      return Object.assign({}, state, {
        loading: false,
        posts: action.posts,
        subreddit: action.subreddit,
      });
    }
    case POSTS_REMOVE_POST: {
      return Object.assign({}, state, {
        posts: state.posts.filter(post => post.id !== action.id),
      });
    }
    case POSTS_REQUESTED: {
      return Object.assign({}, state, {
        loading: true,
        subreddit: action.subreddit,
      });
    }
    default: {
      return state;
    }
  }
}
