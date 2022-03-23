import React from 'react';

const CommentList = props => {
  const { userName, content } = props;
  return (
    <li className="commentText">
      <div>
        <span className="commentor">{userName}</span>
        {content}
      </div>
    </li>
  );
};

export default CommentList;
