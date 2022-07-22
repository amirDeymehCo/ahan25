import { SectionTiming, Times, VectorStatusTime } from "./TimingStyles";
import { Check } from "./../Payment/PaymentStyles";
import VectorStatus from "./vectorStatus";
import { useSelector } from "react-redux";
const Timing = () => {
  const orderUser = useSelector((state) => state.orderUser);
  const type = orderUser.data[0].payment.type;
  return (
    <SectionTiming>
      <Times>
        <h4>انتخاب زمان بندی</h4>
        <div>
          <Check active={true}>۱۴۰۱/۰۲/۲۱ ۱۷:۲۰</Check>
          <Check active={false}>۱۴۰۱/۰۲/۲۱ ۱۷:۲۰</Check>
          <Check active={false}>۱۴۰۱/۰۲/۲۱ ۱۷:۲۰</Check>
        </div>
      </Times>
      <VectorStatusTime>
        <h5>
          {" "}
          {type === 1 && "محموله در حال ارسال است"}
          {type === 2 &&
            "شما باید در یکی از زمان ها بیاید و محصول خود را تحویل بگیرید"}
        </h5>
        <VectorStatus size="180" />
      </VectorStatusTime>
    </SectionTiming>
  );
};

export default Timing;
