import React, { useState, useEffect } from 'react';
import Story from './Story';
const AsideHee = () => {
  const [storyData, setStoryData] = useState([]);

  useEffect(() => {
    fetch('/data/storyData.json')
      .then(res => res.json())
      .then(res => setStoryData(res));
  }, []);
  return (
    <aside>
      <section className="sectionWrapper">
        <i className="fas fa-user-circle" />
        <div className="sectionInner">
          <p>Heedong</p>
          <p>최희동</p>
        </div>
      </section>

      <div className="storyWrapper">
        <div className="storyHeader">
          <span className="headerFirst">스토리</span>
          <span className="headerSecond">모두 보기</span>
        </div>
        <div className="storyInner">
          {storyData.map(storyData => (
            <Story
              key={storyData.id}
              name={storyData.name}
              lastLogin={storyData.lastLogin}
            />
          ))}
        </div>
      </div>

      <div className="contentWrapper">
        <div className="contentHeader">
          <span className="headerFirst">회원님을 위한 추천</span>
          <span className="headerSecond">모두 보기</span>
        </div>
        <div className="contentInner">
          <div className="asideUser">
            <i className="fas fa-user-circle" />
            <div className="asideUserInfo">
              <p>호랑이</p>
              <p>회원님을 팔로우 합니다</p>
            </div>
          </div>
          <div className="asideUser">
            <i className="fas fa-user-circle" />
            <div className="asideUserInfo">
              <p>물개</p>
              <p>회원님을 팔로우 합니다</p>
            </div>
          </div>
          <div className="asideUser">
            <i className="fas fa-user-circle" />
            <div className="asideUserInfo">
              <p>오리</p>
              <p>회원님을 팔로우 합니다</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AsideHee;
