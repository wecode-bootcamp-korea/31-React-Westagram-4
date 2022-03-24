import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import CommentsBox from './CommentsBox';
// import '../Main/MainBo.scss';

const Feed = ({ userName, userImg, userComment }) => {
  const [comments, setComments] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const onSubmit = event => {
    event.preventDefault(); // 배열이 초기화 되지 않도록. 댓글 쌓일 수 있게
    if (comments === '') {
      return;
    }
    setCommentArray(commentsValueList => [...commentsValueList, comments]);
    setComments('');
  };

  function handleInput(event) {
    const { value } = event.target;
    setComments(value);
  }

  // console.log(props.userComment);

  return (
    <div className="main_feeds_left">
      <div className="feeds_left_box">
        <div className="left_box_title">
          <div className="feeds_img_box">
            <img
              alt="profile"
              src="/image/boyoonKim/01.jpg"
              className="profile_img"
            />
          </div>
          <div className="profile_info">
            <p className="profile_id">bboyooning</p>
          </div>
          <button type="button" className="feedAddBtn">
            <img
              alt="feedAddIcon"
              src="/image/boyoonKim/add_icon.png"
              className="feedAddIcon"
            />
          </button>
        </div>
        <div className="box_mid">
          <img alt="feed_img" src={userImg} />
        </div>
        <div className="box_bottom">
          <div className="box_icons">
            <ul className="icons_list">
              <li>
                <button type="button" className="state_btn">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </li>
              <li>
                <button type="button" className="state_btn">
                  <FontAwesomeIcon icon={faComment} flip="horizontal" />
                </button>
              </li>
              <li>
                <button type="button" className="state_btn">
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </button>
              </li>
              <ul className="icons_list_bookmark">
                <button type="button" className="state_btn bookmark">
                  <FontAwesomeIcon icon={faBookmark} />
                </button>
              </ul>
            </ul>
          </div>
          <div className="box_comments">
            <div className="likes_comments">
              <div className="likes_user">
                <img
                  alt="profile"
                  src="/image/boyoonKim/03.jpg"
                  className="profile_img"
                />
              </div>
              <div className="comments_info">
                <p className="comments_title">
                  <span className="user_id_span">{userName}</span>님
                  <span>&nbsp;외</span>
                  <span className="likes_num">&nbsp;10명</span>이 좋아합니다
                </p>
              </div>
            </div>
            <div className="comments_list">
              <ul className="comments_info_ul">
                <li>
                  <div className="comments_title">
                    <span className="user_id">bboyooning</span>
                    <span className="comments_contents">
                      나는 나만의 속도가 있다
                    </span>
                    <button type="button" className="comment_btn">
                      더보기
                    </button>
                  </div>
                  <div className="main_left_box_comment">
                    <ul>
                      {commentArray.map((value, index) => (
                        <CommentsBox
                          key={(value, index)}
                          value={value}
                          index={index}
                        />
                      ))}
                      {userComment.map(userComment => {
                        return (
                          <li className="userCommentLi" key={userComment.id}>
                            <div>
                              <span className="userId">{userComment.name}</span>
                              <span className="commentsContents">
                                {userComment.contents}
                              </span>
                            </div>

                            <button type="button">
                              <FontAwesomeIcon icon={faHeart} />
                            </button>
                          </li>
                        );
                      })}
                      {/* {props.userComment} */}
                      {/* {commentList.map(comment => (
                        <li key={comment.id}>
                          <span className="userId">{comment.name}</span>
                          <span className="commentsContents">
                            {comment.contents}
                          </span>
                          <button type="button">
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                        </li>
                      ))} */}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="feeds_time">
              <p className="time">42분 전</p>
            </div>
            <form className="comments_div" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="댓글 달기..."
                value={comments}
                onChange={handleInput}
              />
              <button>게시</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
