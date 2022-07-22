import styled from 'styled-components';
import { device, fontsTheme, neutral } from '../../../styles/global';
import ArrowImg from '../../../assets/arrow2-left.svg';
import Link from 'next/link';

import LocationImg from '../../../assets/location.svg';
import EmailImg from '../../../assets/email.svg';
import PhoneImg from '../../../assets/phone.svg';
import WhatsappImg from '../../../assets/whatsapp.svg';
import YoutubeImg from '../../../assets/youtube.svg';
import TwitterImg from '../../../assets/twitter.svg';
import ArrowTopImg from '../../../assets/arrow-top.svg';
import { useEffect } from 'react';

export default function Footer() {
  const news_blog = [
    {
      id: 1,
      title: 'قیمت میلگرد',
      date: '12 بهمن ، 1400',
    },
    {
      id: 2,
      title: 'قیمت میلگرد',
      date: '12 بهمن ، 1400',
    },
    {
      id: 3,
      title: 'تیرآهن بال پهن سنگین',
      date: '12 بهمن ، 1400',
    },
    {
      id: 4,
      title: 'قیمت میلگرد',
      date: '12 بهمن ، 1400',
    },
  ];
  const Quick_Access = [
    {
      id: 1,
      title: 'قیمت میلگرد',
    },
    {
      id: 2,
      title: 'قیمت میلگرد',
    },
    {
      id: 3,
      title: 'قیمت میلگرد',
    },
    {
      id: 4,
      title: 'قیمت میلگرد',
    },
    {
      id: 4,
      title: 'قیمت میلگرد',
    },
  ];

  const gotopHandler = () => { 
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      }); 
  };

  return (
    <$Wrapper>
      <$Box>
        <$AboutUs>
          <$AboutUsContent>
            <$Title1>در باره ما</$Title1>
            <$Desc1>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد{' '}
            </$Desc1>
          </$AboutUsContent>
        </$AboutUs>
        <$LinksBox>
          <$NewBlogs>
            <$Title1>تازه ها در بلاگ</$Title1>
            <$List>
              {news_blog.map((item) => (
                <Link href="/" passHref key={item.id}>
                  <>
                    <$ListItem>
                      <$Logo></$Logo>
                      <$Topic>
                        <$Title2>{item.title} </$Title2>
                        <$Desc2> {item.date} </$Desc2>
                      </$Topic>
                    </$ListItem>
                    <$Divider />
                  </>
                </Link>
              ))}
            </$List>
          </$NewBlogs>
          <$QuickAccess>
            <$QuickAccessContent>
              <$Title1>تازه ها در بلاگ</$Title1>
              <$List>
                {Quick_Access.map((item) => (
                  <>
                    <$QuickAccessitem key={item.id}>
                      <Link href="/" passHref>
                        <$ListItem>
                          <$Logo></$Logo>
                          <$Topic>
                            <$Title2>{item.title} </$Title2>
                          </$Topic>
                        </$ListItem>
                      </Link>
                    </$QuickAccessitem>
                  </>
                ))}
              </$List>
            </$QuickAccessContent>
          </$QuickAccess>
        </$LinksBox>
        <$Conection>
          <$ConectionContent>
            <$Title1>راه های ارتباطی</$Title1>
            <$ConctionList>
              <Link href="/" passHref>
                <$ConctionListItem>
                  <$LocationLogo />
                  <$ConectionItemPath>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  </$ConectionItemPath>
                </$ConctionListItem>
              </Link>

              <Link href="/" passHref>
                <$ConctionListItem>
                  <$EmailLogo />
                  <$ConectionItemPath>admin@example.com</$ConectionItemPath>
                </$ConctionListItem>
              </Link>

              <Link href="/" passHref>
                <$ConctionListItem>
                  <$PhoneLogo />
                  <$PhoneText>(808) 555-0111</$PhoneText>
                </$ConctionListItem>
              </Link>
            </$ConctionList>
            <$SocialMedias>
              <Link href="/" passHref>
                <$SocialMedia1 />
              </Link>
              <Link href="/ " passHref>
                <$SocialMedia2 />
              </Link>
              <Link href="/ " passHref>
                <$SocialMedia3 />
              </Link>
            </$SocialMedias>
          </$ConectionContent>
        </$Conection>
      </$Box>
      <$CopyRight>
        <p>copyright &#169; 2021 all rights reserved.</p>
        <$GoTopButton onClick={gotopHandler}>
          <$ArrowTop />
        </$GoTopButton>
      </$CopyRight>
    </$Wrapper>
  );
}

const $ArrowTop = styled(ArrowTopImg)`
  width: 1.6em;
  height: 1em;
`;

const $GoTopButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 1.6em;
  top: 50%;
  cursor: pointer;
`;

const $CopyRight = styled.div`
  position: relative;
  background: #2d3651;
  box-shadow: 0 2em 4em rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(4em);

  p {
    font-family: ${fontsTheme.primaryLight};
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    padding: 1.5em 0;
  }
`;

const $SocialMedia1 = styled(WhatsappImg)`
  width: 2.6em;
  height: 2.6em;
`;
const $SocialMedia2 = styled(YoutubeImg)`
  width: 2.6em;
  height: 2.6em;
`;
const $SocialMedia3 = styled(TwitterImg)`
  width: 2.6em;
  height: 2.6em;
`;

const $SocialMedias = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1em;
  margin-top: 3em;
  cursor: pointer;
`;

const $ConectionItemPath = styled.p`
  font-family: ${fontsTheme.primaryLight};
  font-style: normal;
  font-weight: 300;
  font-size: 1.4em;
  text-align: right;
  line-height: 1.3em;
  text-transform: uppercase;
  color: #e6e7e8;
`;

const $LocationLogo = styled(LocationImg)`
  width: 2.3em;
  height: 2.1em;
`;
const $EmailLogo = styled(EmailImg)`
  width: 2em;
  height: 1.6em;
`;
const $PhoneLogo = styled(PhoneImg)`
  width: 1.8em;
  height: 1.8em;
`;

const $PhoneText = styled.span`
  font-family: ${fontsTheme.primaryLight};
  font-style: normal;
  font-weight: 500;
  font-size: 1.4em;
  line-height: 2em;
  text-align: right;
  text-transform: uppercase;
  color: #ffffff;
`;

const $ConctionListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-top: 3em;
  cursor: pointer;
`;

const $ConctionList = styled.div``;

const $ConectionContent = styled.div``;

const $Conection = styled.div`
  flex: 5;
`;

const $QuickAccessitem = styled.div`
  margin-top: 2.4em;
`;

const $QuickAccessContent = styled.div`
  .Footer__ListItem-sc-1r56c6u-9 {
    margin-top: 2.4em;
  }
`;

const $QuickAccess = styled.div`
  flex: 1;
  @media ${device.mobileL} {
    display: flex;
    justify-content: center;
  }
`;

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

const $Divider = styled.div`
  width: 60%;
  border: 0.5px solid rgba(204, 197, 185, 0.15);
  margin: 0.5em 0;
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

const $List = styled.div``;

const $NewBlogs = styled.div`
  flex: 1;
`;

const $LinksBox = styled.div`
  flex: 8;
  display: flex;
`;

const $Desc1 = styled.p`
  font-family: ${fontsTheme.primaryLight};
  font-style: normal;
  font-weight: 300;
  font-size: 1.4em;
  line-height: 2.4em;
  text-align: right;
  text-transform: uppercase;
  color: #e6e7e8;
`;

const $Title1 = styled.h3`
  font-family: ${fontsTheme.primaryLight};
  font-style: normal;
  font-weight: 800;
  font-size: 1.8em;
  line-height: 2.5em;
  text-align: right;
  color: #e6e7e8;
`;

const $AboutUsContent = styled.div`
  padding-left: 4em;
`;

const $AboutUs = styled.div`
  flex: 6;
`;

const $Box = styled.footer`
  display: flex;
  direction: rtl;
  padding: 7em 7em 4em;
  background: #454f70;
  flex-wrap: wrap;

  @media ${device.mobileL} {
    flex-direction: column;
    gap: 3em;
  }
`;

const $Wrapper = styled.section``;
