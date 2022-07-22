import styled from "styled-components";
import ModalWrapper from "../../common/modal-wrapper";
import RightBarIcon from "./common/right-bar-icon";
import ModalTitle from "./common/title";
import Input from "../../common/input";
import { useEffect, useState } from "react";
import ModalFooter from "./common/footer";
import { fontsTheme, typeScale } from "../../../styles/global";
import http from "../../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserPhone, setUserPhone } from "../../../redux/slices/user";
import { useRouter } from "next/router";
import ModalAlert from "./common/alert";
import { validatePhone } from "./../../../utils/validation";

export default function SignupModal({ isPage }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const userPhone = useSelector((state) => selectUserPhone(state));

  const [phone, setPhone] = useState("");
  const [alert, setAlert] = useState({ style: null, text: null });

  useEffect(() => {
    setPhone(userPhone || "");
  }, [userPhone]);

  async function handleSubmit() {
    if (!validatePhone(phone))
      return setAlert({ style: "error", text: "شماره همراه اشتباه است" });
    setAlert(null);

    try {
      const { data } = await http.post(
        process.env.NEXT_PUBLIC_API_REGISTER_CODE,
        { phone }
      );

      setAlert({
        style: "success",
        text: data.msg,
      });

      dispatch(setUserPhone(phone));

      router.push(
        {
          pathname: router.pathname,
          query: { modal: "confirmation-code", sender: "signup" },
        },
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
      reversePrivateRoute={true}
      name="signup"
      isPage={isPage}
      rightBar={<RightBarIcon label="خوش آمدید" />}
      leftBar={
        <$Wrapper>
          <ModalTitle
            title="ثبت نام"
            badge={{ title: "ورود", href: "?modal=login", as: "/auth/login" }}
            isPage={isPage}
            wrapperStyle={alert && "margin-bottom: 2rem;"}
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
