import React from 'react';

// Components
import MarkAsRead from '../containers/MarkAsRead';
import SaveForLater from '../containers/SaveForLater';

const createMarkup = (html) => {
  return {
    __html: html,
  };
};

export default function Post({ post }) {
  const {
    selftext,
    title,
    url,
  } = post;

  return (
    <li>
      <strong>
        <a href={url} target="_blank">
          {title}
        </a>
      </strong>
      <div dangerouslySetInnerHTML={createMarkup(selftext)} />
      <MarkAsRead post={post} />
      <SaveForLater post={post} />
    </li>
  );
}
