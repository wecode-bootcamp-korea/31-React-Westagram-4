import React, { useState, useEffect } from 'react';
import Comment from '../Main/Comment';

const Feed = props => {
  const feedWriter = props.feed.feedName;
  const feedContent = props.feed.feedContent;

  return (
    <div className="contents_left">
      <div className="contents_profile">
        <img
          class="profile"
          src="/image/seoyeongYoon/images/위코드.png"
          alt="profile_image"
        />
        <span>wecode_31</span>
        <button className="profile_more_btn">
          <img src="/image/seoyeongYoon/images/more.png" alt="profile_button" />
        </button>
      </div>

      <div className="contents_box">
        <img src="/image/seoyeongYoon/images/sim.jpg" alt="profile_image" />
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
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form className="comments_form">
        <div className="input_box">
          <input type="text" placeholder="댓글달기✏️" id="comment_input" />
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
