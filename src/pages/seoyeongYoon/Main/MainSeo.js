import React, { useState, useEffect } from 'react'; //라이브러리에서 리액트 훅을 가져와서 쓰겠다.
import './MainSeo.scss';
import Nav from '../../../components/Nav/Nav';
import Feed from '../Main/Feed';
import AsideInfo from '../Main/AsideInfo';
import Footer from './Footer';

const MainSeo = () => {
  const [feedInfo, setFeedInfo] = useState([]);

  const SAMPLE_DATE = [
    {
      id: 1,
      name: 'seo0',
      time: '10분 전',
    },
    {
      id: 2,
      name: 'seo02',
      time: '13분 전',
    },
    {
      id: 3,
      name: 'seo03',
      time: '15분 전',
    },
    {
      id: 4,
      name: 'seo04',
      time: '17분 전',
    },
    {
      id: 5,
      name: 'seo05',
      time: '19분 전',
    },
  ];

  const FOOTER_DATA = [
    {
      id: 1,
      list: 'instargram',
    },
    {
      id: 2,
      list: '정보',
    },
    {
      id: 3,
      list: '지원',
    },
    {
      id: 4,
      list: '홍보 센터',
    },
    {
      id: 5,
      list: 'API',
    },
    {
      id: 6,
      list: '채용 정보',
    },
    {
      id: 7,
      list: '개인정보처리방침',
    },
    {
      id: 8,
      list: '약관',
    },
    {
      id: 9,
      list: '디렉터리',
    },
    {
      id: 10,
      list: '프로필',
    },
    {
      id: 11,
      list: '해시태그',
    },
    {
      id: 12,
      list: '언어',
    },
  ];

  useEffect(() => {
    fetch('http://localhost:3000/data/commentlist.json')
      .then(response => response.json())
      .then(data => setFeedInfo(data));
  }, []);

  return (
    <>
      <Nav />
      <div className="MainSeo">
        <main className="main_box">
          {feedInfo.map(feedInfo => (
            <Feed key={feedInfo.id} {...feedInfo} />
          ))}
          <div className="side_fixed">
            <div className="side_fixed_wrap">
              <div className="contents_right">
                <div className="contents_profile_aside">
                  <img
                    src="/image/seoyeongYoon/images/위코드.png"
                    alt="profile"
                  />
                  <div className="profile_info">
                    <span className="info">wecode_bootcamp</span>
                    <span>wecode | 위코드</span>
                  </div>
                </div>
              </div>
              <div className="follow_title_wrap">
                <div className="follow_title">
                  <span className="story">스토리</span>
                  <a href="/seo/main">
                    <span>모두 보기</span>
                  </a>
                </div>
                <div className="follow_list_scroll">
                  {SAMPLE_DATE.map(userData => (
                    <AsideInfo key={userData.id} userData={userData} />
                  ))}
                </div>
              </div>
              <div className="recommend">
                <div className="recommend_title">
                  <span>회원님을 위한 추천</span>
                  <a href="/seo/main">
                    <span>모두 보기</span>
                  </a>
                </div>
                <div className="recommend_info">
                  <img
                    src="/image/seoyeongYoon/images/위코드.png"
                    alt="profile"
                  />
                  <div className="recommend_id">
                    <p>wecode</p>
                    <p>외 10명..</p>
                  </div>
                  <a href="/seo/main">
                    <span>팔로우</span>
                  </a>
                </div>
                <div className="recommend_info">
                  <img
                    src="/image/seoyeongYoon/images/위코드.png"
                    alt="profile"
                  />
                  <div className="recommend_id">
                    <p>wecode</p>
                    <p>외 10명..</p>
                  </div>
                  <a href="/seo/main">
                    <span>팔로우</span>
                  </a>
                </div>
                <div className="recommend_info">
                  <img
                    src="/image/seoyeongYoon/images/위코드.png"
                    alt="profile"
                  />
                  <div className="recommend_id">
                    <p>wecode</p>
                    <p>외 10명..</p>
                  </div>
                  <a href="/seo/main">
                    <span>팔로우</span>
                  </a>
                </div>
              </div>
              <footer className="footer">
                <div className="footer_info">
                  <ul>
                    {FOOTER_DATA.map(userData => (
                      <Footer key={userData.id} {...userData} />
                    ))}
                  </ul>
                </div>
              </footer>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainSeo;
