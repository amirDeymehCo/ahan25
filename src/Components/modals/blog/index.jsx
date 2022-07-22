import styled from "styled-components";
import Image from "next/image";
import { primary, typeScale } from "../../../styles/global";
import PageModalWrapper from "./../../common/page-modal-wrapper";
import { neutral } from "./../../../styles/global/color";
import { fontsTheme } from "./../../../styles/global/typography";
import { device } from "./../../../styles/global/size";
import SearchField from "./../../common/search-field";
import darkTheme from "../../../styles/themes/dark-theme";
import NPIronImage from "./../../../assets/Blogposts/newest.jpg";
import PostImage from "./../../../assets/Blogposts/metal-cutting.jpg";
import { useState } from "react";
import { useEffect } from "react";
import PostsServices from "../../../Services/Posts/Posts";
import Post from "../../home/Blogposts/Post";

export default function Blog({ isPage }) {
  const [categories, setCategories] = useState([]);
  const [newestPosts, setNewestPosts] = useState([]);
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    setBadges([
      { _id: 1, title: "آهن" },
      { _id: 2, title: "آهن" },
      { _id: 3, title: "آهن" },
      { _id: 4, title: "آهن آهن آهن" },
      { _id: 1, title: "آهن" },
      { _id: 2, title: "آهنآهن" },
      { _id: 3, title: "آهن" },
      { _id: 4, title: "آهن" },
    ]);
    setCategories([
      { _id: 1, title: "آهن آلات", count: 55 },
      { _id: 2, title: "آهن آلات", count: 55 },
      { _id: 3, title: "آهن آلات", count: 55 },
      { _id: 4, title: "آهن آلات", count: 55 },
    ]);
    setNewestPosts([
      {
        _id: 1,
        title: "تیراهن بال پهن سنگین",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده",
        date: "12 بهمن، 1401",
      },
      {
        _id: 2,
        title: "تیراهن بال پهن سنگین",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده",
        date: "12 بهمن، 1401",
      },
      {
        _id: 3,
        title: "تیراهن بال پهن سنگین",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده",
        date: "12 بهمن، 1401",
      },
    ]);
  }, []);

  return (
    <PageModalWrapper name="blog" isPage={isPage}>
      <$WidgetTitle center>به وبلاگ ما خوش آمدید</$WidgetTitle>
      <$WidgetSubTitle center>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و  </$WidgetSubTitle>
      <$Wrapper>
        <$Sidebar>
          <$Widget>
            <$WidgetTitle>جستجو</$WidgetTitle>
            <SearchField />
          </$Widget>
          <$Widget>
            <$WidgetTitle>دسته بندی ها</$WidgetTitle>
            <$Categories>
              {categories.map((item) => (
                <$Category key={item._id}>
                  <$Text>{item.title}</$Text> (<$Num>{item.count}</$Num>)
                </$Category>
              ))}
            </$Categories>
          </$Widget>
          <$Widget>
            <$WidgetTitle>پست های جدید</$WidgetTitle>
            <$NPList>
              {newestPosts.map((item) => (
                <$NewestPost key={item._id}>
                  <$NPImageWrapper>
                    <$NPImage src={NPIronImage} layout="fill" />
                    <$ImageOverlay />
                  </$NPImageWrapper>
                  <$NPContent>
                    <$NPTitle>{item.title}</$NPTitle>
                    <$NPDescription>{item.desc}</$NPDescription>
                    <$NPDate>{item.date}</$NPDate>
                  </$NPContent>
                </$NewestPost>
              ))}
            </$NPList>
          </$Widget>
          <$Widget>
            <$WidgetTitle>تگ ها</$WidgetTitle>
            <$BadgeWrapper>
              {badges.map((badge) => (
                <$Badge key={badge._id}>{badge.title}</$Badge>
              ))}
            </$BadgeWrapper>
          </$Widget>
        </$Sidebar>
        <$Main>
          <$PosterWidget>
            <$Poster>
              <$PosterImageWrapper>
                <$PosterImage src={PostImage} layout="fill" />
                <$ImageOverlay />
                <$PosterContent>
                  <$PosterTitle> ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده لورم</$PosterTitle>
                  <$PosterDescription>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم چاپ و بااستفاده لورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگی نامفه</$PosterDescription>
                </$PosterContent>
              </$PosterImageWrapper>
            </$Poster>
          </$PosterWidget>
          <$posts>
            {['a', 'b', 'c', 'd'].map((item, index) => (
                <Post key={index}/>
            ))}
          </$posts>
        </$Main>
      </$Wrapper>
    </PageModalWrapper>
  );
}
// ====== styles =======
// Global
const $Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${8.333 * 4}% ${8.333 * 8}%;
  gap: 4rem;
  padding: 0 7rem;

  @media ${device.tablet} {
    padding: 0 4rem;
    grid-template-columns: ${8.333 * 4}% ${8.333 * 7.5}%;
  }

  @media ${device.mobileM} {
    padding: 0 2rem;
    grid-template-columns: 100%;
  }
`;

const $Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;

  section:nth-child(even) {
    background-color: ${primary[300_25]};
    box-shadow: ${darkTheme.shadow.primaryShadow};
  }
`;

const $Main = styled.main`

`;
const $PosterWidget = styled.section`
  width: 100%;
  //height: 30%;
  padding: 2.4rem 3.4rem;
  color: ${neutral[100]};
  border: 0.05rem solid rgba(189, 191, 193, 0.4);
  filter: ${`drop-shadow(0 0 5.5rem ${primary[300_25]})`};
  border-radius: 1.5rem;
  margin-bottom: 3rem;
`;
const $Poster = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const $PosterImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 23.813rem;
  overflow: hidden;
  border-radius: 1.5rem;

  @media ${device.mobileL} {
    width: 100%;
  }
`;
const $PosterImage = styled(Image)`
  opacity: 0.6;
  filter: drop-shadow(0 2rem 4rem rgba(35, 33, 33, 0.15));
  object-fit: cover;
`;
const $PosterContent = styled.div`
  position: absolute;
  top: 60%;
  text-align: right;
  padding:23px 25px;

  @media ${device.mobileL} {
    width: 100%;
  }
`;
const $PosterTitle = styled.h2`
  font-family: ${fontsTheme.secondaryTitle};
  font-size: ${typeScale.header2};
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 1rem;
`;
const $PosterDescription = styled.p`
  font-family: ${fontsTheme.primary};
  font-size: ${typeScale.helperText};
  font-weight: 400;
  line-height: 12.4px;
  height: 79px;
  overflow: hidden;
  color: ${neutral[200]};
  margin-bottom: 0.4rem;
`;
const $posts = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;
  row-gap: 3rem;
`;
const $Widget = styled.section`
  width: 100%;
  padding: 2.4rem 3.4rem;
  color: ${neutral[100]};
  border: 0.05rem solid rgba(189, 191, 193, 0.4);
  filter: ${`drop-shadow(0 0 5.5rem ${primary[300_25]})`};
  border-radius: 1.5rem;
`;

const $WidgetTitle = styled.h2`
  color: ${neutral[100]};
  font-family: ${fontsTheme.primaryBold};
  font-weight: 800;
  font-size: ${typeScale.header2};
  margin-bottom: 2.2rem;
  text-align: ${props => props.center ? 'center' : 'left'};
`;
const $WidgetSubTitle = styled.p`
  color: ${neutral[200]};
  font-family: ${fontsTheme.primary};
  font-weight: 300;
  font-size: ${typeScale.paragraph};
  margin-bottom: 2.2rem;
  text-align: ${props => props.center ? 'center' : 'left'};
  line-height: 21.7px;
`;

// Categories
const $Categories = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.4rem;
`;

const $Category = styled.li`
  font-family: ${fontsTheme.primary};
  font-weight: 400;
  font-size: ${typeScale.header3};
`;

const $Text = styled.span`
  padding: 0 0.7rem;
`;

const $Num = styled.span`
  font-family: ${fontsTheme.secondaryTitle};
  padding: 0 0.7rem;
`;

// Newest Posts
const $NPList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const $NewestPost = styled.li`
  display: flex;
  padding: 1.2rem 1.7rem;
  gap: 2rem;

  background: ${primary[300_25]};

  border: 0.05rem solid ${neutral[400_30]};

  box-shadow: ${darkTheme.shadow.primaryShadow};
  border-radius: 1.5rem;

  @media ${device.mobileL} {
    flex-direction: column;
  gap: 1.5rem;
  }

  @media ${device.mobileM} {
    flex-direction: row;
  gap: 2rem;
  }
`;

const $NPImageWrapper = styled.div`
  position: relative;
  width: 11rem;
  height: 8.5rem;
  overflow: hidden;
  border-radius: 1.5rem;

  @media ${device.mobileL} {
  width: 100%;
  }
`;

const $NPImage = styled(Image)`
  opacity: 0.6;
  filter: drop-shadow(0 2rem 4rem rgba(35, 33, 33, 0.15));
  object-fit: cover;
`;

const $NPContent = styled.div`
  width: calc(100% - 11rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media ${device.mobileL} {
  width: 100%;
  }
`;

const $NPTitle = styled.h2`
  font-family: ${fontsTheme.primaryBold};
  font-size: ${typeScale.header4};
  margin-bottom: 0.4rem;
`;

const $NPDescription = styled.p`
  font-family: ${fontsTheme.primaryLight};
  font-size: ${typeScale.paragraph};
  font-weight: 300;
  line-height: 1.6em;
  height: 3.5rem;
  overflow: hidden;
  color: ${neutral[300]};
  margin-bottom: 0.4rem;
`;

const $NPDate = styled.time``;

const $ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    280.17deg,
    rgba(62, 81, 117, 0.3) -52.57%,
    rgba(84, 94, 146, 0.09) 185.77%
  );
  border-radius: 15px;
`;

// Tags
const $BadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const $Badge = styled.div`
padding: .7rem 1.4rem;
background: ${primary[300]};
border-radius: .3rem;
`;