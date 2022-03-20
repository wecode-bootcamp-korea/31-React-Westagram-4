import React from 'react';

const CommentList = props => {
  return (
    <li className="commentText">
      <div>
        <span className="commentor">cat</span>
        {props.value}
      </div>
    </li>
  );
};

export default CommentList;
