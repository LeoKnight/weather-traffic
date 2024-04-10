import axios from "axios";
import { message } from "antd";

const instance = axios.create({
  timeout: 10000, // 请求超时时间
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    if (response.status !== 200) {
      message.error("Server Error");
    }
    return response;
  },
  function (error) {
    message.error("");
    return Promise.reject(error);
  }
);

export default instance;
