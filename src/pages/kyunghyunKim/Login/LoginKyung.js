import React, { useState } from 'react';

import '../Login/LoginKyung.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';

function Login() {
  const [id, setId] = useState();
  const [pw, setPw] = useState();

  const button = document.querySelector('button');

  function handleIdInput(event) {
    //console.log(event);
    setId(event.target.value);
    //console.log(id);
  }

  function handlePwInput(event) {
    setPw(event.target.value);
  }

  function handleIdValue() {
    id.includes('@') && pw.length >= 5
      ? (button.style.backgroundColor = '#458EFF')
      : (button.style.backgroundColor = 'rgba(119, 178, 233, 0.5)');
  }

  return (
    <div className="westagram">
      <section className="westaContainer">
        <div className="logo">westagram</div>
        <div className="login">
          <input
            id="userId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
            onInput={handleIdValue}
          />
          <input
            //onInput="handleIdValue()"
            id="password"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
            onInput={handleIdValue}
          />
        </div>
        <button className="loginButton">로그인</button>
      </section>
    </div>
  );
}

export default Login;
