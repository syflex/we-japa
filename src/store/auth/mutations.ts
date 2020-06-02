import { LocalStorage } from 'quasar';

// commit changes after a successful login
export const login = (state, data) => {
  LocalStorage.set('wejapa-token', data.token);
  LocalStorage.set('wejapa-user', data.data);
  state.token = data.token;
  state.user = data.data;
};

// pass user infomation to store state after successful fetach from api
export const user = (state, data) => {
  state.user = data.data;
};

// log user out of system
export const logout = state => {
  LocalStorage.remove('wejapa-token');
  state.token = '';
  state.user = null;
};
