import React from 'react';

const CommentList = props => {
  return (
    <li key={props.index} className="commentText">
      <div>
        <span className="commentor">cat</span>
        {props.value}
      </div>
    </li>
  );
};

export default CommentList;
