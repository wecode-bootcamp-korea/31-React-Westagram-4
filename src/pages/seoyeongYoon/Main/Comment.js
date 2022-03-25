import React from 'react';
// import '../../seoyeongYoon/Main/MainSeo.scss';

const userComment = ({ userComment: { userId, content } }) => {
  return (
    <li>
      <span>
        {userId}
        {content}
      </span>
    </li>
  );
};
export default userComment;
