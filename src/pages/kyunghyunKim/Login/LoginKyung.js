import React from 'react';

import '../Login/LoginKyung.scss';

function Login() {
  return (
    <div className="westagram">
      <section class="westaContainer">
        <div class="logo">westagram</div>
        <div class="login">
          <input
            onInput="handleIdValue()"
            id="userId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onInput="handleIdValue()"
            id="password"
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <button class="loginButton">로그인</button>
      </section>
    </div>
  );
}

export default Login;
