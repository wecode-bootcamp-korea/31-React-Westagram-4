import '../Login/LoginJung.scss';
// import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/jung/main');
  };

  return (
    <div class="Main">
      <p class="changeFont">westagram</p>
      <form>
        <input
          class="wrap id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input class="wrap password" type="password" placeholder="비밀번호" />
      </form>
      <button class="wrap off button" type="button" onClick={goToMain}>
        로그인
      </button>
      <p class="forget">비밀번호를 잊으셨나요?</p>
    </div>
  );
}

export default Login;
