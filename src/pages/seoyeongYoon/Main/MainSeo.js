import React, { useState } from 'react';
import '../../seoyeongYoon/Main/MainSeo.scss';
import Nav from '../../../components/Nav/Nav';
import Comment from '../Main/Comment';

const Main = () => {
  let [comment, setComment] = useState('');
  let [commentArr, setCommentArr] = useState([]);

  const x = e => {
    //댓글입력값
    setComment(e.target.value);
  };
  // const y = e => {
  //   e.preventDefault();
  //   setCommentArr(arr => [...arr, comment]);
  //   setComment('');

  const yy = e => {
    e.preventDefault();
    const y = [...commentArr]; //a라는 변수를 ...댓글 이라는 배열로 만들어줘라
    y.push(comment); //배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
    setCommentArr(y); //수정할땐, 변경값에 넣어줘야함
    setComment('');
  };

  return (
    <>
      <Nav />
      <div className="container">
        <main className="main_box">
          <div className="contents_left">
            <div className="contents_profile">
              <img
                class="profile"
                src="/image/seoyeongYoon/images/위코드.png"
                alt="profile_image"
              />
              <span>wecode_31</span>
              <button className="profile_more_btn">
                <img
                  src="/image/seoyeongYoon/images/more.png"
                  alt="profile_button"
                />
              </button>
            </div>

            <div className="contents_box">
              <img
                src="/image/seoyeongYoon/images/sim.jpg"
                alt="profile_image"
              />
              <div className="contents_icon_groups">
                <div className="contents_icon_groups_wrap">
                  <div className="heart" />
                  <img
                    className="comment"
                    src="/image/seoyeongYoon/images/comment.png"
                    alt="comment_image"
                  />
                  <img
                    className="upload"
                    src="/image/seoyeongYoon/images/upload.png"
                    alt="upload_image"
                  />
                </div>
                <img
                  className="bookmark"
                  src="/image/seoyeongYoon/images/bookmark.png"
                  alt="bookmark_image"
                />
              </div>
              <div className="comments_box_like">
                <img
                  src="/image/seoyeongYoon/images/위코드.png"
                  alt="profile_image"
                />
                <div className="comments_box_like_id">
                  <span>wecode_31님 외 10명이 좋아합니다</span>
                </div>
              </div>

              <div className="comments_text">
                <div className="comments_info comment_list_ul">
                  <div className="comments_tit">
                    <span className="user_id"></span>
                    <span className="comment_contents"></span>
                    <div>
                      {commentArr.map((item, index) => {
                        return <Comment comment={item} key={index} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={yy} className="comments_form">
              <div className="input_box">
                <input
                  type="text"
                  placeholder="댓글달기✏️"
                  id="comment_input"
                  onChange={x} //X함수값이 변경되면 발생
                  value={comment} //벨류는 커먼트의 요소값으로 받는다?
                />
              </div>
              <div className="button_box">
                <button type="button" className="post_btn" onClick={yy}>
                  게시
                </button>
              </div>
            </form>
          </div>

          <div className="side_fixed">
            <div className="side_fixed_wrap">
              <div className="contents_right">
                <div className="contents_profile_aside">
                  <img
                    src="/image/seoyeongYoon/images/위코드.png"
                    alt="profile_image"
                  />
                  <div className="profile_info">
                    <span className="info">wecode_bootcamp</span>
                    <span>wecode | 위코드</span>
                  </div>
                </div>
              </div>

              <div className="follow_title_wrap">
                <div className="follow_title">
                  <span className="story">스토리</span>
                  <a href="#">
                    <span>모두 보기</span>
                  </a>
                </div>
                <div className="follow_list_scroll">
                  <div className="follow_info">
                    <img
                      src="/image/seoyeongYoon/images/위코드.png"
                      alt="profile_image"
                    />
                    <div className="profile_info">
                      <p>wecode</p>
                      <p>1시간 전</p>
                    </div>
                  </div>
                  <div className="follow_info">
                    <img
                      src="/image/seoyeongYoon/images/위코드.png"
                      alt="profile_image"
                    />
                    <div className="profile_info">
                      <p>wecode</p>
                      <p>1시간 전</p>
                    </div>
                  </div>
                  <div className="follow_info">
                    <img
                      src="/image/seoyeongYoon/images/위코드.png"
                      alt="profile_image"
                    />
                    <div className="profile_info">
                      <p>wecode</p>
                      <p>1시간 전</p>
                    </div>
                  </div>
                  <div className="follow_info">
                    <img
                      src="/image/seoyeongYoon/images/위코드.png"
                      alt="profile_image"
                    />
                    <div className="profile_info">
                      <p>wecode</p>
                      <p>1시간 전</p>
                    </div>
                  </div>
                  <div className="follow_info">
                    <img
                      src="/image/seoyeongYoon/images/위코드.png"
                      alt="profile_image"
                    />
                    <div className="profile_info">
                      <p>wecode</p>
                      <p>1시간 전</p>
                    </div>
                  </div>
                  <div className="follow_info">
                    <img
                      src="/image/seoyeongYoon/images/위코드.png"
                      alt="profile_image"
                    />
                    <div className="profile_info">
                      <p>wecode</p>
                      <p>1시간 전</p>
                    </div>
                  </div>
                  <div className="follow_info">
                    <img
                      src="/image/seoyeongYoon/images/위코드.png"
                      alt="profile_image"
                    />
                    <div className="profile_info">
                      <p>wecode</p>
                      <p>1시간 전</p>
                    </div>
                  </div>

                  <div className="follow_info">
                    <img
                      src="/image/seoyeongYoon/images/위코드.png"
                      alt="profile_image"
                    />
                    <div className="profile_info">
                      <p>wecode</p>
                      <p>1시간 전</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="recommend">
                <div className="recommend_title">
                  <span>회원님을 위한 추천</span>
                  <a href="#">
                    <span>모두 보기</span>
                  </a>
                </div>
                <div className="recommend_info">
                  <img
                    src="/image/seoyeongYoon/images/위코드.png"
                    alt="profile_image"
                  />
                  <div className="recommend_id">
                    <p>wecode</p>
                    <p>외 10명..</p>
                  </div>
                  <a href="#">
                    <span>팔로우</span>
                  </a>
                </div>

                <div className="recommend_info">
                  <img
                    src="/image/seoyeongYoon/images/위코드.png"
                    alt="profile_image"
                  />
                  <div clas="recommend_id">
                    <p>wecode</p>
                    <p>외 10명..</p>
                  </div>
                  <a href="#">
                    <span>팔로우</span>
                  </a>
                </div>

                <div className="recommend_info">
                  <img
                    src="/image/seoyeongYoon/images/위코드.png"
                    alt="profile_image"
                  />
                  <div class="recommend_id">
                    <p>wecode</p>
                    <p>외 10명..</p>
                  </div>
                  <a href="#">
                    <span>팔로우</span>
                  </a>
                </div>
              </div>

              <footer className="footer">
                <div className="footer_info">
                  <span>
                    instargram 정보 지원 홍보 센터 API <br />
                    채용 정보 개인정보처리방침 약관 <br />
                    디렉터리 프로필 해시태그 언어 <br />
                    copy 2022 instargram
                  </span>
                </div>
              </footer>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Main;
