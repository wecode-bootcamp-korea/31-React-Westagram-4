import React, { useState, useEffect } from 'react';
import Story from './Story';
import FollowList from './FollowList';

const AsideHee = () => {
  const [storyData, setStoryData] = useState([]);
  const [followData, setFollowData] = useState([]);

  useEffect(() => {
    fetch('/data/storyData.json')
      .then(res => res.json())
      .then(res => setStoryData(res));
  }, []);

  useEffect(() => {
    fetch('/data/followData.json')
      .then(res => res.json())
      .then(res => setFollowData(res));
  });
  return (
    <aside className="AsideHee">
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
          {storyData.map(data => (
            <Story key={data.id} name={data.name} lastLogin={data.lastLogin} />
          ))}
        </div>
      </div>

      <div className="contentWrapper">
        <div className="contentHeader">
          <span className="headerFirst">회원님을 위한 추천</span>
          <span className="headerSecond">모두 보기</span>
        </div>
        <div className="contentInner">
          {followData.map(data => (
            <FollowList key={data.id} name={data.name} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default AsideHee;
