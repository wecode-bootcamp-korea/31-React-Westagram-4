import '../Login/LoginJung.scss';
// import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Login() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

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
      <button className="wrap button" type="button" onClick={goToMain}>
        로그인
      </button>
      <p className="forget">비밀번호를 잊으셨나요?</p>
    </div>
  );
}

export default Login;
