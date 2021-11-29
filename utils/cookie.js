import Cookies from 'js-cookie';

export const COOKIE_KEY = {
  CUSTOMER_ID: 'CUSTOMER_ID',
  TOKEN: 'TOKEN',
};

export function getCookie(key) {
  return Cookies.get(key);
}

export function setCookie(key, value) {
  return Cookies.set(key, value);
}

export function removeCookie(key) {
  return Cookies.remove(key);
}
