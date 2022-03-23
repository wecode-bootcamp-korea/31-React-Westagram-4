import { React, useState } from 'react';
import Comment from '../Main/Comment/Comment';
// { profileName, profileUrl, feedContent }
function Feed(props) {
  const [comment, setComment] = useState('');
  const [commentArr, setCommentArr] = useState([]);

  const addCo = event => {
    event.preventDefault();
    setCommentArr(commentArr => [...commentArr, comment]);
  };

  const handleCommentInputValue = e => {
    setComment(e.target.value);
  };
  return (
    <article className="mainBox">
      <div className="top">
        <img
          alt="프로필"
          src="/image/jungsooKim/칠.avif"
          className="profileImage"
        />
        <span className="userName">{props.profileName}</span>
        <img
          alt="더보기"
          className="moreIcon"
          src="/image/jungsooKim/more.png"
        />
      </div>
      <div className="mainFeed">
        <div className="feedBOx">
          <div className="middle">
            <img alt="피드" className="middleImage" src={props.profileUrl} />
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
            <p>{props.feedContent}</p>
            <span>~님 외 10명이 좋아합니다.</span>
            <span>더보기</span>
            <p>30분전</p>
          </div>
        </div>
        <div className="commentBox">
          {commentArr.map((comment, index) => (
            <Comment comment={comment} key={index} />
          ))}
          {props.commnetData.map(list => {
            return <li key={list.userId}>{list.commnet}</li>;
          })}
        </div>

        <div>
          <div className="comment" />
          <input
            className="commnetInput"
            type="text"
            placeholder="댓글달기..."
            onChange={handleCommentInputValue}
          />
          <button onClick={addCo} className="commentButton" type="button">
            개시
          </button>
        </div>
      </div>
    </article>
  );
}

export default Feed;
