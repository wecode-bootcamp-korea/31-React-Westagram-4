import React from 'react';

const MyCommentList = ({ id, userName, content }) => {
  return (
    <li key={id} className="commentText">
      <div>
        <span className="commentor">{userName}</span>
        {content}
      </div>
    </li>
  );
};

export default MyCommentList;
