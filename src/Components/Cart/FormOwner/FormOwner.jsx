import {
  Main,
  TitleLevel,
  Container,
  FormOwnerStyles,
  TypePost,
  RaidoButton,
  InputGet,
} from "./FormOwnerStyles";
import GetMap from "../GetMap/GetMap";
const FormOwner = ({
  setNameAccount,
  name,
  setName,
  nameAccount,
  numberAccount,
  setNumberAccount,
  numberShaba,
  setNumberShaba,
  checkType,
  setCheckType,
  address,
  setAddress,
}) => {
  return (
    <Main id="type-payment">
      <TitleLevel>مرحله 2</TitleLevel>
      <Container>
        <h3>مشخصات خریدار</h3>
        <FormOwnerStyles action="#">
          <InputGet>
            <label htmlFor="name">نام گیرنده :</label>
            <input
              required
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGet>
          <InputGet>
            <label htmlFor="name-account">نام صاحب حساب :</label>
            <input
              required
              type="text"
              id="name-account"
              value={nameAccount}
              onChange={(e) => setNameAccount(e.target.value)}
            />
          </InputGet>
          <InputGet>
            <label htmlFor="number-account">شماره حساب :</label>
            <input
              required
              type="text"
              id="number-account"
              value={numberAccount}
              onChange={(e) => setNumberAccount(e.target.value)}
            />
          </InputGet>
          <InputGet>
            <label htmlFor="number-shaba">شماره شبا :</label>
            <input
              required
              type="text"
              id="number-shaba"
              value={numberShaba}
              onChange={(e) => setNumberShaba(e.target.value)}
            />
          </InputGet>
          <InputGet width="100%">
            <label htmlFor="number-shaba">آدرس را انتخاب کنید :</label>
            <GetMap />
          </InputGet>

          <InputGet width="100%">
            <label htmlFor="number-shaba">آدرس را وارد کنید :</label>
            <input
              required
              type="text"
              id="number-shaba"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </InputGet>
          <TypePost>
            <h4>طریقه ی ارسال :</h4>
            <div>
              <RaidoButton
                onClick={() => setCheckType(1)}
                check={checkType === 1}
              >
                توسط شخص تحول گرفته شود
              </RaidoButton>
              <RaidoButton
                onClick={() => setCheckType(2)}
                check={checkType === 2}
              >
                توسط شرکت ارسال شود
              </RaidoButton>
            </div>
          </TypePost>
        </FormOwnerStyles>
      </Container>
    </Main>
  );
};

export default FormOwner;
