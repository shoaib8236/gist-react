import Axios from "axios";
import { baseurl } from "./constant";

Axios.interceptors.request.use(
  function (config) {
    if (config.progress) {
      // Popup.show({
      //     progressBar: true,
      // });
    }

    // Do something before request is sent

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor

Axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Popup.hide();
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export const api = {
  // invoke: (method, url, data = {}, token = Store.getUserToken(null)) => {
  invoke: (
    method,
    url,
    data = {},
  ) => {
    let progress = data && data.progress === false ? data.progress : true;
    let param = null;
    if (method.toLowerCase() === "get") {
      param = data;
      data = null;
    }
    return Axios({
      url: url,
      progress: progress,
      baseURL: baseurl,
      method: method,
      params: param,
      data: data,
    }).catch((err) => {
      console.log(err);
      return err;
    });
  },
};
