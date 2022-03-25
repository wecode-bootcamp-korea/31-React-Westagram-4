import React, { useEffect, useState } from 'react';
import CommonBox from './CommonBox/CommonBox';

function Aside() {
  const [CommonData, setCommonData] = useState([]);

  useEffect(() => {
    fetch('/data/CommonBox.json')
      .then(res => res.json())
      .then(data => setCommonData(data));
  }, []);

  return (
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
          {CommonData.map(list => {
            return <CommonBox key={list.id} url={list.url} />;
          })}
        </div>
      </div>
      <div className="reCommandMain">
        <div className="reCommand Top">
          <span>회원님을 위한 추천</span>
          <span className="allView">모두보기</span>
        </div>
        <div className="reCommandContent">
          {CommonData.map(list => {
            return <CommonBox key={list.id} url={list.url} />;
          })}
        </div>
      </div>
      <div className="information">
        Instargram정보 지원 홍보센터 API 채용정보 개인정보처리 방침 약관
        디렉터리 프로필 해시태그 언어 2019INSTARGRAM
      </div>
      <div className="divMainRight" />
    </article>
  );
}

export default Aside;
