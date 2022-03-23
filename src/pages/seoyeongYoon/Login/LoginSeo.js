import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../seoyeongYoon/Login/LoginSeo.scss';

const Login = () => {
  let [idValue, setIdValue] = useState('');
  let [pwValue, setPwValue] = useState('');

  const handleIdInput = evt => {
    console.log(evt.target.value);
    setIdValue(evt.target.value);
  };

  //State 하나 만든것,
  //State를 만든이유? State에다가 데이터를 저장하라고(데이터바인딩용이)
  // 콘솔에 찍어서 상태확인
  // 여기서 오는 인자는 이벤트, 보통 e라고 표시
  //state 데이터를 수정할땐 두번째 인자에 넣음

  const handlePwInput = evt => {
    console.log(evt.target.value);
    setPwValue(evt.target.value);
  };

  const navigate = useNavigate();
  const goToLogin = () => {
    // fetch('http://10.58.2.210:8000/users/signup', {
    //   method: 'post',
    //   body: JSON.stringify({
    //     email: idValue,
    //     password: pwValue,
    //     name: '윤서영11',
    //     phone_number: '010-1111-1111',
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(res => console.log(res));
    navigate('/seo/main');
  };

  const keyPressEnter = e => {
    if (e.key === 'Enter') {
      navigate('/seo/main');
    }
  };

  // useEffect(() => {
  //   fetch('http://localhost:3000/data/commentlist.json')
  //     .then(response => response.json())
  //     // .then(res => console.log(res))
  //     .then(data => setFeedInfo(data));
  // }, []);

  const isValid = idValue.includes('@') && pwValue.length >= 5; //버튼활성화조건

  return (
    <div className="login">
      <div className="container">
        <form className="container_form">
          <div className="logo">
            <h1>Westagram</h1>
          </div>
          <div className="input_box">
            <form onSubmit={goToLogin}>
              <input
                id="id"
                type="email"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleIdInput} //핸들어쩌고 함수 값이 변경될때, 발생
              />
              <input
                id="pw"
                type="password"
                placeholder="비밀번호를 입력하세요"
                onChange={handlePwInput}
                onKeyPress={keyPressEnter}
              />
              {/* 조건이 비활성화되야하니까 ! 부정 으로 만들어줌 */}
              <button
                type="submit"
                className="btn"
                disabled={!isValid}
                onClick={goToLogin}
              >
                로그인
              </button>
            </form>
          </div>
          <a href="#">비밀번호를 잊으셨나요?</a>
        </form>
      </div>
    </div>
  );
};
export default Login;
