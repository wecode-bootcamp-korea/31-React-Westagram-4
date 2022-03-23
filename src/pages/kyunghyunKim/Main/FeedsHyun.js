import React, { useEffect, useState } from 'react';
import '../Main/MainKyung.scss';
import Comment from './Comment';
function FeedsHyun({ userId, feedImg, likeUser }) {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);
  const [commentList, setCommentList] = useState([]);

  function handleCommentsInput(event) {
    setComment(event.target.value);
  }
  function handleOnSubmit(event) {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray(comments => [...comments, comment]);
    setComment('');
  }
  useEffect(() => {
    fetch('/data/kyunghyunKim/commentData.json')
      .then(res => res.json())
      .then(data => setCommentList(data));
  }, []);

  return (
    <div className="feed">
      <article>
        <div className="user">
          <i className="fa-solid fa-circle-user" />
          <span className="name">{userId}</span>
        </div>
        <img className="user_img" src={feedImg} alt="피드이미지" />

        <div className="comment">
          <div className="commentIcon">
            <i className="fa-regular fa-heart" />
            <i className="fa-regular fa-comment" />
            <i className="fa-regular fa-share-from-square" />
          </div>

          <div className="commentLike">
            <i className="fa-solid fa-circle-user" />
            <p>
              <span className="name">{likeUser}</span>님 외 5명이 좋아합니다.
            </p>
          </div>

          <ul className="commentLists">
            {commentArray.map((value, index) => (
              <Comment key={index} index={index} value={value} />
            ))}
            {commentList.map(list => (
              <li key={list.id}>
                <span>{list.userName}</span>
                <span>{list.userComment}</span>
              </li>
            ))}
          </ul>

          <form className="comments" onSubmit={handleOnSubmit}>
            <input
              id="commentInput"
              type="text"
              placeholder="댓글 달기..."
              value={comment}
              onChange={handleCommentsInput}
            />
            <button id="submit">게시</button>
          </form>
        </div>
      </article>
    </div>
  );
}

export default FeedsHyun;
