import styled from 'styled-components';
import {
  fontsTheme,
  neutral,
  primary,
  secondary,
} from '../../../styles/global';
import HeadingImg from '../../../assets/CostumersFeedback/logo2.svg';
import CommentLogo from '../../../assets/CostumersFeedback/logo1.svg';

export const Comment = () => {
  return (
    <$Wrapper>
      <$CommentLogoBox>
        <$CommentLogo />
      </$CommentLogoBox>
      <$Box>
        <$Title>
          <$Image />
          <$Heading>فولاد مبارکه</$Heading>
        </$Title>
        <$Description>
          <span>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.ابهای زیادی در
            شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
            طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            رایانه ای علی
          </span>
        </$Description>
        <$User>
          <$UserName>امیر یزدی</$UserName>
          <$UserDesc>لورم ایپسوم متن ساختگی با تولید </$UserDesc>
        </$User>
      </$Box>
    </$Wrapper>
  );
};

const $CommentLogo = styled(CommentLogo)`
  width: 8em;
  height: 7em;
`;

const $CommentLogoBox = styled.div`
  position: absolute;
  top: -0.6em;
  left: 0;
  z-index: 1000;
`;

const $UserDesc = styled.span`
  font-family: ${fontsTheme.primaryBold};
  font-style: normal;
  font-weight: 400;
  font-size: 0.8em;
  line-height: 1.1em;
  text-align: center;
  text-transform: uppercase;
  color: ${neutral[300]};
`;

const $UserName = styled.h4`
  font-family: ${fontsTheme.primaryBold};
  font-style: normal;
  font-weight: 800;
  font-size: 1.4em;
  line-height: 2em;
  text-transform: uppercase;
  color: ${neutral[100]};
`;

const $User = styled.div`
  margin-top: 2em;
`;

const $Description = styled.div`
  span {
    font-family: ${fontsTheme.primaryBold};
    font-style: normal;
    font-weight: 300;
    font-size: 1.4em;
    line-height: 165%;
    text-align: right;
    text-transform: uppercase;
    color: ${neutral[300]};
    margin-top: 3em;
  }
`;

const $Heading = styled.h4`
  font-family: ${fontsTheme.secondaryTitle};
  font-style: normal;
  font-weight: 700;
  font-size: 1.8em;
  line-height: 1.8em;
  text-align: center;
  color: ${neutral[100]};
`;

const $Image = styled(HeadingImg)`
  width: 5.6em;
  height: 5.6em;
  margin-left: 0.5em;
`;

const $Title = styled.div`
  display: flex;
  align-items: center;
`;

const $Box = styled.div`
  background: ${primary[300_25]};
  border: 0.05em solid ${neutral[400_50]};
  box-sizing: border-box;
  box-shadow: ${(p) => p.theme.shadow.boxShadow};
  backdrop-filter: blur(4em);
  border-radius: 1.5em;
  display: inline-block;
  width: 100%;
  height: 100%;
  direction: rtl;
  text-align: right;
  padding: 5em 2.9em 3em 4.5em;
  border-left: 0.4em solid ${secondary[200]};
  /* overflow-y: scroll;

  &::-webkit-scrollbar-track {
    background: ${(p) => p.theme.primaryColorGradientLight};
    border-radius: 2.0em;
  }

  &::-webkit-scrollbar {
    width: .4em;
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2.0em;
    background-color: ${secondary[200]};
    background-clip: content-box;
  } */
`;

const $Wrapper = styled.div`
  position: relative;
  width: 37.2em;
  height: 43.4em;
  display: inline-block;
  margin-bottom: 3em;
  display: flex;
  margin: 0 auto;
`;
