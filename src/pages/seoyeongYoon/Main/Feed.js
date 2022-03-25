import React, { useState } from 'react';
import Comment from '../Main/Comment.js';

const Feed = ({ feedName, feedContent, commentContent, feedImg, feedId }) => {
  const [userComment, setUserComment] = useState([{ ...commentContent }]);
  const [comment, setComment] = useState('');

  const commentInput = e => {
    setComment(e.target.value);
  };

  const addComment = e => {
    e.preventDefault();
    const arr = [...userComment];
    arr.push({ id: userComment.length + 1, userId: 'seo0', content: comment });
    setUserComment(arr);
    setComment('');
  };

  return (
    <div className="Feed">
      <div className="contents_profile">
        <img className="profile" src={feedImg} alt="profile" />
        <span>{feedName}</span>
        <button className="profile_more_btn">
          <img src="/image/seoyeongYoon/images/more.png" alt="profile_button" />
        </button>
      </div>

      <div className="contents_box">
        <img src={feedImg} alt="profile" />
        <div className="contents_icon_groups">
          <div className="contents_icon_groups_wrap">
            <div className="heart" />
            <img
              className="comment"
              src="/image/seoyeongYoon/images/comment.png"
              alt="comment"
            />
            <img
              className="upload"
              src="/image/seoyeongYoon/images/upload.png"
              alt="upload"
            />
          </div>
          <img
            className="bookmark"
            src="/image/seoyeongYoon/images/bookmark.png"
            alt="bookmark"
          />
        </div>
        <div className="comments_box_like">
          <img src="/image/seoyeongYoon/images/위코드.png" alt="profile" />
          <div className="comments_box_like_id">
            <span>wecode_31님 외 10명이 좋아합니다</span>
          </div>
        </div>

        <div className="comments_text">
          <div className="comments_info comment_list_ul">
            <div className="comments_tit">
              <span className="user_id">{feedId}</span>
              <span className="comment_contents">{feedContent}</span>
              {userComment.map(userComment => (
                <Comment key={userComment.id} userComment={userComment} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <form className="comments_form" onSubmit={addComment}>
        <div className="input_box">
          <input
            type="text"
            placeholder="댓글달기✏️"
            id="comment_input"
            onChange={commentInput}
            value={comment}
          />
        </div>
        <div className="button_box">
          <button type="button" className="post_btn">
            게시
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feed;
