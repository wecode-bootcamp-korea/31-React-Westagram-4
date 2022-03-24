import React, { useState, useEffect } from 'react';

import Nav from '../../../components/Nav/Nav';
import Feed from './Feed';
import '../Main/MainBo.scss';

const Main = () => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('/data/boyoonKim/feedData.json') // api 주소로 요청을 보내고, 응답이 오면 // 경로 잘 확인할 것!
      // .then(res => console.log(res))
      .then(res => res.json()) // 그 응답을 받아서 가져온 형식이 json 이란 보장이 없기때문에, 이를 json파일로 변환해줘라
      .then(data => setCommentList(data)); // 다시 그 변환된 파일을 어떤 작동을 할 수 있도록 해주는 로직임
  }, []);

  return (
    <div>
      <Nav />
      <main className="main">
        <div className="main_container">
          <div className="feedArea">
            {commentList.map(feed => {
              return (
                <Feed
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
              <div className="story_box box_tool">
                <div className="box_contents">
                  <div className="box_top">
                    <span className="story_title ">스토리</span>
                    <span className="more_info">
                      <a href="#">모두 보기</a>
                    </span>
                  </div>
                  <div className="box_list">
                    <ul>
                      <li className="story_list_li box_list_li">
                        <div className="img_box">
                          <img
                            alt="profile"
                            src="/image/boyoonKim/05.jpg"
                            className="profile_img"
                          />
                        </div>
                        <div className="profile_info">
                          <p className="profile_id">아이디</p>
                          <p className="profile_introduce">16분전</p>
                        </div>
                      </li>
                      <li className="story_list_li box_list_li">
                        <div className="img_box">
                          <img
                            alt="profile"
                            src="/image/boyoonKim/06.jpg"
                            className="profile_img"
                          />
                        </div>
                        <div className="profile_info">
                          <p className="profile_id">아이디</p>
                          <p className="profile_introduce">16분전</p>
                        </div>
                      </li>
                      <li className="story_list_li box_list_li">
                        <div className="img_box">
                          <img
                            alt="profile"
                            src="/image/boyoonKim/07.jpg"
                            className="profile_img"
                          />
                        </div>
                        <div className="profile_info">
                          <p className="profile_id">아이디</p>
                          <p className="profile_introduce">16분전</p>
                        </div>
                      </li>
                      <li className="story_list_li box_list_li">
                        <div className="img_box">
                          <img
                            alt="profile"
                            src="/image/boyoonKim/08.jpg"
                            className="profile_img"
                          />
                        </div>
                        <div className="profile_info">
                          <p className="profile_id">아이디</p>
                          <p className="profile_introduce">16분전</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="recommend_box box_tool">
                <div className="box_contents">
                  <div className="box_top">
                    <span className="recommend-title">회원님을 위한 추천</span>
                    <span className="more_info">
                      <a href="#">모두 보기</a>
                    </span>
                  </div>
                  <div className="recommend_list box_list">
                    <ul>
                      <li className="recommend_list_li box_list_li">
                        <div className="img_box">
                          <img
                            alt="profile"
                            src="/image/boyoonKim/09.jpg"
                            className="profile_img"
                          />
                        </div>
                        <div className="profile_info">
                          <p className="profile_id">아이디</p>
                          <p className="profile_introduce">
                            아이디 외 2명이 팔로우
                          </p>
                        </div>
                        <div className="follow_btn">
                          <button type="button" className="btn">
                            팔로우
                          </button>
                        </div>
                      </li>
                      <li className="recommend_list_li box_list_li">
                        <div className="img_box">
                          <img
                            alt="profile"
                            src="/image/boyoonKim/10.jpg"
                            className="profile_img"
                          />
                        </div>
                        <div className="profile_info">
                          <p className="profile_id">아이디</p>
                          <p className="profile_introduce">
                            아이디 외 2명이 팔로우
                          </p>
                        </div>
                        <div className="follow_btn">
                          <button type="button" className="btn">
                            팔로우
                          </button>
                        </div>
                      </li>
                      <li className="recommend_list_li box_list_li">
                        <div className="img_box">
                          <img
                            alt="profile"
                            src="/image/boyoonKim/02.jpg"
                            className="profile_img"
                          />
                        </div>
                        <div className="profile_info">
                          <p className="profile_id">아이디</p>
                          <p className="profile_introduce">
                            아이디 외 2명이 팔로우
                          </p>
                        </div>
                        <div className="follow_btn">
                          <button type="button">팔로우</button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
