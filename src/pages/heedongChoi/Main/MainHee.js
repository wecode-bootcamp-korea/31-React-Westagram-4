import React, { useEffect, useState } from 'react';
import '../../heedongChoi/Main/MainHee.scss';
import '../Main/Aside/AsideHee';
import AsideHee from '../Main/Aside/AsideHee';
import Nav from '../../../components/Nav/Nav';
import FeedHee from './FeedHee';

const MainHee = () => {
  const [feedData, setFeedData] = useState([]);
  useEffect(() => {
    fetch('/data/feedData.json')
      .then(res => res.json())
      .then(res => setFeedData(res));
  }, []);
  return (
    <>
      <Nav />
      <div className="mainWrapper">
        <main className="mainContainer">
          <article>
            {feedData.map(feedData => (
              <FeedHee key={feedData.id} feedData={feedData} />
            ))}
          </article>
          <AsideHee />
        </main>
      </div>
    </>
  );
};

export default MainHee;
