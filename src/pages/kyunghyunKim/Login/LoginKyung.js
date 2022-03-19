import React, { useState } from 'react';

import '../Login/LoginKyung.scss';
import '../../../styles/common.scss';

function Login() {
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  function handleIdInput(event) {
    //console.log(event);
    setId(event.target.value);
    console.log(id);
  }

  function handlePwInput(event) {
    setPw(event.target.value);
  }

  return (
    <div className="westagram">
      <section className="westaContainer">
        <div className="logo">westagram</div>
        <div className="login">
          <input
            //onInput="handleIdValue()"
            id="userId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
          />
          <input
            //onInput="handleIdValue()"
            id="password"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
        </div>
        <button className="loginButton">로그인</button>
      </section>
    </div>
  );
}

// const id = document.getElementById('userId');
// const password = document.getElementById('password');
// const button = document.querySelector('button');
// const handleIdValue = () => {
//   if (password?.value.length > 1) {
//     button.style.backgroundColor = '#458EFF';
//   } else {
//     button.style.backgroundColor = 'rgba(119, 178, 233, 0.5)';
//   }
// };
// console.log(password.value);

export default Login;
