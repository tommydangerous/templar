import { Provider } from 'react-redux';
import React from 'react';

// Stores
import configureStore from '../stores/configureStore';

// Components
import App from '../components/App';

const store = configureStore({
  posts: {
    loading: false,
    posts: [],
    subreddit: null,
  },
  todos: [],
});

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
