import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 정수
import LoginJung from './pages/jungsooKim/Login/LoginJung';
import MainJung from './pages/jungsooKim/Main/MainJung';
// 보윤
import LoginBo from './pages/boyoonKim/Login/LoginBo';
import MainBo from './pages/boyoonKim/Main/MainBo';
// 희동
import LoginHee from './pages/heedongChoi/Login/LoginHee';
import MainHee from './pages/heedongChoi/Main/MainHee';
// 경현
import LoginKyung from './pages/kyunghyunKim/Login/LoginKyung';
import MainKyung from './pages/kyunghyunKim/Main/MainKyung';
// 서영
import LoginSeo from './pages/seoyeongYoon/Login/LoginSeo';
import MainSeo from './pages/seoyeongYoon/Main/MainSeo';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jung/login" element={<LoginJung />} />
        <Route path="/jung/main" element={<MainJung />} />
        <Route path="/bo/login" element={<LoginBo />} />
        <Route path="/bo/main" element={<MainBo />} />
        <Route path="/hee/login" element={<LoginHee />} />
        <Route path="/hee/main" element={<MainHee />} />
        <Route path="/kyung/login" element={<LoginKyung />} />
        <Route path="/kyung/main" element={<MainKyung />} />
        <Route path="/seo/login" element={<LoginSeo />} />
        <Route path="/seo/main" element={<MainSeo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
