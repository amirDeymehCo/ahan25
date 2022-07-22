import styled from 'styled-components';
import { primary, neutral, secondary } from '../../../styles/global/color';
import Image from 'next/image';
import BackgroundImage from '../../../assets/Blogposts/background2.svg';
import UserLogo from '../../../assets/Blogposts/user.jpg';
import { fontsTheme } from '../../../styles/global/typography';
import LikeLogo from '../../../assets/like.svg';
import ViewLogo from '../../../assets/view.svg';
import CommentLogo from '../../../assets/comment.svg';
import {useState, useEffect, Fragment} from "react";
import { Get } from '../../../utils/axiosHelper/AxiosHelper';
import test from '../../../assets/Blogposts/test.svg';
import PostsServices from "../../../Services/Posts/Posts";

const Post = () => {
  const [posts , setPosts]  = useState([]);

  useEffect( () =>{
    PostsServices.getListPosts((res) => {
      if (res.code === 200) {
        setPosts(res.result);
      }
    });
  },[]);
  return (
      <Fragment>
      {posts.map(post => {
        return(
            <$Wrapper key={post.id}>
            <$ImageBox>
              {/* <$Image /> */}
              <$UserProfile>
                <$Profile>
                  {/*<$UserName>امیر یزدی</$UserName>*/}
                  <$UserName>{post.fa.name}</$UserName>
                  <$UserLogo src={UserLogo} alt="" />
                </$Profile>
                <$History>12 بهمن 1400</$History>
              </$UserProfile>
            </$ImageBox>

        <$Details>
          {/*<$DetailTitle>تیر آهن بال پهن سنگین</$DetailTitle>*/}
          <$DetailTitle>{post.fa.content}</$DetailTitle>
          <$DetailDescription>
            <p>{post.fa.description}</p>
            {/*<p>*/}
            {/*  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با*/}
            {/*  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی*/}
            {/*  نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است*/}
            {/*</p>*/}
            <button>ادامه مطلب</button>
          </$DetailDescription>
          {/*<$Hashtag>کلاف</$Hashtag>*/}
          <$Hashtag>{post.fa.tags}</$Hashtag>
        </$Details>

        <$Divider />

        <$Footer>
          <$FooterItem>
            <$Number>109 نظر</$Number>
            <$CommentLogo />
          </$FooterItem>
          <$FooterItem>
            <$Number>109 بازدید کننده</$Number>
            <$ViewLogo />
          </$FooterItem>
          <$FooterItem>
            <$Number>لایک 109</$Number>
            <$LikeLogo />
          </$FooterItem>
        </$Footer>
            </$Wrapper>
        )
      })}
      </Fragment>

  );
};
export default Post;

const $Number = styled.span`
  font-family: ${fontsTheme.primaryBold};
  font-style: normal;
  font-weight: 400;
  font-size: 0.8em;
  line-height: 1.1em;
  text-align: right;
  color: ${neutral[100]};
  padding-right: 0.5em;
`;
const $CommentLogo = styled(CommentLogo)`
  width: 1.2em;
  height: 1.4em;
  fill: ${secondary[200]};
`;
const $ViewLogo = styled(ViewLogo)`
  width: 1.2em;
  height: 1.4em;
  fill: ${secondary[200]};
`;
const $LikeLogo = styled(LikeLogo)`
  width: 1.2em;
  height: 1.4em;
  fill: ${secondary[200]};
`;
const $FooterItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const $Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.3em;
`;
const $Divider = styled.div`
  background: ${(p) => p.theme.primaryColorGradientLight};
  width: 100%;
  height: .102em;
  margin-top: 1.3em;
`;
// ----------------------------
const $Hashtag = styled.span`
  width: 3.109em;
  height: 1.331em;
  background: ${primary[300]};
  border-radius: 0.3em;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  font-family: ${fontsTheme.primaryBold};
  font-style: normal;
  font-weight: 700;
  font-size: 0.6em;
  line-height: 0.8em;
  text-align: right;
  color: ${neutral[100]};
  padding: 0.3em 0.5em;
  margin: 2em 0;
`;
const $DetailDescription = styled.p`
  display: flex;
  flex-direction: row-reverse;
  p {
    font-family: ${fontsTheme.primaryBold};
    font-style: normal;
    font-weight: 300;
    font-size: 1em;
    line-height: 1.4em;
    text-align: right;
    text-transform: uppercase;
    color: ${neutral[300]};
    margin-bottom: 1.5em;
    text-align: right;
    direction: rtl;

    display: inline;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-wrap: break-word; /* Important for long words! */
  }
  button {
    border: none;
    background: transparent;
    white-space: nowrap;
    color: ${secondary[100]};
    outline: none;
    cursor: pointer;
  }
`;
const $DetailTitle = styled.h3`
  font-family: ${fontsTheme.primaryBold};
  font-style: normal;
  font-weight: 700;
  font-size: 1.4em;
  line-height: 2em;
  text-align: right;
  color: ${neutral[100]};
  padding: 1.4em 0 0.6em;
`;
const $Details = styled.div``;
// -------------------------
const $UserName = styled.span`
  font-family: ${fontsTheme.primaryBold};
  font-style: normal;
  font-weight: 800;
  font-size: 1em;
  line-height: 1.4em;
  text-align: center;
  text-transform: uppercase;
  color: ${neutral[100]};
  padding-right: 0.5em;
`;
const $UserLogo = styled(Image)`
  width: 2.4em;
  height: 2.4em;
  border-radius: 5.5em;
`;
const $UserProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  padding: 0 1em 1em;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  cursor: pointer;
`;
const $Profile = styled.div`
  display: flex;
  align-items: center;
`;
const $History = styled.div`
  font-family: ${fontsTheme.secondaryTitle};
  font-style: normal;
  font-weight: 400;
  font-size: 0.8em;
  line-height: 1.1em;
  text-align: right;
  text-transform: uppercase;
  color: ${neutral[100]};
  text-align: right;
  cursor: pointer;
`;

const $Image = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const $ImageBox = styled.div`
  border-radius: 1.5em;
  z-index: 100;
  height: 13.2em;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  background: ${(p) => p.theme.overlay.blogImageOverlay},
    url(data:image/jpeg;base64,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);
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
`;

const $Wrapper = styled.div`
  margin: 0 auto;
  width: 37.2em;
  height: 32em;
  background: ${primary[300_25]};
  border: 0.05em solid ${neutral[400_50]};
  box-sizing: border-box;
  box-shadow: ${(p) => p.theme.boxShadow};
  backdrop-filter: blur(4em);
  border-radius: 1.5em;
  padding: 1.8em 2.4em 0;
  text-align: right;
  box-sizing: border-box;
`;
