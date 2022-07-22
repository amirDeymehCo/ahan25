import styled from "styled-components";
import ModalWrapper from "../../common/modal-wrapper";
import RightBarIcon from "./common/right-bar-icon";
import ModalTitle from "./common/title";
import Input from "../../common/input";
import { useState } from "react";
import ModalFooter from "./common/footer";
import PassField from "../../common/pass-field";
import { useRouter } from "next/router";
import ModalAlert from "./common/alert";
import axiosInstance from "../../../utils/axios";
import { validateEmail } from "../../../utils/validation";
import { useDispatch } from "react-redux";
import { setUserEmail } from "../../../redux/slices/user";

export default function EmailAndPass({ isPage }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alert, setAlert] = useState({ style: null, text: null });

  async function handleSubmit() {
    if (!validateEmail(email))
      return setAlert({ style: "error", text: "لطفا ایمیل معتبری وارد کنید" });

    if (password.trim().length < 8)
      return setAlert({
        style: "error",
        text: "لطفا پسوردی حداقل 8 رقمی وارد کنید",
      });

    setAlert(null);

    try {
      const { data } = await axiosInstance.post(
        process.env.NEXT_PUBLIC_API_EMAIL_AND_PASS,
        { email, pass: password }
      );

      setAlert({
        style: "success",
        text: data.msg,
      });

      dispatch(setUserEmail(email));

      router.push(
        { pathname: "?modal=confirmation-code", query: { sender: "email" } },
        undefined,
        { shallow: true }
      );
    } catch (error) {
      setAlert({
        style: "error",
        text: error,
      });
    }
  }

  return (
    <ModalWrapper
      name="email-and-pass"
      isPage={isPage}
      rightBar={<RightBarIcon label="احسان متال" />}
      leftBar={
        <$Wrapper>
          <ModalTitle
            title="ایمیل و پسورد"
            badge={{ title: "اختیاری" }}
            isPage={isPage}
          />
          <ModalAlert alert={alert} />
          <Input
            label="ایمیل"
            name="email"
            dir="ltr"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PassField
            label="رمز عبور"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ModalFooter
            btn={{ children: "ثبت", handleClick: handleSubmit }}
            isPage={isPage}
          />
        </$Wrapper>
      }
    />
  );
}

// ====== Styles ======
const $Wrapper = styled.div``;
