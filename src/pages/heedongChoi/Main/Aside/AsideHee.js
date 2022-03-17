import React from 'react';

const AsideHee = () => {
  return (
    <aside>
      <section class="sectionWrapper">
        <i class="fas fa-user-circle" />
        <div class="sectionInner">
          <p>Heedong</p>
          <p>최희동</p>
        </div>
      </section>

      <div class="storyWrapper">
        <div class="storyHeader">
          <span class="headerFirst">스토리</span>
          <span class="headerSecond">모두 보기</span>
        </div>
        <div class="storyInner">
          <div class="asideUser">
            <i class="fas fa-user-circle" />
            <div class="asideUserInfo">
              <p>다람쥐</p>
              <p>2시간 전</p>
            </div>
          </div>
          <div class="asideUser">
            <i class="fas fa-user-circle" />
            <div class="asideUserInfo">
              <p>사자</p>
              <p>2시간 전</p>
            </div>
          </div>
          <div class="asideUser">
            <i class="fas fa-user-circle" />
            <div class="asideUserInfo">
              <p>코끼리</p>
              <p>2시간 전</p>
            </div>
          </div>
          <div class="asideUser">
            <i class="fas fa-user-circle" />
            <div class="asideUserInfo">
              <p>사슴</p>
              <p>2시간 전</p>
            </div>
          </div>
          <div class="asideUser">
            <i class="fas fa-user-circle" />
            <div class="asideUserInfo">
              <p>토끼</p>
              <p>2시간 전</p>
            </div>
          </div>
        </div>
      </div>

      <div class="contentWrapper">
        <div class="contentHeader">
          <span class="headerFirst">회원님을 위한 추천</span>
          <span class="headerSecond">모두 보기</span>
        </div>
        <div class="contentInner">
          <div class="asideUser">
            <i class="fas fa-user-circle" />
            <div class="asideUserInfo">
              <p>호랑이</p>
              <p>회원님을 팔로우 합니다</p>
            </div>
          </div>
          <div class="asideUser">
            <i class="fas fa-user-circle" />
            <div class="asideUserInfo">
              <p>물개</p>
              <p>회원님을 팔로우 합니다</p>
            </div>
          </div>
          <div class="asideUser">
            <i class="fas fa-user-circle" />
            <div class="asideUserInfo">
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
