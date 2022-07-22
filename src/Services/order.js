import { Get, Post } from "../utils/axiosHelper/AxiosHelper";

const api = {
  getOrderUser: "/front/order/get",
  selectPaymentType: "/front/payment/selectType",
  bankPayment: "/front/payment/bankPaymentInformation",
  uploadImageBank: (orderId) => `/front/payment/uploadFile?orderId=${orderId}`,
};

const OrderServices = {
  getOrderUser: (then) => Get(api.getOrderUser, {}, then),
  selectPaymentType: (data, then) => Post(api.selectPaymentType, data, then),
  bankPayment: (data, then) => Post(api.bankPayment, data, then),
  uploadImageBank: (orderId, data, then) =>
    Post(api.uploadImageBank(orderId), data, then),
};

export default OrderServices;
