import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/LoginBo.scss';
import '../../../styles/common.scss';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const isInputValid = id.includes('@') && pw.length >= 5;

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/bo/main');
  };

  function handleInput(event) {
    const { value } = event.target;
    setId(value);
  }

  function handlePwInput(event) {
    const { value } = event.target;
    setPw(value);
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
              value={id} // 재렌더링을 위해서 부여함
            />
            <input
              className="loginPwd"
              type="password"
              placeholder="비밀번호"
              onChange={handlePwInput}
              value={pw} // 재렌더링을 위해서 부여함
            />
            {/* <button className="loginBtn" type="button"><Link to="/main">로그인</Link></button> */}
            <button
              className={isInputValid ? 'activeBtn' : 'noneBtn'}
              type="button"
              onClick={goToMain}
            >
              로그인
            </button>
          </div>
          <p className="loginText">
            <a href="">비밀번호를 잊으셨나요?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
