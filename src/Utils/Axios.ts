import axios, {AxiosRequestConfig} from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:5109/api`,
  headers: {
    'Content-Type': 'application/json'
  },
});

export default instance;