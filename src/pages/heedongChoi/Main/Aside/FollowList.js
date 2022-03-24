import React from 'react';

const FollowList = ({ name }) => {
  const follow = '회원님을 팔로우 합니다';
  return (
    <div className="FollowList">
      <i className="fas fa-user-circle" />
      <div className="asideUserInfo">
        <p>{name}</p>
        <p>{follow}</p>
      </div>
    </div>
  );
};

export default FollowList;
