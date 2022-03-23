import React, { useState, useEffect } from 'react';
import '../../seoyeongYoon/Main/MainSeo.scss';
import Nav from '../../../components/Nav/Nav';
import Comment from '../Main/Comment';
import Feed from '../Main/Feed';

const MainSeo = () => {
  const [comment, setComment] = useState('');
  const [commentArr, setCommentArr] = useState([]);
  const [feedInfo, setFeedInfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentlist.json')
      .then(response => response.json())
      .then(res => console.log(res))
      .then(data => setFeedInfo(data));
  }, []);

  //댓글입력 input
  const commentInput = e => {
    setComment(e.target.value);
    console.log(e.target.value);
  };
  //댓글입력
  const addComment = e => {
    e.preventDefault(); //이벤트 고유의 동작을 중단시킴
    const arr = [...commentArr]; //변수를 ...댓글 이라는 배열로 만들어줘라
    arr.push(comment); //배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
    setCommentArr(arr); //수정할땐, 변경값에 넣어줘야함
    setComment('');
  };

  return (
    <>
      <Nav />
      <div className="container">
        <main className="main_box">
          {feedInfo.map(feedInfo => (
            <Feed key={feedInfo.id} feed={feedInfo} />
          ))}
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
                  <div className="recommend_id">
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

export default MainSeo;
