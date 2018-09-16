import {
  removeLocalStorageItem,
  getLocalStorageItem,
  setLocalStorageItem,
} from './local-storage';

const KEY = 'user';

const getToken = () => getLocalStorageItem(KEY);

const setToken = item => setLocalStorageItem(KEY, item);

const removeToken = () => removeLocalStorageItem(KEY);

export { getToken, setToken, removeToken };
