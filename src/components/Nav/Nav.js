import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import {
  faArrowUpFromBracket,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import '../Nav/Nav.scss';
import '../../styles/common.scss';

const Nav = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav_container">
          <div className="nav_logo">
            <FontAwesomeIcon icon={faInstagram} />
            <span>|</span>
            <h1>westargram</h1>
          </div>
          <div className="nav_input">
            <input type="text" className="search" placeholder="검색" />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="glass" />
          </div>
          <div className="nav_menu">
            <img
              className="westaLogo"
              alt="westa logo"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              className="westaLogo"
              alt="westa search"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              className="westaLogo"
              alt="westa menu"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
