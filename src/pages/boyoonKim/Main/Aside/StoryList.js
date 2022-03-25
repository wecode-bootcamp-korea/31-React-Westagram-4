import React from 'react';

const StoryList = ({ id, userId, userImg, loginTime }) => {
  return (
    <ul>
      <li key={id} className="StoryList">
        <div className="img_box">
          <img alt="profile" src={userImg} className="profile_img" />
        </div>
        <div className="profile_info">
          <p className="profile_id">{userId}</p>
          <p className="profile_introduce">{loginTime}</p>
        </div>
      </li>
    </ul>
  );
};

export default StoryList;
