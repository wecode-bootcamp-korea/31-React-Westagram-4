import React from 'react';

const RecommendList = ({ id, userName, userImg, followList }) => {
  return (
    <li key={id} className="RecommendList">
      <div className="img_box">
        <img alt="profile" src={userImg} className="profile_img" />
      </div>
      <div className="profile_info">
        <p className="profile_id">{userName}</p>
        <p className="profile_introduce">{followList}</p>
      </div>
      <div className="follow_btn">
        <button type="button" className="btn">
          팔로우
        </button>
      </div>
    </li>
  );
};

export default RecommendList;
