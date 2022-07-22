import styled from "styled-components";
import ModalWrapper from "../../common/modal-wrapper";
import RightBarIcon from "./common/right-bar-icon";
import ModalTitle from "./common/title";
import Input from "../../common/input";
import { useState } from "react";
import ModalFooter from "./common/footer";
import PassField from "../../common/pass-field";
import { useRouter } from "next/router";
import { selectUserEmail, selectUserPhone } from "../../../redux/slices/user";
import { useDispatch, useSelector } from "react-redux";
import ModalAlert from "./common/alert";
import { useMemo } from "react";
import LoginServices from "../../../Services/Login/LoginServices";
import ProfileServices from "../../../Services/auth/profile";
import { loadedProfile } from "../../../redux/slices/profileSlice";
import { AddHeader } from "../../../utils/axiosHelper/AxiosHelper";

export default function ConfirmationCode({ isPage }) {
  const router = useRouter();
  const sender = router.query.sender;
  const withPassword = router.query.withPassword === "true";
  const userPhone = useSelector((state) => selectUserPhone(state)) || "";
  const userEmail = useSelector((state) => selectUserEmail(state));
  const modalFooterObj = useMemo(
    () => modalFooterText(sender, userPhone, userEmail),
    [sender, userPhone, userEmail]
  );

  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ style: null, text: null });
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    if (code.length < 1) {
      return setAlert({ style: "error", text: "لطفا کد تایید را وارد کنید" });
    } else {
      setAlert(null);
    }
    let userData = {
      phone: userPhone,
      code,
    };

    try {
      LoginServices.configCode(userData, (res) => {
        if (res.code === 200) {
          localStorage.setItem("token", res.result);
          AddHeader("token", res.result);
          ProfileServices.getProfile((res) => {
            if (res.code === 200) {
              dispatch(loadedProfile(res.result));
              router.push("/account");
            }
          });
        } else {
          setAlert({
            style: "error",
            text: res.msg,
          });
        }
      });
    } catch (error) {
      setAlert({
        style: "error",
        text: "مشکلی پیش آمده است لطفا بعدا امتحان کنید",
      });
    }
  };

  return (
    <ModalWrapper
      name="confirmation-code"
      isPage={isPage}
      rightBar={<RightBarIcon label="احسان متال" />}
      leftBar={
        <$Wrapper>
          <ModalTitle title="احراز هویت" />
          <ModalAlert alert={alert} />
          <Input
            label="کد تایید"
            name="confirmation-code"
            autoComplete="off"
            dir="ltr"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          {withPassword && (
            <PassField
              label="رمز عبور"
              forgetPassword={true}
              isPage={isPage}
              name="password"
              autoComplete="off"
              dir="ltr"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}
          <ModalFooter
            btn={{ children: "تایید", handleClick: handleSubmit }}
            text={modalFooterObj}
            isPage={isPage}
          />
        </$Wrapper>
      }
    />
  );
}

// ===== Functions ====
function modalFooterText(sender, userPhone, userEmail) {
  switch (sender) {
    case "login":
      return {
        children: `اصلاح شماره ${userPhone}`,
        href: "?modal=login",
        as: "/auth/login",
      };

    case "signup":
      return {
        children: `اصلاح شماره ${userPhone}`,
        href: "?modal=signup",
        as: "/auth/signup",
      };

    case "email":
      return {
        children: `اصلاح ایمیل ${userEmail}`,
        href: "?modal=email-and-pass",
        as: "/auth/email-and-pass",
      };

    default:
      return {
        children: "",
        href: "",
        as: "",
      };
  }
}

// ====== Styles ======
const $Wrapper = styled.div``;
