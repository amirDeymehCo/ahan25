import styled from "styled-components";
import ModalWrapper from "../../common/modal-wrapper";
import RightBarIcon from "./common/right-bar-icon";
import ModalTitle from "./common/title";
import Input from "./../../common/input";
import { useEffect, useState } from "react";
import ModalFooter from "./common/footer";
import ModalAlert from "./common/alert";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectUserPhone, setUserPhone } from "./../../../redux/slices/user";
import { validatePhone } from "./../../../utils/validation";
import axiosInstance from "../../../utils/axios";
import PrivateRoute from "./../../common/private-route";
import LoginServices from "./../../../Services/Login/LoginServices";

function LoginModal({ isPage }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const userPhone = useSelector((state) => selectUserPhone(state));

  const [phone, setPhone] = useState("");
  const [alert, setAlert] = useState({ style: null, text: null });

  useEffect(() => {
    setPhone(userPhone || "");
  }, [userPhone]);

  const handelSubmit = async () => {
    if (!validatePhone(phone)) {
      return setAlert({ style: "error", text: "شماره همراه اشتباه است" });
    } else {
      setAlert(null);
    }
    LoginServices.loginCode({ phone }, (res) => {
      console.log(res);
      if (res.code === 200) {
        dispatch(setUserPhone(phone));
        router.push("/auth/confirmation-code");
      } else {
        setAlert({
          style: "error",
          text: res.msg,
        });
      }
    });
  };

  return (
    <>
      <ModalWrapper
        reversePrivateRoute={true}
        name="login"
        isPage={isPage}
        rightBar={<RightBarIcon label="خوش آمدید" />}
        leftBar={
          <$Wrapper>
            <ModalTitle
              title="ورود"
              badge={{
                title: "ثبت نام",
                href: "?modal=signup",
                as: "/auth/signup",
              }}
              isPage={isPage}
            />
            <ModalAlert alert={alert} />
            <Input
              label="شماره همراه"
              name="phone"
              dir="ltr"
              type="tel"
              maxLength="11"
              minLength="11"
              pattern="[0-9]"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            />
            <ModalFooter
              btn={{ children: "ثبت", handleClick: handelSubmit }}
              text={{
                children: "ورود با ایمیل و پسورد",
                href: "?modal=email-and-pass",
                as: "/auth/email-and-pass",
              }}
              isPage={isPage}
            />
          </$Wrapper>
        }
      />
    </>
  );
}

export default LoginModal;

// ====== Styles ======
const $Wrapper = styled.div``;
