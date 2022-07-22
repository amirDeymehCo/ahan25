import InputGroup from "../../common/InputGroup/InputGroup";
import TextareaGroup from "../../common/InputGroup/Textarea";
import {
  FormChange,
  DivButtonSubmitChange,
  FormAddress,
  Main,
} from "./ChangeAccountStyles";

const data = [
  { label: "ایمیل :", idInput: "emailUser", type: "email" },
  { label: "رمز عبور قبلی :", idInput: "passBefore", type: "passBefore" },
  { label: "شماره همراه :", idInput: "phone", type: "phone" },
  { label: "رمز عبور جدید :", idInput: "newPass", type: "newPass" },
  { label: "نام و نام خانوادگی :", idInput: "name", type: "name" },
  { label: "تایید رمز عبور :", idInput: "checkPass", type: "checkPass" },
];
const ChangeAccount = () => {
  return (
    <Main>
      <FormChange action="#">
        {data.map((e, i) => (
          <InputGroup
            transformY={"0%"}
            key={i}
            idInput={e.idInput}
            label={e.label}
          />
        ))}
        <DivButtonSubmitChange>
          <button type="submit">تغیر رمز</button>
        </DivButtonSubmitChange>
      </FormChange>
      <FormAddress action="#">
        <TextareaGroup transformY={"-60%"} label="آدرس :" idInput={"address"} />
        <button type="submit">ثبت</button>
      </FormAddress>
    </Main>
  );
};

export default ChangeAccount;
