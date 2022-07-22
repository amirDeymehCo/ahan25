import { SectionOrder, List, BtnStatus, Price } from "./OrdersSectionStyles";
import moment from "moment-jalaali";
import { useSelector } from "react-redux";
const OrdersSection = () => {
  const orderUser = useSelector((state) => state.orderUser);
  const { profile } = useSelector((state) => state.profileUser);

  const owner = orderUser.data[0].owner;
  const createdAt = orderUser.data[0].createdAt;
  const payment = orderUser.data[0].payment;

  return (
    owner && (
      <SectionOrder>
        <h2>جزئیات سفارش</h2>
        <List>
          <li>
            <span>وضعیت :</span>
            <BtnStatus status={owner.type !== 1}>
              <button>
                {owner.type !== 1 ? "تایید شده" : "در انتظار تایید ادمین"}
              </button>
            </BtnStatus>
          </li>
          <li>
            <span>شماره تماس :</span>
            <span>{profile && profile.phone}</span>
          </li>
          <li>
            <span>مبلغ پرداهت شده :</span>
            <Price>
              {payment.amountPaid} <span>تومان</span>
            </Price>
          </li>
          <li>
            <span>کد رهگیری :</span>
            <span>**ESDWDSAGDAWSD**</span>
          </li>
          <li>
            <span>هزینه ارسال :</span>
            <span>رایگان</span>
          </li>
          <li>
            <span>تخفیف کل :</span>
            <Price>
              20،000 <span>تومان</span>
            </Price>{" "}
          </li>
          <li>
            <span>ارزش افزوده :</span>
            <span>5%</span>
          </li>
          <li>
            <span>مبلغ کل :</span>
            <Price>
              18،0000<span>تومان</span>
            </Price>{" "}
          </li>
          <li>
            <span>مبلغ پرداخت شده :</span>
            <Price>
              {payment.amountPaid} <span>تومان</span>
            </Price>
          </li>
          <li>
            <span>تاریخ ثبت سفارش :</span>
            <span>{moment(createdAt).format("jYYYY/jMM/jDD")}</span>
          </li>
          <li>
            <span>نوع پرداخت :</span>
            <span>آنلاین</span>
          </li>
          <li className="address">
            <span>آدرس :</span>
            <span>{owner.addressString}</span>
          </li>
        </List>
      </SectionOrder>
    )
  );
};

export default OrdersSection;
