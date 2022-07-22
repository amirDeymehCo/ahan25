import { Get } from "../../utils/axiosHelper/AxiosHelper";
const api = {
  getListProduct: "/front/product/getProduct",
  getFactory: "/front/product/factory",
  singleProduct: (id) => `/front/product/getProduct?id=${id}`,
  filterProducts :(jens,color)=>`/front/product/getProduct?jens=[${jens}]&color=[${color}]`
}


const ProductServices = {
  getListProduct: (then) => {
    Get(api.getListProduct, {}, then);
  },
  getFactory: (then) => Get(api.getFactory, {}, then),
  singleProduct: (id, then) => Get(api.singleProduct(id), {}, then),
  filterProducts:(jens,color,then)=> Get(api.filterProducts(jens,color), {}, then)
};
export default ProductServices;
