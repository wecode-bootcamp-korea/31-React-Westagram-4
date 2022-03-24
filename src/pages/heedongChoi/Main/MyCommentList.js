import React from 'react';

const MyCommentList = ({ userName, content }) => {
  return (
    <li className="commentText">
      <div>
        <span className="commentor">{userName}</span>
        <span>{content}</span>
      </div>
    </li>
  );
};

export default MyCommentList;
