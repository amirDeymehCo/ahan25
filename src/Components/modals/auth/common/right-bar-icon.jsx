import styled from "styled-components";
import { neutral, typeScale } from "../../../../styles/global";
import KeySvg from "./../../../../assets/key.svg";
import { fontsTheme } from "../../../../styles/global/typography";
import EhsanMetalSVG from "./../../../../assets/ehsan-metal.svg";

/**
 * the Key And Circle Icon In Auth Modals
 * @param {string} label
 * @returns
 */
export default function RightBarIcon({ label }) {
  return (
    <$Container>
      <$Wrapper>
        <$Circle>
          <EhsanMetalSVG />
        </$Circle>
        <$key />
      </$Wrapper>
      <$Header1>{label}</$Header1>
    </$Container>
  );
}

// ====== Styles ======
const $Container = styled.figure``;

const $Wrapper = styled.div`
  position: relative;
  width: 19rem;
  height: 19rem;
`;

const $Circle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 18rem;
  height: 18rem;

  background: linear-gradient(
    24.57deg,
    rgba(54, 69, 98, 0.6) 26.04%,
    rgba(117, 126, 177, 0.18) 80.66%
  );

  box-shadow: 0 3rem 6rem rgba(60, 71, 108, 0.1);
  backdrop-filter: blur(4rem);

  border-radius: 100%;
`;

const $key = styled(KeySvg)`
  position: absolute;
  bottom: -1.3rem;
  right: -10%;
`;

const $Header1 = styled.h1`
  margin-top: 4rem;
  color: #fff;
  font-size: ${typeScale.header1};
  font-family: ${fontsTheme.primaryBold};
  text-align: center;
`;
