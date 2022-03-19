import React from 'react';
import '../Main/MainKyung.scss';
import Nav from '../../../components/Nav/Nav';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';

function Main() {
  return (
    <>
      <Nav />

      <main>
        <div class="feeds">
          <article>
            <div className="user">
              <i class="fa-solid fa-circle-user" />
              <span className="name">Kyunghyun</span>
            </div>
            <img
              class="user_img"
              src="https://images.unsplash.com/photo-1647372196772-b2839f41bd1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              alt="피드이미지"
            />

            <div className="comment">
              <div className="commentIcon">
                <i class="fa-regular fa-heart" />
                <i class="fa-regular fa-comment" />
                <i class="fa-regular fa-share-from-square" />
              </div>

              <div className="commentLike">
                <i class="fa-solid fa-circle-user" />
                <p>
                  <span className="name">k_hny</span>님 외 5명이 좋아합니다.
                </p>
              </div>

              <ul className="commentLists">
                <li>
                  <span className="name">Kyunghyun</span>
                  <span>위코드 안뇽</span>
                </li>
              </ul>

              <form className="comments">
                <input
                  id="commentInput"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button id="submit">게시</button>
              </form>
            </div>
          </article>
        </div>

        <aside>
          <section className="mainRight">
            <i class="fa-solid fa-circle-user" />
            <div className="mainRightHeader">
              <p className="name">wecode_bootcamp</p>
              <p>WeCode | 위코드</p>
            </div>
          </section>

          <div className="story">
            <div className="storyHeader">
              <p>스토리</p>
              <p>모두보기</p>
            </div>
            <div className="storyInner">
              <i class="fa-solid fa-circle-user" />
              <p className="name">wecode1</p>
              <p>5분전</p>
            </div>
            <div className="storyInner">
              <i class="fa-solid fa-circle-user" />
              <p className="name">wecode2</p>
              <p>10분전</p>
            </div>
            <div className="storyInner">
              <i class="fa-solid fa-circle-user" />
              <p className="name">wecode3</p>
              <p>15분전</p>
            </div>
            <div className="storyInner">
              <i class="fa-solid fa-circle-user" />
              <p className="name">wecode4</p>
              <p>25분전</p>
            </div>
          </div>
          <div className="recommand">
            <div className="recommandHeader">
              <p>회원님을 위한 추천</p>
              <p>모두보기</p>
            </div>
            <div className="recommandInner">
              <i class="fa-solid fa-circle-user" />
              <p className="name">hi_wecode</p>
              <p>팔로우</p>
            </div>
            <div className="storyInner">
              <i class="fa-solid fa-circle-user" />
              <p className="name">hi_wecode2</p>
              <p>팔로우</p>
            </div>
            <div className="storyInner">
              <i class="fa-solid fa-circle-user" />
              <p className="name">hi_wecode3</p>
              <p>팔로우</p>
            </div>
            <div className="storyInner">
              <i class="fa-solid fa-circle-user" />
              <p className="name">hi_wecode4</p>
              <p>팔로우</p>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
}

export default Main;
