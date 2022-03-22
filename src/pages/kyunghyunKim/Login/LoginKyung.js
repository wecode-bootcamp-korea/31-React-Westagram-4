import React, { useState } from 'react';

import '../Login/LoginKyung.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  function handleIdInput(event) {
    //console.log(event);
    setId(event.target.value);
    //console.log(id);
  }

  const valid = id.includes('@') && pw.length >= 5;

  function handlePwInput(event) {
    setPw(event.target.value);
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
            value={id}
          />
          <input
            id="password"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
            value={pw}
          />
        </div>
        <button className={valid ? 'loginButton' : 'loginButton2'}>
          로그인
        </button>
      </section>
    </div>
  );
}

export default Login;
