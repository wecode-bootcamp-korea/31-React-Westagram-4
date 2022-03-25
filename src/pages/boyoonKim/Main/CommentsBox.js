import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './../Main/MainBo.scss';

const CommentsBox = ({ value, index }) => {
  return (
    <li className="CommentsBox" key={index}>
      <div>
        <span className="userId">userId</span>
        <span clsssName="commentsContents">{value}</span>
      </div>
      <button type="button">
        <FontAwesomeIcon icon={faHeart} />
      </button>
    </li>
  );
};

export default CommentsBox;
