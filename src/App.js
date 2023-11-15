import React from 'react';
import { UseGetProjectList } from './apis/projectListApi';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import DemandRegister from './pages/DemandRegister';
import ProjectRegister from './pages/ProjectRegister.js';
import Users from './pages/Users';
import Goods from './pages/Goods';
import MyPage from './pages/MyPage';
import ThemeProvider from './style/ThemeProvider.js';

const App = () => {
  // const { getProjectList, isLoading, error } = UseGetProjectList(
  //   'demand',
  //   '',
  //   1,
  //   '',
  //   ''
  // );

  // console.log(getProjectList);

  // // Check loading state
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // // Check for errors
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div className="App">
      {/* <Header /> */}
      <ThemeProviderPrac>
        미디어 쿼리 텍스트
      </ThemeProviderPrac>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:page_type" element={<Users />} />
        <Route path="/register/demand" element={<DemandRegister />} />
        <Route path="/register/project" element={<ProjectRegister />} />
        <Route path="/goods/detail" element={<Goods />} />
        <Route path="/myinfo" element={<MyPage />} />
      </Routes>
    </div>
  );
};

export default App;