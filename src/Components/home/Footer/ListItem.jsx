import styled from 'styled-components';
import { fontsTheme, neutral } from '../../../styles/global';
import ArrowImg from '../../../assets/arrow2-left.svg';

export const ListItem = () => {
  return (
    <$ListItem>
      <$Logo></$Logo>
      <$Topic>
        <$Title2>قیمت میلگرد</$Title2>
        <$Desc2>12 بهمن ، 1400</$Desc2>
      </$Topic>
    </$ListItem>
  );
};

const $Desc2 = styled.p`
  font-family: ${fontsTheme.secondaryTitle};
  font-style: normal;
  font-weight: 300;
  font-size: 0.8em;
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 0.7em;
  color: ${neutral[300]};
`;

const $Title2 = styled.h4`
  font-family: ${fontsTheme.primaryLight};
  font-style: normal;
  font-weight: 400;
  font-size: 1.4em;
  color: #ffffff;
`;

const $Topic = styled.div``;

const $Logo = styled(ArrowImg)`
  width: 0.5em;
  height: 0.8em;
  margin-top: 3px;
`;

const $ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.7em;
  cursor: pointer;
  margin-top: 1.5em;
`;
