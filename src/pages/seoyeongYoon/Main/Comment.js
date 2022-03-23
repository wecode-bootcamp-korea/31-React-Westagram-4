import React, { useState } from 'react';
// import '../../seoyeongYoon/Main/MainSeo.scss';

const Comment = props => {
  const id = props.userComment.id;
  const userId = props.userComment.userId;
  const content = props.userComment.content;

  return (
    <li>
      <span>
        {userId}
        {content}
      </span>
    </li>
  );
};
export default Comment;
