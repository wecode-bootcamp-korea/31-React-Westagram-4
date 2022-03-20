import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './../Main/MainBo.scss';
import './../../../styles/common.scss';
import './../../../styles/reset.scss';

const CommentsBox = ({ value, index }) => {
  return (
    <li key={index}>
      <div>
        <span className="userId">아이디</span>
        <span clsssName="commentsContents">{value}</span>
      </div>
      <button type="button">
        <FontAwesomeIcon icon={faHeart} />
      </button>
    </li>
  );
};

export default CommentsBox;
