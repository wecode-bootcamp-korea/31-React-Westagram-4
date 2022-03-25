import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginBo.scss';

function Login() {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputValue;
  const isInputValid = email.includes('@') && password.length >= 5;

  const navigate = useNavigate();

  const goToMain = () => {
    isInputValid ? navigate('/bo/main') : alert('다시 확인해주세요!');
  };

  function handelInputValue(event) {
    const { name, value } = event.target;
    setInputValue(inputValue => ({ ...inputValue, [name]: value }));
  }

  return (
    <div className="LoginBo">
      <div className="container">
        <div className="westa_box">
          <h1 className="logo">westargram</h1>
          <form className="login-container">
            <input
              className="LoginId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handelInputValue}
              name="email"
            />
            <input
              className="loginPwd"
              type="password"
              placeholder="비밀번호"
              onChange={handelInputValue}
              name="password"
            />
            <button
              className={isInputValid ? 'activeBtn' : 'noneBtn'}
              type="button"
              onClick={goToMain}
            >
              로그인
            </button>
          </form>
          <p className="loginText">
            <a href="/bo/login">비밀번호를 잊으셨나요?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
