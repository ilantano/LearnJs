import { message } from 'antd';
import axios from 'axios';
import { getCookie, COOKIE_KEY } from './cookie';

const service = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  timeout: 5000,
});

service.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json',
      Authorization: getCookie(COOKIE_KEY.TOKEN) ? `Bearer ${getCookie(COOKIE_KEY.TOKEN)}` : undefined,
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      message.error(response.message);
      if (response.code === 401) {
        // to re-login
        message.warning('You have been logged out, you can cancel to stay on this page, or log in again');
      }
      return Promise.reject(new Error(response.message || 'Error'));
    } else {
      return response.data;
    }
  },
  error => {
    // eslint-disable-next-line no-console
    console.log('err' + error); // for debug
    // message.error(error.message);
    return Promise.reject(error);
  }
);

export default service;
