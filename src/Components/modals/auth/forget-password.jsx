import styled from "styled-components";
import ModalWrapper from "../../common/modal-wrapper";
import RightBarIcon from "./common/right-bar-icon";
import ModalTitle from "./common/title";
import Input from "../../common/input";
import { useState, useEffect } from "react";
import ModalFooter from "./common/footer";
import ModalAlert from './common/alert';
import axiosInstance from './../../../utils/axios';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { selectUserEmail } from "../../../redux/slices/user";
import { setUserEmail } from './../../../redux/slices/user';

export default function ForgetPassword({ isPage }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const userEmail = useSelector(state => selectUserEmail(state))
  
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({ style: null, text: null });

  useEffect(() => {
    setEmail(userEmail || "");
  }, [userEmail]);

  async function handleSubmit() {
    if (email.trim().length < 4)
      return setAlert({ style: "error", text: "لطفا ایمیل معتبری وارد کنید" });
    setAlert(null);

    try {
      const { data } = await axiosInstance.post(process.env.NEXT_PUBLIC_API_FORGET_CODE, {email});

      setAlert({
        style: "success",
        text: data.msg,
      });

      dispatch(setUserEmail(email));

      router.push("?modal=reset-password", "/auth/reset-password");
    } catch (error) {
      setAlert({
        style: "error",
        text: error,
      });
    }
  }

  return (
    <ModalWrapper
      name="forget-password"
      isPage={isPage}
      rightBar={<RightBarIcon label="احسان متال" />}
      leftBar={
        <$Wrapper>
          <ModalTitle title="فراموشی رمز عبور" />
          <ModalAlert alert={alert} />
          <Input
            label="ایمیل"
            name="email"
            dir="ltr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ModalFooter
            btn={{ children: "ثبت", handleClick: handleSubmit }}
          />
        </$Wrapper>
      }
    />
  );
}

// ====== Styles ======
const $Wrapper = styled.div``;
