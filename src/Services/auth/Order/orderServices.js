import { Get, Post } from "../../../utils/axiosHelper/AxiosHelper";

const api = {
  listOrder: "/front/order/get",
  addToCard: "/front/order/addToCart",
};

const OrderServices = {
  listOrder: (then) => Get(api.listOrder, {}, then),
  addToCard: (data, then) => Post(api.addToCard, data, then),
};

export default OrderServices;
