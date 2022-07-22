import { Get, Post } from "../utils/axiosHelper/AxiosHelper";
const api = {
  listCommentsById: (id) => `/front/comments?targetId=${id}`,
  createComment: "/front/comments",
};

const CommentsServices = {
  listCommentsById: (id, then) => Get(api.listCommentsById(id), {}, then),
  createComment: (data, then) => Post(api.createComment, data, then),
};

export default CommentsServices;
