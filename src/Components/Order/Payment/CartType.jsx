import { useState } from "react";
import { useSelector } from "react-redux";
import OrderServices from "../../../Services/order";
import { Type, Check } from "./PaymentStyles";

const CardType = ({ step1, step2 }) => {
  const [activeType, setActiveType] = useState(1);
  const orderUser = useSelector((state) => state.orderUser);
  const orderId = orderUser.data[0]._id;
  const handelSelectTypeBank = (type) => {
    if (step1.trim() !== "" || step2.trim() !== "") {
      setActiveType(type);
      const data = {
        orderId,
        type: 1,
        steps: [
          {
            stepPrice: step1,
          },
          {
            stepPrice: step2,
          },
        ],
      };
      OrderServices.selectPaymentType(data, (res) => {
        console.log(res);
      });
    } else {
      alert("ابتدا قسط بندی را وارد کنید");
    }
  };

  return (
    <Type id="type-payment">
      <p>روش پرداخت :</p>
      <div>
        <Check
          onClick={() => handelSelectTypeBank(1)}
          active={activeType === 1}
        >
          آنلاین
        </Check>

        <Check
          className="right"
          onClick={() => handelSelectTypeBank(2)}
          active={activeType === 2}
        >
          بانکی
        </Check>
      </div>
    </Type>
  );
};

export default CardType;
