import React, { useState } from 'react';

import '../Login/LoginKyung.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  function onLogin() {
    fetch('http://10.58.1.189:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
        // phone_number: phone,
        // name: name,
      }),
    })
      .then(response => response.json())
      .then(res => {
        if (res.token) {
          navigate('/Main/MainKyung.js');
          // onLogin();
          // navigate('/MainKyung');
          //console.log(res);
        } else {
          //console.log(res);
        }
      });
  }

  function handleIdInput(event) {
    //console.log(event);
    setId(event.target.value);
    //console.log(id);
  }

  // function handleNameInput(event) {
  //   //console.log(event);
  //   setName(event.target.value);
  //   //console.log(id);
  // }

  // function handlePhoneInput(event) {
  //   //console.log(event);
  //   setPhone(event.target.value);
  //   //console.log(id);
  // }

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
          {/* <input
            id="phone"
            type="text"
            onChange={handlePhoneInput}
            value={phone}
          />
          <input
            id="name"
            type="text"
            onChange={handleNameInput}
            value={name}
          /> */}
        </div>
        <button
          onClick={onLogin()}
          className={valid ? 'loginButton' : 'loginButton2'}
        >
          로그인
        </button>
      </section>
    </div>
  );
}

export default Login;
