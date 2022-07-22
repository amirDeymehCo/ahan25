import { Get } from "../../utils/axiosHelper/AxiosHelper";
const ProfileServices = {
  getProfile: (then) => Get("/front/user/profile", {}, then),
};

export default ProfileServices;
