export function getLocalStorage(key) {
  return localStorage.getItem(key);
}

export function setLocalStorage(key, value) {
  return localStorage.setItem(key, value);
}

export function removeLocalStorage(key) {
  return localStorage.removeItem(key);
}

export const LOCAL_STORAGE_KEY = {
  USER: 'user',
  OLD_PAGE: 'old_page',
  EMAIL: 'EMAIL',
  ADD_TO_CART: 'add_to_cart',
};
