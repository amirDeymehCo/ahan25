import axios from "axios";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: "https://metalbackend.ryt-service.ir/front/",
  headers: {},
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data.code < 200 || response.data.code > 399)
      return Promise.reject(response.data.msg || "مشکلی پیش امده است");
    return response;
  },
  (error) =>
    Promise.reject(
      (error.response && error.response.msg) || "مشکلی پیش امده است"
    )
);

export default axiosInstance;
