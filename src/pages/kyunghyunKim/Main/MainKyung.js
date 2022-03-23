import React, { useEffect, useState } from 'react';
import '../Main/MainKyung.scss';
import Nav from '../../../components/Nav/Nav';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import FeedsHyun from './FeedsHyun';

function Main() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('/data/kyunghyunKim/feedData.json')
      .then(res => res.json())
      .then(data => setFeeds(data));
  }, []);
  return (
    <>
      <Nav />

      <main>
        <div className="feesList">
          {feeds.map(list => (
            <FeedsHyun
              key={list.id}
              userId={list.userId}
              feedImg={list.feedImg}
              likeUser={list.likeUser}
            />
          ))}
        </div>

        <aside>
          <section className="mainRight">
            <i className="fa-solid fa-circle-user" />
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
              <i className="fa-solid fa-circle-user" />
              <p className="name">wecode1</p>
              <p>5분전</p>
            </div>
            <div className="storyInner">
              <i className="fa-solid fa-circle-user" />
              <p className="name">wecode2</p>
              <p>10분전</p>
            </div>
            <div className="storyInner">
              <i className="fa-solid fa-circle-user" />
              <p className="name">wecode3</p>
              <p>15분전</p>
            </div>
            <div className="storyInner">
              <i className="fa-solid fa-circle-user" />
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
              <i className="fa-solid fa-circle-user" />
              <p className="name">hi_wecode</p>
              <p>팔로우</p>
            </div>
            <div className="storyInner">
              <i className="fa-solid fa-circle-user" />
              <p className="name">hi_wecode2</p>
              <p>팔로우</p>
            </div>
            <div className="storyInner">
              <i className="fa-solid fa-circle-user" />
              <p className="name">hi_wecode3</p>
              <p>팔로우</p>
            </div>
            <div className="storyInner">
              <i className="fa-solid fa-circle-user" />
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
