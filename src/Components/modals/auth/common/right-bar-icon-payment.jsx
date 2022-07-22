import styled from "styled-components";
import { device, typeScale } from "../../../../styles/global";
import { fontsTheme } from "../../../../styles/global/typography";
import Bubble from "./../../../../assets/bubble.svg";
import CreditCardSuccess from "./../../../../assets/credit-card-success.svg";
import CreditCardFailed from "./../../../../assets/credit-card-failed.svg";

/**
 * the Key And Circle Icon In Auth Modals
 * @param {string} label
 * @param {bool} success
 * @returns
 */
export default function RightBarIconPayment({ label, success }) {
  return (
    <$Container>
      <$Wrapper>
        <$Bubble />
        <$CreditCard>
          {success ? <CreditCardSuccess /> : <CreditCardFailed />}
        </$CreditCard>
      </$Wrapper>
      <$Header1>{label}</$Header1>
    </$Container>
  );
}

// ====== Styles ======
const $Container = styled.figure`
  width: 100%;
`;

const $Wrapper = styled.div`
  position: relative;
  height: 19rem;
  display: flex;
  justify-content: center;
`;

const $CreditCard = styled.div`
  position: relative;
  width: 21rem;
  max-width: 90%;
`;

const $Bubble = styled(Bubble)`
  position: absolute;
  width: 22rem;
  max-width: 90%;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;

const $Header1 = styled.h1`
  margin-top: 4rem;
  color: #fff;
  font-size: ${typeScale.header1};
  font-family: ${fontsTheme.primaryBold};
  text-align: center;
`;
