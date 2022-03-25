import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../seoyeongYoon/Login/LoginSeo.scss';

const LoginSeo = () => {
  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/seo/main');
  };

  const keyPressEnter = e => {
    if (e.key === 'Enter') {
      navigate('/seo/main');
    }
  };

  const isValid = inputValue.id.includes('@') && inputValue.pw.length >= 5;

  return (
    <div className="seoLogin">
      <div className="container">
        <form className="containerForm">
          <div className="logo">
            <h1>Westagram</h1>
          </div>
          <div className="inputBox">
            <form onSubmit={goToLogin}>
              <input
                id="id"
                name="id"
                type="email"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleInput}
              />
              <input
                id="pw"
                name="pw"
                type="password"
                placeholder="비밀번호를 입력하세요"
                onChange={handleInput}
                onKeyPress={keyPressEnter}
              />
              <button className="btn" disabled={!isValid} onClick={goToLogin}>
                로그인
              </button>
            </form>
          </div>
          <a href="/seo/main">비밀번호를 잊으셨나요?</a>
        </form>
      </div>
    </div>
  );
};
export default LoginSeo;
