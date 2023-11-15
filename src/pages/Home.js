import React, { useEffect } from 'react';
import { usePostEmailLogin } from '../apis/userApi.js';

const Home = () => {
  //api test
  const userData = usePostEmailLogin({
    id: 'ekdldkaa@naver.com',
    pw: 'ekdldkaa',
  });

  return (
    <div>
      <h1>this is Home</h1>
    </div>
  );
};

export default Home;
