import axios from "axios";

export const baseUrl = "https://api.github.com";

export const interceptor = () => {
  axios.defaults.baseURL = baseUrl;

  axios.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error.response);
    }
  );
};
