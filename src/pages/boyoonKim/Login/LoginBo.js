import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";

import '../Login/LoginBo.scss';
import '../../../styles/common.scss';

function Login() {
  const [id, setId] = useState('');

  const [pw, setPw] = useState('');

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/bo/main');
  };

  function handleInput(event) {
    console.log(event.target);
    setId(event.target.value);
  }

  function handlePwInput(event) {
    console.log(event);
    setPw(event.target.value);
  }

  return (
    <div className="wrap">
      <div className="container">
        <div className="westa_box">
          <h1 className="logo">westargram</h1>
          <div className="login-container">
            <input
              className="LoginId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleInput}
            />
            <input
              className="loginPwd"
              type="password"
              placeholder="비밀번호"
              onChange={handlePwInput}
            />
            {/* <button className="loginBtn" type="button"><Link to="/main">로그인</Link></button> */}
            <button className="loginBtn" type="button" onClick={goToMain}>
              로그인
            </button>
          </div>
          <p className="loginText">
            <a href="#">비밀번호를 잊으셨나요?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
