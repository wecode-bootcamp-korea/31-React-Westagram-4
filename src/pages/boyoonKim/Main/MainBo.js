import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import Nav from '../../../components/Nav/Nav';
import CommentsBox from './CommentsBox';
import '../Main/MainBo.scss';

const Main = () => {
  const [comments, setComments] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const onSubmit = event => {
    event.preventDefault(); // 배열이 초기화 되지 않도록. 댓글 쌓일 수 있게
    if (comments === '') {
      return;
    }
    setCommentArray(commentsValueList => [...commentsValueList, comments]);
    setComments('');
  };

  function handleInput(event) {
    const { value } = event.target;
    setComments(value);
  }

  return (
    <div>
      <Nav />
      <main className="main">
        <div className="main_container">
          <div className="main_feeds_left">
            <div className="feeds_left_box">
              <div className="left_box_title">
                <div className="feeds_img_box">
                  <img
                    alt="profile"
                    src="/image/boyoonKim/01.jpg"
                    className="profile_img"
                  />
                </div>
                <div className="profile_info">
                  <p className="profile_id">bboyooning</p>
                </div>
                <button type="button" className="feedAddBtn">
                  <img
                    alt="feedAddIcon"
                    src="/image/boyoonKim/add_icon.png"
                    className="feedAddIcon"
                  />
                </button>
              </div>
              <div className="box_mid">
                <img alt="feed_img" src="/image/boyoonKim/02.jpg" />
              </div>
              <div className="box_bottom">
                <div className="box_icons">
                  <ul className="icons_list">
                    <li>
                      <button type="button" className="state_btn">
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                    </li>
                    <li>
                      <button type="button" className="state_btn">
                        <FontAwesomeIcon icon={faComment} flip="horizontal" />
                      </button>
                    </li>
                    <li>
                      <button type="button" className="state_btn">
                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                      </button>
                    </li>
                    <ul className="icons_list_bookmark">
                      <button type="button" className="state_btn bookmark">
                        <FontAwesomeIcon icon={faBookmark} />
                      </button>
                    </ul>
                  </ul>
                </div>
                <div className="box_comments">
                  <div className="likes_comments">
                    <div className="likes_user">
                      <img
                        alt="profile"
                        src="/image/boyoonKim/03.jpg"
                        className="profile_img"
                      />
                    </div>
                    <div className="comments_info">
                      <p className="comments_title">
                        <span className="user_id_span">bboyooning</span>님
                        <span>&nbsp;외</span>
                        <span className="likes_num">&nbsp;10명</span>이
                        좋아합니다
                      </p>
                    </div>
                  </div>
                  <div className="comments_list">
                    <ul className="comments_info_ul">
                      <li>
                        <div className="comments_title">
                          <span className="user_id">아이디</span>
                          <span className="comments_contents">
                            나는 나만의 속도가 있다
                          </span>
                          <button type="button" className="comment_btn">
                            더보기
                          </button>
                        </div>
                        <div className="main_left_box_comment">
                          <ul>
                            {commentArray.map((value, index) => (
                              <CommentsBox
                                key={(value, index)}
                                value={value}
                                index={index}
                              />
                            ))}
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="feeds_time">
                    <p className="time">42분 전</p>
                  </div>
                  <form className="comments_div" onSubmit={onSubmit}>
                    <input
                      type="text"
                      placeholder="댓글 달기..."
                      value={comments}
                      onChange={handleInput}
                    />
                    <button>게시</button>
                  </form>
                </div>
              </div>
            </div>
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
