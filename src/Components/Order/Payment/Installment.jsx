import { InstallmentStyle } from "./PaymentStyles";
import InputGroup from "./../../common/InputGroup/InputGroup";
const Installment = ({ setStep1, setStep2 }) => {
  return (
    <InstallmentStyle>
      <h4>قسط بندی :</h4>
      <form action="#">
        <InputGroup
          onChange={(e) => setStep1(e.target.value)}
          bg={"#495169"}
          label="مرحله اول"
          idInput="one"
        />
        <InputGroup
          onChange={(e) => setStep2(e.target.value)}
          bg={"#495169"}
          label="مرحله دوم"
          idInput="two"
        />
      </form>
    </InstallmentStyle>
  );
};

export default Installment;
