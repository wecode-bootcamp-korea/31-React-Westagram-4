import React, { useEffect, useState } from 'react';
import RecommendList from './RecommendList';
import StoryList from './StoryList';

const AsideBo = () => {
  const [storyInfo, setStoryInfo] = useState([]);
  const [recommendInfo, setRecommendInfo] = useState([]);

  useEffect(() => {
    fetch('/data/boyoonKim/storyData.json')
      .then(res => res.json())
      .then(data => setStoryInfo(data));
  }, []);

  useEffect(() => {
    fetch('/data/boyoonKim/recommendData.json')
      .then(res => res.json())
      .then(data => setRecommendInfo(data));
  }, []);

  return (
    <div className="AsideBo">
      <div className="story_box box_tool">
        <div className="box_contents">
          <div className="box_top">
            <span className="story_title ">스토리</span>
            <span className="more_info">
              <a href="/bo/main">모두 보기</a>
            </span>
          </div>
          <div className="box_list">
            <ul>
              {storyInfo.map(story => {
                return (
                  <StoryList
                    key={story.id}
                    userId={story.userId}
                    userImg={story.userImg}
                    loginTime={story.loginTime}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="recommend_box box_tool">
        <div className="box_contents">
          <div className="box_top">
            <span className="recommend-title">회원님을 위한 추천</span>
            <span className="more_info">
              <a href="/bo/main">모두 보기</a>
            </span>
          </div>
          <div className="recommend_list box_list">
            <ul>
              {recommendInfo.map(recommend => {
                return (
                  <RecommendList
                    key={recommend.id}
                    userName={recommend.userName}
                    userImg={recommend.userImg}
                    followList={recommend.followList}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideBo;
