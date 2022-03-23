import '../Main/MainJung.scss';
import Nav from '../../../components/Nav/Nav';
import { React, useState, useEffect } from 'react';
import Feed from '../Feed/feed';

function Main() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json')
      .then(res => res.json())
      .then(data => setFeed(data));
  }, []);

  const feedMock = () => {
    return feed.map(feed => {
      return (
        <Feed
          key={feed.userId}
          profileName={feed.profileName}
          profileUrl={feed.profileUrl}
          feedContent={feed.feedContent}
        />
      );
    });
  };

  return (
    <>
      <Nav />
      <article className="feeeed">{feedMock()}</article>
      <article className="mainRight">
        <div className="top">
          <img
            alt="프로필"
            className="profileImage"
            src="/image/jungsooKim/다운로드.png"
          />
          <div className="profileSubscribe">
            <p className="profileSub1">wecode_bootcamp</p>
            <p className="profileSub2">wecode | 위코드</p>
          </div>
        </div>
        <div className="storyMain">
          <div className="story Top">
            <span>스토리</span>
            <span className="allView">모두보기</span>
          </div>
          <div className="storyContent">
            <div className="CommonBomx">
              <img
                alt="프로필"
                className="profileImage"
                src="/image/jungsooKim/일.avif"
              />
              <div className="describe">
                <span>
                  id
                  <br className="hour" />
                  hour
                </span>
              </div>
            </div>
            <div className="CommonBomx">
              <img
                alt="프로필"
                className="profileImage"
                src="/image/jungsooKim/이.avif"
              />
              <div className="describe">
                <span>
                  id
                  <br className="hour" />
                  hour
                </span>
              </div>
            </div>
            <div className="CommonBomx">
              <img
                alt="프로필"
                className="profileImage"
                src="/image/jungsooKim/삼.avif"
              />
              <div className="describe">
                <span>
                  id
                  <br className="hour" />
                  hour
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="reCommandMain">
          <div className="reCommand Top">
            <span>회원님을 위한 추천</span>
            <span className="allView">모두보기</span>
          </div>
          <div className="reCommandContent">
            <div className="CommonBomx">
              <img
                alt="프로필"
                className="profileImage"
                src="/image/jungsooKim/사.avif"
              />
              <div className="describe">
                <span>
                  id
                  <br className="hour" />
                  hour
                </span>
                <span className="follow">팔로우</span>
              </div>
            </div>
            <div className="CommonBomx">
              <img
                alt="프로필"
                className="profileImage"
                src="/image/jungsooKim/오.avif"
              />
              <div className="describe">
                <span>
                  id
                  <br className="hour" />
                  hour
                </span>
                <span className="follow">팔로우</span>
              </div>
            </div>
            <div className="CommonBomx">
              <img
                alt="프로필"
                className="profileImage"
                src="/image/jungsooKim/육.avif"
              />
              <div className="describe">
                <span>
                  id
                  <br className="hour" />
                  hour
                </span>
                <span className="follow">팔로우</span>
              </div>
            </div>
          </div>
        </div>
        <div className="information">
          Instargram정보 지원 홍보센터 API 채용정보 개인정보처리 방침 약관
          디렉터리 프로필 해시태그 언어 2019INSTARGRAM
        </div>
        <div className="divMainRight" />
      </article>
    </>
  );
}

export default Main;
