import React, { useState, useEffect } from 'react';

import AsideBo from './Aside/AsideBo';
import Nav from '../../../components/Nav/Nav';
import FeedBo from './FeedBo';
import './MainBo.scss';

const Main = () => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('/data/boyoonKim/feedData.json')
      .then(res => res.json())
      .then(data => setCommentList(data));
  }, []);

  return (
    <div>
      <Nav />
      <main className="MainBo">
        <div className="main_container">
          <div className="feedArea">
            {commentList.map(feed => {
              return (
                <FeedBo
                  key={feed.id}
                  userName={feed.userName}
                  userImg={feed.userImg}
                  userComment={feed.userComment}
                />
              );
            })}
          </div>
          <div className="main_feeds_right">
            <div>
              <div className="right_box_title">
                <div className="feeds_profile">
                  <div className="feeds_box">
                    <img
                      alt="profile"
                      src="/image/boyoonKim/04.jpg"
                      className="profile_img"
                    />
                  </div>
                  <div className="profile_info">
                    <p className="profile_id">wecode</p>
                    <p className="profile_introduce">위코드</p>
                  </div>
                </div>
              </div>
              <AsideBo />
              <footer className="footer">
                <span>© 2022. Kim Bo Yoon. All rights reserved.</span>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
