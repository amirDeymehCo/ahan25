import styled from "styled-components";
import { typeScale } from "../../../../styles/global";
import { fontsTheme } from "../../../../styles/global/typography";
import Share from "./../../../../assets/share.svg";

/**
 * the Key And Circle Icon In Auth Modals
 * @param {string} label
 * @param {bool} success
 * @returns
 */
export default function RightBarIconShare({ label, success }) {
  return (
    <$Container>
      <$Wrapper>
        <$Icon>
          <Share />
        </$Icon>
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

const $Icon = styled.div`
  position: relative;
  width: 14rem;
  max-width: 90%;
  height: 14rem;
  filter: invert(51%) sepia(76%) saturate(431%) hue-rotate(329deg)
    brightness(97%) contrast(88%);
`;

const $Header1 = styled.h1`
  margin-top: 4rem;
  color: #fff;
  font-size: ${typeScale.header1};
  font-family: ${fontsTheme.primaryBold};
  text-align: center;
`;
