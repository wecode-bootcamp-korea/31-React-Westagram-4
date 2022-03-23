import React, { useState } from 'react';
import CommentList from './CommentList';

const FeedHee = props => {
  const { feedData, profileName, feedImg, feedContent } = props;

  const [myComment, setMyComment] = useState({
    id: '',
    userName: 'cat',
    content: '',
  });

  const [commentArray, setCommentArray] = useState([]);

  const onChange = event => {
    setMyComment(commentObject => ({
      ...commentObject,
      content: event.target.value,
    }));
  };

  const onSubmit = event => {
    event.preventDefault();
    if (
      myComment ===
      {
        id: '',
        userName: 'cat',
        content: '',
      }
    ) {
      return;
    }
    setCommentArray(commentValueList => [...commentValueList, myComment]);
    setMyComment(commentObject => ({
      ...commentObject,
      content: '',
    }));
  };

  return (
    <section className="feed">
      <div className="feedHeader">
        <div className="feedHeaderLeft">
          <i className="fas fa-user-circle" />
          <p className="feedHeaderName">{profileName}</p>
        </div>
        <i className="fas fa-ellipsis-h" />
      </div>

      <div className="feedImg">
        <img src={feedImg} alt="" />
      </div>

      <div className="commentWrapper">
        <div className="commentIconWrapper">
          <div className="commentIconWrapperLeft">
            <i className="fas fa-heart" />
            <i className="fas fa-comment" />
            <i className="fas fa-envelope-open" />
          </div>
          <i className="far fa-bookmark" />
        </div>

        <div className="commentLike">
          <i className="fas fa-user-circle" />
          <p className="countPeopleLike">
            <span className="name">{profileName}</span>님 외 10명이 좋아합니다
          </p>
        </div>

        <div className="feedContent">
          <p>{feedContent}</p>
        </div>

        <ul id="commentLists">
          {commentArray.map((comment, index) => (
            <CommentList
              key={index}
              id={comment.id}
              userName={comment.userName}
              content={comment.content}
            />
          ))}
          {feedData.comment.map(feedComment => (
            <li key={feedComment.id}>
              <span className="commentor">{feedComment.userName}</span>
              <span>{feedComment.commentContent}</span>
            </li>
          ))}
        </ul>
      </div>

      <form className="commentInputWrapper" onSubmit={onSubmit}>
        <input
          id="commentInput"
          type="text"
          placeholder="댓글 달기..."
          onChange={onChange}
          value={myComment.content}
        />
        <button id="submit">게시</button>
      </form>
      <div className="feedGap" />
    </section>
  );
};

export default FeedHee;
