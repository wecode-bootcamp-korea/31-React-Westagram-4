import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../heedongChoi/Login/LoginHee.scss';

function LoginHee() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const goToMain = () => {
    validCheck ? navigate('/hee/Main') : alert('똑바로 써주세요');
  };

  // const goToMainToken = () => {
  //   fetch('http://10.58.1.230:8000/users/signin', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: userInfo.email,
  //       password: userInfo.password,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       if (res.token) {
  //         localStorage.setItem('login-token', res.token);
  //         navigate('/hee/Main');
  //       } else {
  //         alert('땡ㅋㅋ');
  //       }
  //     });
  // };
  const validCheck =
    userInfo.email.includes('@') && userInfo.password.length > 5;

  function handleUserInput(event) {
    const { name, value } = event.target;
    setUserInfo(userObject => ({
      ...userObject,
      [name]: value,
      [name]: value,
    }));
  }

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
              name="email"
              onChange={handleUserInput}
            />
            <input
              className="passwordInput"
              type="password"
              placeholder="비밀번호"
              name="password"
              onChange={handleUserInput}
            />
            <button
              className={
                validCheck ? 'loginButtonActive' : 'loginButtonNotActive'
              }
              type="button"
              onClick={goToMain}
            >
              로그인
            </button>
          </div>

          <div className="forgotPassword">
            <a href="/hee/main">비밀번호를 잊으셨나요?</a>
          </div>
        </section>
      </form>
    </div>
  );
}

export default LoginHee;
