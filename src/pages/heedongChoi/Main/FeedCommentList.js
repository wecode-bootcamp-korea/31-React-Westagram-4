import React from 'react';

const FeedCommentList = ({ userName, content }) => {
  return (
    <li>
      <span className="commentor">{userName}</span>
      <span>{content}</span>
    </li>
  );
};

export default FeedCommentList;
