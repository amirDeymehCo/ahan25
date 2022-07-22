import Link from 'next/link';
import styled from 'styled-components';
import { neutral, primary, secondary } from '../../../styles/global/color';
import { fontsTheme } from '../../../styles/global/typography';
import img1 from '../../../assets/FrequentlyAskedQuestion/img1.svg';
import PhoneImage from '../../../assets/phone.svg';
import WhatsappImage from '../../../assets/whatsapp.svg';
import InstagramImage from '../../../assets/instagram.svg';

export const SalesExpert = () => {
  return (
    <$Wrapper>
      <$Cart>
        <$CartMain>
          <$Image />
          <$CartMainFooter>
            <$H4>تیر آهن بال پهن سنگین</$H4>
            <$PhoneNumber>
              <span>(888) 444-234</span>
              <$PhoneIcon />
            </$PhoneNumber>
          </$CartMainFooter>
          <$Overlay>
            <$OverlayBox>
              <div>
                <$H4Bold>تیرآهن بال پهن سنگین</$H4Bold>
                <$Icons>
                  <Link href="/" passHref>
                    <$WhatsappIcon />
                  </Link>
                  <Link href="/" passHref>
                    <$InstagramIcon />
                  </Link>
                </$Icons>
              </div>
            </$OverlayBox>
          </$Overlay>
        </$CartMain>
      </$Cart>
    </$Wrapper>
  );
};

const $WhatsappIcon = styled(WhatsappImage)`
  width: 1.8em;
  height: 1.8em;
  fill: ${secondary[100]};
  margin: 0 0.5em;
`;

const $InstagramIcon = styled(InstagramImage)`
  width: 1.8em;
  height: 1.8em;
  fill: ${secondary[100]};
`;

const $Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2.7em;
`;

const $OverlayBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`;

const $H4 = styled.h4`
  font-family: ${fontsTheme.primaryBold};
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 1.4em;
  color: ${neutral[100]};
`;

const $H4Bold = styled($H4)`
  font-size: 1.4em;
  line-height: 2em;
`;

const $Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 23em;
  height: 31em;
  border: 0.03em solid ${neutral[400_50]};
  box-sizing: border-box;
  transform: matrix(1, 0, 0, 1, 0, 0);
  background: ${primary[300_25]};
  box-shadow: ${(p) => p.theme.shadow.boxShadow};
  backdrop-filter: blur(4em);
  border-radius: 2em;
  opacity: 0;
  transition: all 0.6s ease-in-out;
`;
const $PhoneIcon = styled(PhoneImage)`
  width: 1.4em;
  height: 1.4em;
  fill: ${secondary[100]};
`;
const $PhoneNumber = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  gap: 0.5em;
  span {
    font-family: ${fontsTheme.primaryBold};
    font-style: normal;
    font-weight: 500;
    font-size: 1em;
    line-height: 1.8em;
    text-align: right;
    text-transform: uppercase;
    color: ${neutral[100]};
  }
`;
const $CartMainFooter = styled.div`
  background: ${primary[300]};
  /* v */
  box-shadow: 0em 3em 6em rgba(60, 71, 108, 0.1);
  backdrop-filter: blur(4em);
  border-radius: 0em 0em 2em 2em;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  text-align: center;
  padding: 1.1em 0 1.4em;
  cursor: pointer;
`;

const $Image = styled(img1)`
  width: 15.7em;
  height: 24.8em;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  z-index: 5;
`;

const $CartMain = styled.div`
  position: relative;
  width: 23em;
  height: 31em;
  border: 0.03em solid ${neutral[400_50]};
  box-sizing: border-box;
  filter: drop-shadow(${(p) => p.theme.shadow.boxShadow});
  backdrop-filter: blur(4em);
  border-radius: 2em;
  transform: matrix(1, 0, 0, 1, 0, 0);
  padding-top: 1.6em;
  cursor: pointer;

  &:hover .Sales-expert__Overlay-sc-2muros-6 {
    opacity: 1;
  }
`;
const $Cart = styled.div`
  width: 23em;
  height: auto;
`;
const $Wrapper = styled.div`
  display: flex;
  justify-content: center;
  /* background: #ff00001d; */
`;
