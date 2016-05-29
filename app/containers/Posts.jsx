import { connect } from 'react-redux';
import React from 'react';

// Components
import Post from '../components/Post';

function mapStateToProps(state) {
  const {
    loading,
    posts,
  } = state.posts;

  return {
    loading,
    posts,
  };
}

function Posts({ loading, posts }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ol>
      {posts.map(post => <Post key={post.id} post={post} />)}
    </ol>
  );
}

export default connect(mapStateToProps)(Posts);
