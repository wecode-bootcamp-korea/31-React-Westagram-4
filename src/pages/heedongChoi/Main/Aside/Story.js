import React from 'react';

const Story = ({ name, lastLogin }) => {
  return (
    <div className="Story">
      <i className="fas fa-user-circle" />
      <div className="asideUserInfo">
        <p>{name}</p>
        <p>{lastLogin}</p>
      </div>
    </div>
  );
};
export default Story;