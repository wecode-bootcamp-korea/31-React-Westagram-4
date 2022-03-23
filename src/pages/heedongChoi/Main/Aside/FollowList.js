import React from 'react';

const FollowList = ({ name }) => {
  return (
    <div className="asideUser">
      <i className="fas fa-user-circle" />
      <div className="asideUserInfo">
        <p>{name}</p>
        <p>회원님을 팔로우 합니다</p>
      </div>
    </div>
  );
};

export default FollowList;
