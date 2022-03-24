import React, { useState } from 'react';
import FeedCommentList from './FeedCommentList';
import MyCommentList from './MyCommentList';

const FeedHee = ({ feedData }) => {
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
          <p className="feedHeaderName">{feedData.profileName}</p>
        </div>
        <i className="fas fa-ellipsis-h" />
      </div>

      <div className="feedImg">
        <img src={feedData.feedImg} alt="" />
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
            <span className="name">{feedData.profileName}</span>님 외 10명이
            좋아합니다
          </p>
        </div>

        <div className="feedContent">
          <p>{feedData.feedContent}</p>
        </div>

        <ul id="commentLists">
          {feedData.comment.map((feedComment, index) => (
            <FeedCommentList
              key={index}
              id={feedComment.id}
              userName={feedComment.userName}
              content={feedComment.commentContent}
            />
          ))}
          {commentArray.map((comment, index) => (
            <MyCommentList
              key={index}
              id={comment.id}
              userName={comment.userName}
              content={comment.content}
            />
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
