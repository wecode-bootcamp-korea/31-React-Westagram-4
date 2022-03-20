import React from 'react';

function Comment({ value, index }) {
  return (
    <li key={index}>
      <div>
        <span>kyunghyun</span> {value}
      </div>
    </li>
  );
}

export default Comment;
