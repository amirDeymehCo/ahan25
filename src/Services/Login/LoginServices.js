import { Post } from "./../../utils/axiosHelper/AxiosHelper";

const api = {
  loginCode: "/front/user/loginCode",
  configCode : "/front/user/login"
};

const LoginServices = {
  loginCode: (data, then) => Post(api.loginCode, data, then),
  configCode: (data, then) => Post(api.configCode, data, then),
};

export default LoginServices;
