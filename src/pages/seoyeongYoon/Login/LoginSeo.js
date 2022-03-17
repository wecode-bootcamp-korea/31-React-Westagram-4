import React from 'react';
import '../../seoyeongYoon/Login/LoginSeo.scss';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/seo/main');
  };
  return (
    <div className="login">
      <div className="container">
        <form className="container_form">
          <div className="logo">
            <h1>Westagram</h1>
          </div>
          <div className="input_box">
            <input
              id="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input id="pw" type="text" placeholder="비밀번호를 입력하세요" />
            {/* <Link to="/main"> */}
            <button
              type="submit"
              className="btn"
              // disabled="disabled"
              onClick={() => navigate('/seo/main')}
            >
              로그인
            </button>
            {/* </Link> */}
          </div>
          <a href="#">비밀번호를 잊으셨나요?</a>
        </form>
      </div>
    </div>
  );
};
export default Login;
