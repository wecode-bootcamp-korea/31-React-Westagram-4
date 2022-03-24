import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './../Main/MainBo.scss';
import './../../../styles/common.scss';
import './../../../styles/reset.scss';

const CommentsBox = ({ value, index }) => {
  // props 자리에서 바로 비구조화 할당

  return (
    <li className="commentLi" key={index}>
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
