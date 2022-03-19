import React from 'react';
import '../../heedongChoi/Main/MainHee.scss';
import '../Main/Aside/AsideHee';
import AsideHee from '../Main/Aside/AsideHee';
import Nav from '../../../components/Nav/Nav';

const MainHee = () => {
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

                <ul id="commentLists">
                  <li>
                    <span className="name">cat</span>
                    <span className="commentSentence">야옹</span>
                  </li>
                </ul>
              </div>

              <form className="commentInputWrapper">
                <input
                  id="commentInput"
                  type="text"
                  placeholder="댓글 달기..."
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
