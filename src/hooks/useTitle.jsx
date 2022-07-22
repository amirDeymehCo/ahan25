import styled from 'styled-components';
import { device } from '../styles/global';
import { neutral } from '../styles/global/color';
import { typeScale } from '../styles/global/typography';
import { fontsTheme } from '../styles/global/typography';

const { header1 } = typeScale;
const { primaryBold } = fontsTheme;

const UseTitle = ({ heading, paragraph }) => {
  return (
    <Title >
      <Heading>{heading}</Heading>
      <Paragraph> {paragraph}</Paragraph>
    </Title>
  );
};
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6.2em; 
  
`;

const Heading = styled.h2`
  color: ${neutral[100]};
  font-size: ${header1};
  font-family: ${primaryBold};
`;

const Paragraph = styled.p`
  color: ${neutral[300]};
  margin-top: 1.5em;
`;

export default UseTitle;
