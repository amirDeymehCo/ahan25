import OrdersSection from "./OrdersSection/OrdersSection";
import { Main, NotProducts, SectionTypePayment } from "./mainStyles";
import Payment from "./Payment/Payment";
import BankPayment from "./BankPayment/BankPayment";
import OnlinePayment from "./OnlinePayment/OnlinePayment";
import Timing from "./Timing/Timing";
import Error from "next/error";
import { useEffect, useState } from "react";
import { AddHeader } from "../../utils/axiosHelper/AxiosHelper";
import OrderServices from "../../Services/order";
import CardType from "./Payment/CartType";
import Installment from "./Payment/Installment";
import { useDispatch } from "react-redux";
import { loadedOrder } from "../../redux/slices/orderSlice";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import Link from "next/link";

const MainOrders = () => {
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const dispatch = useDispatch();
  const orderUser = useSelector((state) => state.orderUser);
  const { token } = useSelector((state) => state.profileUser);

  useEffect(() => {
    AddHeader("token", token);
    OrderServices.getOrderUser((res) => {
      if ((res.code === 200) | (res.code === 20)) {
        let copyRes = { ...res };
        let filterOrderData = copyRes.result.filter((x) => x.status === 3);
        dispatch(loadedOrder(filterOrderData));
      }
    });
  }, [dispatch, token]);

  if (token === false) {
    return <Error statusCode={404} title="ابتدا وارد سایت شوید" />;
  }
  if (orderUser.notOrder) {
    return (
      <NotProducts>
        <div>
          <h1>شما هیج محصولی سفارش نداده اید!</h1>
          <Link href="/products">
            <a>مشاهده محصولات</a>
          </Link>
        </div>
      </NotProducts>
    );
  }
  if (orderUser.loading) {
    return <Spinner text="...درحال دریافت اطلاعات لطفا منتظر بمانید" />;
  } else {
    return (
      <Main>
        <OrdersSection />
        <Payment />
        <SectionTypePayment>
          {/******* section box Installment ****** */}

          {orderUser.data[0].status === 3 && (
            <Installment setStep1={setStep1} setStep2={setStep2} />
          )}
          {/****** section card Type payment  ***** */}
          {orderUser.data[0].status === 3 && (
            <CardType step1={step1} step2={step2} />
          )}
        </SectionTypePayment>
        <BankPayment />
        <OnlinePayment />
        <Timing />
      </Main>
    );
  }
};

export default MainOrders;
