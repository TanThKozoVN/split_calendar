import state from '../../utils/localStorage'
import Http from '../http';

export const handleLogin = async (payload) => {
  const { data } = await Http.post('api/login', payload);
  const { token, user } = data;
  state.setAuth(token);
  state.set('user', user);
  return data;
};

export const handleLogout = async () => {
  const { data } = await Http.post('api/logout');
  state.clear();
  return data;
};
