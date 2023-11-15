import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.wowmkt.kr/',
  timeout: 2000,
});

axiosInstance.interceptors.request.use((config) => {
  const userAccessToken = localStorage.getItem('accessToken');
  if (userAccessToken) {
    console.log('유저토큰존재');
    config.headers['X-ACCESS-TOKEN'] = `${userAccessToken}`;
  } else {
    console.log('유저토큰없음');
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    const res = response.data;
    console.log(`응답데이터:`, { res });
    return res;
  },
  (err) => {
    console.log('에러');
    return Promise.reject(err);
  }
);

export default axiosInstance;
