import React from 'react';

const AsideInfo = ({ userData: { name, time } }) => {
  return (
    <>
      <div className="AsideInfo">
        <img src="/image/seoyeongYoon/images/위코드.png" alt="profile" />
        <div className="profile_info">
          <p>{name}</p>
          <p>{time}</p>
        </div>
      </div>
    </>
  );
};

export default AsideInfo;
