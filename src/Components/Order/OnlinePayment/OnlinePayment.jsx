import TitleSection from "../../common/TitleSection/TitleSection";
import InputGroup from "../../common/InputGroup/InputGroup";
import {
  SectionOnline,
  Container,
  Level1,
  Level2,
  ButtonPayment,
} from "./OnlinePaymentStyles";

const OnlinePayment = () => {
  return (
    <SectionOnline id="online-payment">
      <TitleSection title="پرداخت آنلاین" />
      <Container>
        <Level1 className="levels">
          <h4>
            وضعیت مرحله <span>1</span>
          </h4>
          <InputGroup
            defaultValue={"16,0000"}
            styleCustom={"width:100%;padding:0px;"}
            idInput="price-level1"
            label="مبلغ این مرحله :"
          />
          <ButtonPayment disabled>پرداخت</ButtonPayment>
          <InputGroup
            defaultValue={"ESDWFASFFJWI"}
            styleCustom={"width:100%;padding:0px;"}
            idInput="code-level1"
            label="شماره رهگیری "
          />
        </Level1>
        <Level2 className="levels">
          <h4>
            وضعیت مرحله <span>2</span>
          </h4>
          <InputGroup
            defaultValue={"16,0000"}
            styleCustom={"width:100%;padding:0px;"}
            idInput="price-level1"
            label="مبلغ این مرحله :"
          />
          <ButtonPayment>پرداخت</ButtonPayment>
          <InputGroup
            defaultValue={""}
            styleCustom={"width:100%;padding:0px;"}
            idInput="code-level1"
            label="شماره رهگیری "
          />
        </Level2>
      </Container>
    </SectionOnline>
  );
};

export default OnlinePayment;
