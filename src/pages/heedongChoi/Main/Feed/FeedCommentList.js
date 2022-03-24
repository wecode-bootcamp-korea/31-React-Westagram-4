import React from 'react';

const FeedCommentList = ({ userName, content }) => {
  return (
    <li className="FeedCommentList">
      <span className="commentor">{userName}</span>
      <span>{content}</span>
    </li>
  );
};

export default FeedCommentList;
