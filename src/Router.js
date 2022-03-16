import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 정수
import LoginJung from './pages/jungsooKim/Login/Login' 
import MainJung from './pages/jungsooKim/Main/Main' 
// 보윤
import LoginBo from './pages/boyoonKim/Login/Login' 
import MainBo from './pages/boyoonKim/Main/Main' 
// 희동
import LoginHee from './pages/heedongChoi/Login/Login' 
import MainHee from './pages/heedongChoi/Main/Main' 
// 경현
import LoginKyung from './pages/kyunghyunKim/Login/Login' 
import MainKyung from './pages/kyunghyunKim/Main/Main' 
// 정수
import LoginSeo from './pages/seoyeongYoon/Login/Login' 
import MainSeo from './pages/seoyeongYoon/Main/Main' 


function Router () {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/login-jung' element={<LoginJung />} />
        <Route path='/main-jung' element={<MainJung />} />
        <Route path='/login-bo' element={<LoginBo />} />
        <Route path='/main-bo' element={<MainBo />} />
        <Route path='/login-hee' element={<LoginHee />} />
        <Route path='/main-hee' element={<MainHee />} />
        <Route path='/login-kyung' element={<LoginKyung />} />
        <Route path='/main-kyung' element={<MainKyung />} />
        <Route path='/login-seo' element={<LoginSeo />} />
        <Route path='/main-seo' element={<MainSeo />} />
      </Routes>
    </BrowserRouter>
  );
};


export default Router;