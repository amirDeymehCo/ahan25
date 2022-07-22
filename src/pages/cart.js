import {
  Level1Section,
  Main,
  NotProducts,
  Loading,
} from "../Components/Cart/CartStyles";
import ResultCart from "../Components/Cart/ResultCart/ResultCart";
import TableLevel1 from "../Components/Cart/TableLevel1/TableLevel1";
import Error from "next/error";
import { useEffect, useState } from "react";
import OrderServices from "../Services/order";
import Link from "next/link";
import { AddHeader } from "../utils/axiosHelper/AxiosHelper";
import Level2Co from "../Components/Cart/Level2Co";
import { useDispatch } from "react-redux";
import { loadedCart } from "../redux/slices/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const [updateDataCart, setUpdateDataCart] = useState(false);
  const dispatch = useDispatch();
  const cartUser = useSelector((state) => state.cartUser);
  const { token } = useSelector((state) => state.profileUser);

  useEffect(() => {
    AddHeader("token", token);
    OrderServices.getOrderUser((res) => {
      if (res.code === 200 || res.code === 20) {
        let copyRes = { ...res };
        let cartDataFilter = copyRes.result.filter((x) => x.status === 0);
        dispatch(loadedCart(cartDataFilter));
      }
    });
  }, [updateDataCart, dispatch, token]);

  if (token === false) {
    return <Error statusCode={404} title="ابندا وارد سایت شوید" />;
  }
  if (cartUser.notCart) {
    return (
      <NotProducts>
        <div>
          <h1>شما هیچ محصولی در سبد خرید خود ندارید</h1>
          <Link href="/products">
            <a>مشاهده محصولات</a>
          </Link>
        </div>
      </NotProducts>
    );
  }
  return !cartUser.loading ? (
    <Main>
      <Level1Section>
        <TableLevel1
          setUpdateDataCart={setUpdateDataCart}
          dataCart={cartUser.data[0]}
        />
        <ResultCart
          allPrice={"140000"}
          pricePost={"0"}
          Profit="0"
          Discount="0"
          priceUnit="1.968"
          btnText="ادامه فرایند خرید"
          btnColor="#D16035"
          link="#type-payment"
          onClick={() => {}}
        />
      </Level1Section>
      <Level2Co
        orderId={cartUser.data[0]._id}
        setUpdateDataCart={setUpdateDataCart}
      />
    </Main>
  ) : (
    <Loading>
      <h1>...درحال دیافت اطلاعات لطفا منتظر بمانید</h1>
    </Loading>
  );
};

export default Cart;
