import axios, { AxiosRequestConfig } from "axios";
import getConfig from "next/config";
import { stringify } from "query-string";

const { publicRuntimeConfig } = getConfig();

const clientAxios = axios.create({
  baseURL: publicRuntimeConfig.BASE_API_PATH,
});

// Add a request interceptor
clientAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    const newConfig: AxiosRequestConfig = {
      ...config,
      paramsSerializer: (params) => stringify(params),
    };

    return newConfig;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
clientAxios.interceptors.response.use(
  function (response) {
    // Do something with response data

    return response;
  },
  function (error) {
    // Do something with response error

    if (error.response.status === 401) {
      window.location.href = "/home";
      return;
    }

    return Promise.reject(error);
  }
);

export default clientAxios;
