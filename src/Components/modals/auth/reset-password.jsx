import styled from "styled-components";
import ModalWrapper from "../../common/modal-wrapper";
import RightBarIcon from "./common/right-bar-icon";
import ModalTitle from "./common/title";
import { useState, useEffect } from "react";
import ModalFooter from "./common/footer";
import PassField from "./../../common/pass-field";
import { useSelector } from "react-redux";
import { selectUserEmail } from "../../../redux/slices/user";
import ModalAlert from "./common/alert";
import Input from "./../../common/input";
import axiosInstance from './../../../utils/axios';

export default function ResetPassword({ isPage }) {
  const userEmail = useSelector((state) => selectUserEmail(state));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [alert, setAlert] = useState({ style: null, text: null });

  useEffect(() => {
    setEmail(userEmail || "");
  }, [userEmail]);

  async function handleSubmit() {
    if (!validateEmail(email))
      return setAlert({ style: "error", text: "لطفا ایمیل معتبری وارد کنید" });

    if (password.trim().length < 8)
      return setAlert({
        style: "error",
        text: "لطفا پسوردی حداقل 8 رقمی وارد کنید",
      });

    if (code.trim().length < 1)
      return setAlert({ style: "error", text: "لطفا کد تایید را وارد کنید" });

    setAlert(null);

    try {
      const { data } = await axiosInstance.post(
        process.env.NEXT_PUBLIC_API_FORGET_PASS,
        { email, code, newPass: password }
      );

      setAlert({
        style: "success",
        text: data.msg,
      });
    } catch (error) {
      setAlert({
        style: "error",
        text: error,
      });
    }
  }

  return (
    <ModalWrapper
      name="reset-password"
      isPage={isPage}
      rightBar={<RightBarIcon label="احسان متال" />}
      leftBar={
        <$Wrapper>
          <ModalTitle title="رمز عبور جدید" />
          <ModalAlert alert={alert} />
          <PassField
            label="رمز عبور"
            name="password"
            dir="ltr"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!userEmail && (
            <Input
              label="ایمیل"
              name="email"
              dir="ltr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          <Input
            label="کد تایید"
            name="confirmation-code"
            autoComplete="off"
            dir="ltr"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <ModalFooter btn={{ children: "ثبت", handleClick: handleSubmit }} />
        </$Wrapper>
      }
    />
  );
}

// ====== Styles ======
const $Wrapper = styled.div``;
