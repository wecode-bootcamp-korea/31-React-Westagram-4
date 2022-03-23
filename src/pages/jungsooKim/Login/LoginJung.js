import '../Login/LoginJung.scss';
// import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Login() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const isLoginBtnActive = idValue.includes('@') && pwValue.length >= 5;

  const handleIdInput = e => {
    setIdValue(e.target.value);
  };

  const handlePwInput = e => {
    setPwValue(e.target.value);
  };
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/jung/main');
  };

  // useEffect(() => {
  //   fetch('http://10.58.2.242:8000/users/login'/registration, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: 'kjs9539@Naver.com',
  //       password: '!1Ddwjdtn1234',
  //       name: '김정수',
  //       phone_number: '010-9566-6672',
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => console.log('결과: ', result));
  // }, []);

  return (
    <div className="Main">
      <p className="changeFont">westagram</p>
      <input
        onChange={handleIdInput}
        className="wrap id"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        onChange={handlePwInput}
        className="wrap password"
        type="password"
        placeholder="비밀번호"
      />
      <button
        // disabled={isLoginBtnActive ? true : false} 안됨;
        className={isLoginBtnActive ? 'wrap button' : 'wrap off button'}
        type="button"
        onClick={goToMain}
      >
        로그인
      </button>
      <p className="forget">비밀번호를 잊으셨나요?</p>
    </div>
  );
}

export default Login;
