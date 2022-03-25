import '../Main/MainJung.scss';
import Nav from '../../../components/Nav/Nav';
import { React, useState, useEffect } from 'react';
import Feed from '../Feed/feed';
import Aside from './Aside/Aside';

function Main() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json')
      .then(res => res.json())
      .then(data => setFeed(data));
  }, []);

  return (
    <>
      <Nav />
      <article>
        {feed.map(list => {
          return (
            <Feed
              key={list.userId}
              profileName={list.profileName}
              profileUrl={list.profileUrl}
              feedContent={list.feedContent}
              commnetData={list.commnetData}
            />
          );
        })}
      </article>
      <Aside />
    </>
  );
}

export default Main;
