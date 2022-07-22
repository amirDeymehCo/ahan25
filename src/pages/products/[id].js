import SingleProductCo from "./../../components/SingleProduct/SingleProduct";
import SingleProductApi from "./../../Services/Products/Products";
import Error from "next/error";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SingleProduct = () => {
  const router = useRouter();
  const id = router.query.id;
  const [dataProduct, setDataProduct] = useState(false);
  console.log(id);
  useEffect(() => {
    SingleProductApi.singleProduct(id, (res) => {
      console.log(res);
      if (res.code === 200) {
        setDataProduct(res.result);
      }
    });
  }, [id]);

  if (dataProduct.length === false) {
    return (
      <Error statusCode={404} title="محصولی که به دنبال آن بودی پیدا نشد" />
    );
  }
  return <SingleProductCo product={dataProduct} />;
};

export default SingleProduct;
