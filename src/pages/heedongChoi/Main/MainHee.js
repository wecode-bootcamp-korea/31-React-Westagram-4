import React, { useState } from 'react';
import '../../heedongChoi/Main/MainHee.scss';
import '../Main/Aside/AsideHee';
import AsideHee from '../Main/Aside/AsideHee';
import Nav from '../../../components/Nav/Nav';
import CommentList from './CommentList';
// import CommentInput from './CommentInput';

const MainHee = () => {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const onChange = event => {
    setComment(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray(commentValueList => [...commentValueList, comment]);
    setComment('');
  };

  return (
    <>
      <Nav />
      <div className="mainWrapper">
        <main className="mainContainer">
          <article>
            <section className="feed">
              <div className="feedHeader">
                <div className="feedHeaderLeft">
                  <i className="fas fa-user-circle" />
                  <p className="feedHeaderName">Heedong</p>
                </div>
                <i className="fas fa-ellipsis-h" />
              </div>

              <div className="feedImg">
                <img src="/image/heedongChoi/croffle.JPG" alt="croffle" />
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
                    <span className="name">Heedong</span>님 외 10명이 좋아합니다
                  </p>
                </div>

                <ul id="commentLists">
                  {commentArray.map((value, index) => (
                    <CommentList key={index} value={value} />
                  ))}
                </ul>
              </div>

              <form className="commentInputWrapper" onSubmit={onSubmit}>
                <input
                  id="commentInput"
                  type="text"
                  value={comment}
                  placeholder="댓글 달기..."
                  onChange={onChange}
                />
                <button id="submit">게시</button>
              </form>
            </section>
          </article>

          <AsideHee />
        </main>
      </div>
    </>
  );
};

export default MainHee;
