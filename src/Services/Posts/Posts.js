import { Get } from "../../utils/axiosHelper/AxiosHelper";
const api = {
  getListPosts: "/front/blog",
  getSinglePost : (id)=>`/front/blog/${id}`
};

const PostsServices = {
  getListPosts: (then) => (
    Get(api.getListPosts, {}, then)
  ),
  getSinglePost : (id,then)=>Get(api.getSinglePost(id),{}, then)
};
export default PostsServices;
