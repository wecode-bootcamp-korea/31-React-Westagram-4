import '../Main/MainJung.scss';
import Nav from '../../../components/Nav/Nav';
import { React, useState } from 'react';
// import { createPortal } from 'react-dom';
import Comment from './Comment/Comment';

function Main() {
  const [comment, setComment] = useState('');
  const [commentArr, setCommentArr] = useState([]);

  const addCo = comment => {
    setCommentArr(commentArr => [...commentArr, comment]);
  };

  const handleCommentInputValue = e => {
    setComment(e.target.value);
  };

  const commentUp = e => {
    addCo(comment);
  };
  // const commentEnter = event => {
  //   if (event.key === 'Enter') {
  //     addCo(comment);
  //     setComment('');
  //   }
  // }; 만들긴했는데 어따써야될지

  return (
    <>
      <Nav />

      <article className="mainBox">
        <div className="top">
          <img
            alt="프로필"
            src="/image/jungsooKim/칠.avif"
            className="profileImage"
          />
          <span className="userName">UserName</span>
          <img
            alt="더보기"
            className="moreIcon"
            src="/image/jungsooKim/more.png"
          />
        </div>
        <div className="mainFeed">
          <div className="feedBOx">
            <div className="middle">
              <img
                alt="피드"
                className="middleImage"
                src="/image/jungsooKim/andrew-romanov-qlgll3u2FTk-unsplash.jpg"
              />
            </div>
            <div className="bottom">
              <div className="bottom-Icon">
                <img
                  alt="아이콘하트"
                  className="icon"
                  src="/image/jungsooKim/heart after.png"
                />
                <img
                  alt="아이콘말풍선"
                  className="icon"
                  src="/image/jungsooKim/balloon.png"
                />
                <img
                  alt="아이콘보내기"
                  className="icon"
                  src="/image/jungsooKim/send.png"
                />
                <img
                  alt="아이콘북마크"
                  className="icon last"
                  src="/image/jungsooKim/premium-icon-bookmarks-4218997.png"
                />
              </div>
              <span>~님 외 10명이 좋아합니다.</span>
              <span>더보기</span>
              <p>30분전</p>
            </div>
          </div>
          <div className="commentBox">
            {commentArr.map((comment, index) => (
              <Comment comment={comment} key={index} />
            ))}
          </div>
          <div>
            <form className="commentForm">
              <div className="comment" />
              <input
                className="commnetInput"
                type="text"
                placeholder="댓글달기..."
                onChange={handleCommentInputValue}
              />
              <button
                onClick={commentUp}
                className="commentButton"
                type="button"
              >
                개시
              </button>
            </form>
          </div>
        </div>
      </article>
      <article className="mainRight">
        <div className="top">
          <img
            alt="프로필"
            className="profileImage"
            src="/image/jungsooKim/다운로드.png"
          />
          <div className="profileSubscribe">
            <p className="profileSub1">wecode_bootcamp</p>
            <p className="profileSub2">wecode | 위코드</p>
          </div>
        </div>
        <div className="storyMain">
          <div className="story Top">
            <span>스토리</span>
            <span className="allView">모두보기</span>
          </div>
          <div className="storyContent">
            <div className="CommonBomx">
              <img
                alt="프로필"
                className="profileImage"
                src="/image/jungsooKim/일.avif"
              />
              <div className="discribe">
                <span>
                  id
                  <br className="hour" />
                  hour
                </span>
              </div>
            </div>
            <div className="CommonBomx">
              <img
                alt="프로필"
                className="profileImage"
                src="/image/jungsooKim/이.avif"
              />
              <div className="discribe">
                <span>
                  id
                  <br className="hour" />
                  hour
                </span>
              </div>
            </div>
            <div className="CommonBomx">
              <img
                alt="프로필"
                className="profileImage"
                src="/image/jungsooKim/삼.avif"
              />
              <div className="discribe">
                <span>
                  id
                  <br className="hour" />
                  hour
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="reCommandMain">
          <div className="reCommand Top">
            <span>회원님을 위한 추천</span>
            <span className="allView">모두보기</span>
          </div>
          <div className="reCommandContent">
            <div className="CommonBomx">
              <img
                alt="프로필"
                className="profileImage"
                src="/image/jungsooKim/사.avif"
              />
              <div className="discribe">
                <span>
                  id
                  <br className="hour" />
                  hour
                </span>
                <span className="follow">팔로우</span>
              </div>
            </div>
            <div className="CommonBomx">
              <img
                alt="프로필"
                className="profileImage"
                src="/image/jungsooKim/오.avif"
              />
              <div className="discribe">
                <span>
                  id
                  <br className="hour" />
                  hour
                </span>
                <span className="follow">팔로우</span>
              </div>
            </div>
            <div className="CommonBomx">
              <img
                alt="프로필"
                className="profileImage"
                src="/image/jungsooKim/육.avif"
              />
              <div className="discribe">
                <span>
                  id
                  <br className="hour" />
                  hour
                </span>
                <span className="follow">팔로우</span>
              </div>
            </div>
          </div>
        </div>
        <div className="information">
          Instargram정보 지원 홍보센터 API 채용정보 개인정보처리 방침 약관
          디렉터리 프로필 해시태그 언어 2019INSTARGRAM
        </div>
        <div className="divMainRight" />
      </article>
    </>
  );
}

export default Main;
