import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import localStorage from '../utils/localStorage';
import { RESPONSE_STATUS, URL } from '../config/constants';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const addAuthToken = (config) => {
  const { headers } = config;
  const authToken = localStorage.getAdminToken();

  if (!isEmpty(authToken)) {
    headers.Authorization = `Bearer ${authToken.access_token}`;
  }

  return { ...config, headers };
};

const handleError = (error) => {
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === RESPONSE_STATUS.HTTP_SERVICE_UNAVAILABLE) {
      window.location.href = URL.HOME;
      return null;
    }
    if (error.response.status === RESPONSE_STATUS.UNAUTHORIZED) {
      localStorage.clear();
      window.location.href = URL.LOGIN;
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(addAuthToken, handleError);

export default axiosInstance;
