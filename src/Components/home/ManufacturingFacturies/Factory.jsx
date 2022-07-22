import styled from 'styled-components';
import { neutral, primary, secondary } from '../../../styles/global/color';
import { fontsTheme } from '../../../styles/global/typography';
import { device } from '../../../styles/global';

export default function Factory({
  name,
  id,
  logo_img,
  title,
  showDetailHandler,
  detail_img,
}) {
  const Imagee = styled(logo_img)`
    width: 5.6em;
    height: 5.7em;
    fill: none;
  `;

  return (
    <$Wrapper onClick={() => showDetailHandler(id)}>
      <$ImageContainer>
        <Imagee />
      </$ImageContainer>
      <$Description>
        <p>{name}</p>
      </$Description>
    </$Wrapper>
  );
}
const $Description = styled.div`
  display: flex;
  justify-content: center;
  p {
    direction: rtl;
    font-family: ${fontsTheme.secondaryTitle};
    font-style: normal;
    font-weight: 700;
    font-size: 1.8em;
    line-height: 1.8em;
    text-align: center;
    color: ${neutral[200]};
    margin-top: 1.6em;
  }
`;

const $ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;

  @media ${device.mobileL} {
    margin-top: 1.6em;
  }
`;

const $Wrapper = styled.div`
  width: 17.4em;
  height: 14.48em;
  background: ${primary[400_50]};
  border: 0.05em solid ${neutral[400_50]};
  box-sizing: border-box;
  box-shadow: ${(p) => p.theme.shadow.boxShadow};
  backdrop-filter: blur(4em);
  border-radius: 2em;
  transform: matrix(1, 0, 0, 1, 0, 0);
  margin: 0 auto;
  cursor: pointer;
`;
