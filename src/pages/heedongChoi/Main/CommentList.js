import React from 'react';

const CommentList = props => {
  const { value } = props;
  return (
    <li className="commentText">
      <div>
        <span className="commentor">cat</span>
        {value}
      </div>
    </li>
  );
};

export default CommentList;
