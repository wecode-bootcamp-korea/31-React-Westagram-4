import React, { useState } from 'react';
import '../../heedongChoi/Main/MainHee.scss';
import '../Main/Aside/AsideHee';
import AsideHee from '../Main/Aside/AsideHee';
import Nav from '../../../components/Nav/Nav';
// import CommentList from './CommentList';
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
        {/* <nav>
          <div className="navLogo">
            <i className="fa-solid fa-camera-retro" />
            <span className="navWestagram">Westagram</span>
          </div>
          <input className="searchBar" type="text" placeholder="검색" />
          <div className="navIconWrapper">
            <i className="fa-solid fa-compass" />
            <i className="fa-regular fa-heart" />
            <i className="fa-regular fa-user" />
          </div>
        </nav> */}

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

                {/* <CommentList /> */}
                <ul id="commentLists">
                  {commentArray.map((value, index) => (
                    <li key={index} className="commentText">
                      <div>
                        <span className="commentor">cat</span>
                        {value}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <CommentInput /> */}
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
