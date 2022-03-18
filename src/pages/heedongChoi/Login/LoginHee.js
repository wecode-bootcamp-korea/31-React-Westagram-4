import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../heedongChoi/Login/LoginHee.scss';
import { useState } from 'react';

function LoginHee() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/hee/Main');
  };

  const [id, setId] = useState('');

  return (
    <div className="loginHee">
      <form action="" method="post">
        <section className="loginContainer">
          <h1>Westagram</h1>

          <div className="inputWrap">
            <input
              className="idInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="passwordInput"
              type="password"
              placeholder="비밀번호"
            />
            <button className="loginButton" type="button" onClick={goToMain}>
              로그인
            </button>
          </div>

          <div className="forgotPassword">
            <a href="#">비밀번호를 잊으셨나요?</a>
          </div>
        </section>
      </form>
    </div>
  );
}

export default LoginHee;
