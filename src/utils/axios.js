import axios from 'axios';
import { useRouter } from 'vue-router'

const router = useRouter()
// 创建一个 Axios 实例
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
  }
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  // 处理请求错误
  return Promise.reject(error);
});

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 403) {
      // 处理 403 错误
      console.error('403 Forbidden Error: Access denied');
      router.push('/login')
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
