import styled from 'styled-components';
import { neutral, primary, secondary } from '../../../styles/global/color';
import Inquiry from '../../../assets/registration-process/inquiry.svg';
import { fontsTheme } from '../../../styles/global/typography';
import { device } from '../../../styles/global';

export default function Cart({
  number,
  id,
  logo_img,
  title,
  showDetailHandler,
}) {
  const Imagee = styled(logo_img)`
    width: 4.5em;
    height: 4.5em;
    fill: none;
    
  `;

  return (
    <$CartContainer onClick={() => showDetailHandler(id)}>
      <$ImageContainer>
        <Imagee />
      </$ImageContainer>
      <$Description>
        <p>
          <span>{number}.</span>
          {title}
        </p>
      </$Description>
    </$CartContainer>
  );
}
const $Description = styled.div`
  display: flex;
  justify-content: center;
  p {
    direction: rtl;
    font-family: ${fontsTheme.primaryBold};
    font-style: normal;
    font-weight: 800;
    font-size: 0.8em;
    line-height: 1.1em;
    text-align: center;
    color: ${neutral[100]};
    margin-top: 1.5em;
    

    span {
      font-family: 'B Zar';
      font-style: normal;
      font-weight: 700;
      font-size: 1.4em;
      line-height: 1.4em;
      text-align: center;
      color: ${secondary[200]};
      margin-left: 0.4em;
    }
  }
`;

const $CartContainer = styled.div`
  width: 13.5em;
  height: 11.4em;
  background: ${primary[400_50]};
  border: 0.05em solid ${neutral[400_50]};
  box-sizing: border-box;
  box-shadow: ${(p) => p.theme.shadow.boxShadow};
  backdrop-filter: blur(4em);
  border-radius: 2em;
  transform: matrix(1, 0, 0, 1, 0, 0);
  cursor: pointer;
  margin: 1.5em 0.2em 0;
  z-index: 100;
 
`;

const $ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.6em;

  
`;
