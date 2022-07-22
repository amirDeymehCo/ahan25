import styled from "styled-components";
import ArrowLeft from "../assets/arrow-left.svg";
import Link from "next/link";
import { fontsTheme, neutral, secondary } from "../styles/global";

export default function UseShowMore({
  title,
  marginTop,
  justifyContent,
  flexDirection,
  href,
  onClick
}) {
  return (
    <$Wrapper marginTop={marginTop} justifyContent={justifyContent}>
      <$Content onClick={onClick}>
        {href ? (
          <Link href={href} passHref>
            <$Box flexDirection={flexDirection}>
              <$Title>{title}</$Title>
              <$Icon />
            </$Box>
          </Link>
        ) : (
          <$Box flexDirection={flexDirection}>
            <$Title>{title}</$Title>
            <$Icon />
          </$Box>
        )}
      </$Content>
    </$Wrapper>
  );
}

const $Wrapper = styled.div`
  display: flex;
  justify-content: ${(p) => p.justifyContent};
  margin-top: ${(p) => p.marginTop};
`;
const $Content = styled.div`
  display: inline-block !important;
  justify-content: flex-end !important;
  position: relative;
  padding: 0 0.5em;
  cursor: pointer;
  user-select: none;
`;

const $Box = styled.div`
  display: flex;
  align-items: center !important;
  flex-direction: ${(p) => p.flexDirection};
  /* background: #ff000050; */

  &::before {
    content: "";
    width: 100%;
    height: 0.2em;
    background: ${secondary[200]};
    border-radius: 0.5em;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
const $Link = styled(Link)`
  cursor: pointer;
  background: red;
`;
const $Title = styled.p`
  font-family: ${fontsTheme.primaryBold};
  font-style: normal;
  font-weight: 700;
  font-size: 1.4em;
  line-height: 2em;
  color: ${neutral[100]};
  padding-left: 1.9em !important;
`;
const $Icon = styled(ArrowLeft)`
  width: 1.2em;
  height: 1.8em;
  fill: none;
`;
