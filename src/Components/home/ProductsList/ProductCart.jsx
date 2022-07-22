import styled from 'styled-components';
import { primary } from '../../../styles/global/color';
import { neutral } from '../../../styles/global/color';
import { secondary } from '../../../styles/global/color';
import { fontsTheme } from '../../../styles/global/typography';
import Pic from '../../../assets/ProductsList/logo.svg';
import LikeImg from '../../../assets/like.svg';
import ViewImg from '../../../assets/view.svg';
import Link from 'next/link';
import { device } from '../../../styles/global';

const { primaryBold } = fontsTheme;

const ProductCart = () => {
  return (
    <div>
      <$Wrapper>
        <Top>
          <Left>
            <LeftContainer>
              <LeftTitle>: موارد استفاده</LeftTitle>
              <LeftMain>
                <LeftDescription>
                  <Ul>
                    <Li>تیرآهن بال پهن سنگین</Li>
                    <Li>تیرآهن بال پهن سنگین</Li>
                    <Li>تیرآهن بال پهن سنگین</Li>
                    <Li>تیرآهن بال پهن سنگین</Li>
                  </Ul>
                </LeftDescription>
                <Continue>
                  <Link href="/">ادامه مطلب</Link>
                </Continue>
              </LeftMain>
            </LeftContainer>
          </Left>
          <Right>
            <RightContainer>
              <RightImage>
                <Logo />
                <RightCount>4890</RightCount>
              </RightImage>
              <RightTitle>
                <RightSpan>(IPB) HEB ASTM</RightSpan>
                <RightH3>تیرآهن بال پهن سنگین</RightH3>
              </RightTitle>
            </RightContainer>
          </Right>
        </Top>
        <Bottom>
          <Divider />
          <BottomMain>
            <BottomLeft>
              <BottomLeftItem>
                <Typography>109 بازدید کننده</Typography>
                <ViewLogo />
              </BottomLeftItem>
              <BottomLeftItem>
                <Typography>109 بازدید کننده</Typography>
                <LikeLogo />
              </BottomLeftItem>
            </BottomLeft>
            <BottomRight>
              <Link href="/">مقالات مرتبط</Link>
            </BottomRight>
          </BottomMain>
        </Bottom>
      </$Wrapper>
    </div>
  );
};

export default ProductCart;

const $Wrapper = styled.div`
  width: 37.2em;
  height: 30em;
  background: ${primary.Primary_300_25};
  border: 0.5px solid ${neutral[400_50]};
  box-sizing: border-box;
  box-shadow: ${(p) => p.theme.shadow.boxShadow};
  backdrop-filter: blur(40px);
  border-radius: 1.5em;
  padding: 4em 2em 1.4em;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Top = styled.div`
  display: flex;
`;

const RightContainer = styled.div``;
const Right = styled.div`
  flex: 1;
`;

const RightImage = styled.div`
  background: #6474a5;
  box-shadow: ${(p) => p.theme.shadow.darkShadow};
  backdrop-filter: blur(40px);
  border-radius: 1.5em;
  width: 14.5em;
  height: 13.9em;
  position: relative;
  margin: 0 auto;
`;
const RightTitle = styled.div`
  text-align: right;
  width: 14.5em;
  margin: 1.3em auto 0;
`;

const RightSpan = styled.span`
  font-family: 'Andika';
  font-style: normal;
  font-weight: 400;
  font-size: 0.8em;
  line-height: 1.3em;
  color: ${neutral[300]};
`;
const RightH3 = styled.h3`
  font-family: ${primaryBold};
  font-style: normal;
  font-weight: 700;
  font-size: 1.4em;
  line-height: 2em;
  text-align: right;
  color: ${neutral[100]};
`;

const Logo = styled(Pic)`
  width: 8.2em;
  height: 8.1em;
  fill: #ffffffcf;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RightCount = styled.p`
  position: absolute;
  top: 10px;
  left: 10px;
  background: ${secondary[100]};
  border-radius: 0.5em;
  font-family: 'IRANYekanWeb';
  font-style: normal;
  font-weight: 800;
  font-size: 0.8em;
  line-height: 1.1em;
  color: ${neutral[100]};
  padding: 0.4em 1.2em;
`;
const Left = styled.div`
  flex: 1;
`;
const LeftContainer = styled.div`
  width: 16.1em;
  margin: 0 auto;
`;
const LeftTitle = styled.h5`
  font-family: ${primaryBold};
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 1.4em;
  text-align: right;
  color: ${neutral[100]};
`;
const LeftMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: ${primary[400_50]};
  border-radius: 1.5em 0 1.5em 1.5em;
  margin-top: 10px;
  padding: 24px;
  padding-top: 11px;
`;
const LeftDescription = styled.div``;
const Continue = styled.div`
  a {
    font-family: ${primaryBold};
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.4em;
    text-align: right;
    text-transform: uppercase;
    color: ${secondary[100]};
  }
  margin-top: 1.3em;
`;

const Ul = styled.ul``;
const Li = styled.li`
  font-family: ${primaryBold};
  font-style: normal;
  font-weight: 400;
  font-size: 0.8em;
  line-height: 1.1em;
  text-align: right;
  color: ${neutral[200]};
  margin-top: 1.3em;
`;
const Bottom = styled.div``;

const Divider = styled.div`
  height: 0.15em;
  margin-bottom: 1.6em;
  background: ${(p) => p.theme.primaryColorGradientLight};
`;
const BottomMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BottomLeft = styled.div`
  display: flex;
`;
const BottomRight = styled.div`
  a {
    font-family: ${primaryBold};
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
    line-height: 1.4em;
    text-align: right;
    text-decoration-line: underline;
    color: ${neutral[100]};
  }
`;
const BottomLeftItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1em;
`;

const LikeLogo = styled(LikeImg)`
  width: 1.3em;
  height: 1.2em;
  fill: ${secondary[200]};
`;
const ViewLogo = styled(ViewImg)`
  width: 1.4em;
  height: 1em;
  fill: ${secondary[200]};
`;
const Typography = styled.p`
  font-family: ${fontsTheme.secondaryTitle};
  font-style: normal;
  font-weight: 700;
  font-size: 0.8em;
  line-height: 0.8em;
  text-align: right;
  color: ${neutral[300]};
  padding: 0 0.8em;
`;
