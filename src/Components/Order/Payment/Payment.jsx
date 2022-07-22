import TitleSection from "../../common/TitleSection/TitleSection";
import TablePayments from "./TablePayment";
import CardResult from "./CardResult";
import { SectionPayment, Content } from "./PaymentStyles";

const Payment = () => {
  return (
    <SectionPayment>
      <TitleSection
        title={"پرداخت"}
        paragraf="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده"
      />
      <Content>
        {/****  section table payment ******** */}

        <TablePayments />

        {/****  section Card Result ******** */}

        <CardResult />
      </Content>
    </SectionPayment>
  );
};

export default Payment;
