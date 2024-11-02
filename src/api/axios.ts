import axiosClient, { AxiosInstance } from "axios";
import { store } from "../redux/store";
import { getCookie, clean } from "../utils";
import { useDispatch } from "react-redux";

const TIMEOUT = 35000; //15sec
const SERVER_URL =
  process.env.REACT_APP_API_HOST || "https://dev.api.shido.baboons.tech";

const axios: AxiosInstance = axiosClient.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: clean({
    t: new Date().getTime(),
    sub_id: getCookie("sub_id"),
  }),

  timeout: TIMEOUT,
  // transformResponse: (res) => transformKeys.toCamelCase(JSON.parse(res)),
});

axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("accessToken");

    if (token && config?.headers) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    config.headers["x-api-key"] =
      process.env.REACT_APP_TITLE_X_KEY ||
      "9KVvI9QM_98vtE__EYrhCgxFad-6do8fRB9050923uc";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    console.log("err response in intercept resp", err);
    // const originalConfig = err.config;
    // if (err.response && loginBaseUrl.includes(originalConfig.url)) {
    //     if (err.response.status === 401 && !originalConfig._retry) {
    //         originalConfig._retry = true;
    //         store.dispatch(reset)
    //     }
    // }
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const dispatch = useDispatch();

      return axios
        .post("/api/token/refresh/", {
          refresh: store.getState()?.user?.refreshToken,
        })
        .then((response) => {
          // Store the new access token
          const accessToken = response.data.access;

          localStorage.setItem("accessToken", accessToken);

          // Update the original request with the new token
          originalRequest.headers["Authorization"] = "Bearer " + accessToken;
          // Retry the original request
          return axios(originalRequest);
        })
        .catch((err) => {
          // Handle refresh token failure
          console.error("Refresh token failed: ", err);
        });
    }

    return Promise.reject(error);
  }
);

export default axios;
