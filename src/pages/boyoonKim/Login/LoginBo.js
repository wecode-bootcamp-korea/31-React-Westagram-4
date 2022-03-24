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
    // 로그인 페이지로 넘어가기 위해서 fetch 함수를 goToMain 안에서 실행되도록 구조를 잡는다.

    fetch('http://10.58.2.11:8000/users/signin', {
      // 백엔드가 넘겨주는 api 주소. 포트번호도 꼭 적어준다. //users/signup 회원가입
      method: 'POST',
      body: JSON.stringify({
        // 해당 key와 value값은 백엔드와 정해준 형식으로 맞춰서 진행해준다.
        // name: '김보윤',
        email: id,
        password: pw,
        // phone: '01000000000',
        // date_of_birth: '1900-01-01',
      }),
    })
      .then(res => res.json())
      .then(res => {
        // console.log(res);// 콘솔 찍어주는거 너무 좋은것 같다!
        if (res.token) {
          // res.token 토큰이 있다는거 자체가 true !
          localStorage.setItem('wrw-token', res.token);
          navigate('/bo/main');
        } else {
          alert('다시 시도해주세요!');
        }
      });
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
            <a href="/bo/login">비밀번호를 잊으셨나요?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
