import React, { useState, useEffect } from 'react';
import Comment from '../Main/Comment';

const Feed = props => {
  //각각쓰겠다
  const feedWriter = props.feedInfo.feedName;
  const feedContent = props.feedInfo.feedContent;
  const CommentContent = props.feedInfo.commentContent;
  //커맨트 컨텐츠만때서 따로 빼서 피드안에서 쪼개서 보관!
  const feedImg = props.feedInfo.feedImg;
  const feedId = props.feedInfo.feedId;

  const [userComment, setUserComment] = useState([...CommentContent]); //객체가 들어있는 배열
  const [comment, setComment] = useState('');

  //댓글입력 input
  const commentInput = e => {
    setComment(e.target.value);
    console.log(e.target.value);
  };

  //댓글입력
  const addComment = e => {
    e.preventDefault(); //이벤트 고유의 동작을 중단시킴
    const arr = [...userComment]; //usercomment를 복사한게 arr(복사본)
    arr.push({ id: userComment.length + 1, userId: 'seo0', content: comment });
    //입력한값을 담고있는 새로운 데이터
    setUserComment(arr);
    setComment('');
  };

  return (
    <div className="contents_left">
      <div className="contents_profile">
        <img className="profile" src={feedImg} alt="profile_image" />
        <span>{feedWriter}</span>
        <button className="profile_more_btn">
          <img src="/image/seoyeongYoon/images/more.png" alt="profile_button" />
        </button>
      </div>

      <div className="contents_box">
        <img src={feedImg} alt="profile_image" />
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
              <span className="user_id">{feedId}</span>
              <span className="comment_contents">{feedContent}</span>

              {userComment.map(userComment => (
                <Comment key={userComment.id} userComment={userComment} /> //피드내에서 반복되는 댓글컴포넌트
              ))}
              {/* //열심히만든 state/ usercomment에들어있는 요소하나!/하나만 똑때서 댓글 컨포넌트로 보낸다! */}
            </div>
          </div>
        </div>
      </div>

      <form className="comments_form" onSubmit={addComment}>
        {/* //서브밋은 실행시 지혼자 새로고침됨 그래서 프리벤트디폴트는 그걸 막는다. */}
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
