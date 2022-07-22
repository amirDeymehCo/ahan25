import styled from "styled-components";
import PageModalWrapper from "../../common/page-modal-wrapper";
import {
  device,
  neutral,
  success,
  fontsTheme,
  typeScale,
} from "../../../styles/global";
import LikeIcon from "../../../assets/facebook-like.svg";
import AddShopingCartIcon from "../../../assets/add-shoping-cart.svg";
import darkTheme from "../../../styles/themes/dark-theme";
import Link from "next/link";
import Filter from "../../home/Products/singleProduct/filter";
import ImageSlider from "../../home/Products/singleProduct/image-slider";
import { Button, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import HelpIcon from "@mui/icons-material/Help";
import Counter from "../../common/counter";
import { useState } from "react";
import ProductDescription from "../../home/Products/singleProduct/description";
import Comments from "../../home/comments/comments";
import NewComment from "../../home/comments/new-comment";
import ProductsList from "../../home/ProductsList/ProdcutsList";

export default function SingleProduct({ isPage }) {
  const [count, setCount] = useState(1);

  const filters = [
    {
      label: "کارخانه",
      options: [
        { _id: 11, value: "فولاد مبارکه" },
        { _id: 22, value: " مبارکه" },
        { _id: 33, value: "فولاد " },
      ],
    },
    {
      label: "کارخانه",
      options: [
        { _id: 11, value: "فولاد مبارکه" },
        { _id: 22, value: " مبارکه" },
        { _id: 33, value: "فولاد " },
      ],
    },
    {
      label: "کارخانه",
      options: [
        { _id: 11, value: "فولاد مبارکه" },
        { _id: 22, value: " مبارکه" },
        { _id: 33, value: "فولاد " },
      ],
    },
  ];
  const images = [
    {
      src: "https://149351115.v2.pressablecdn.com/wp-content/uploads/2022/03/280322-Stack-Overflow-Best-practices-to-increase-the-speed-for-next.js.jpg",
    },
    {
      src: "https://static2.srcdn.com/wordpress/wp-content/uploads/2021/02/Rick-Astley-Never-Gonna-Give-You-Up-Remastered-Header.jpg",
    },
    {
      src: "https://149351115.v2.pressablecdn.com/wp-content/uploads/2022/03/280322-Stack-Overflow-Best-practices-to-increase-the-speed-for-next.js.jpg",
    },
  ];
  const productSlider = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  const comments = [
    {
      _id: 1,
      name: "موسوی",
      avatar:
        "https://149351115.v2.pressablecdn.com/wp-content/uploads/2022/03/280322-Stack-Overflow-Best-practices-to-increase-the-speed-for-next.js.jpg",
      rate: 3.5,
      date: "12 بهمن، 1400",
      message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      _id: 2,
      name: "موسوی",
      avatar:
        "https://149351115.v2.pressablecdn.com/wp-content/uploads/2022/03/280322-Stack-Overflow-Best-practices-to-increase-the-speed-for-next.js.jpg",
      rate: 3.5,
      date: "12 بهمن، 1400",
      message:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      _id: 3,
      name: "موسوی",
      avatar:
        "https://149351115.v2.pressablecdn.com/wp-content/uploads/2022/03/280322-Stack-Overflow-Best-practices-to-increase-the-speed-for-next.js.jpg",
      rate: 3.5,
      date: "12 بهمن، 1400",
      message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      _id: 4,
      name: "موسوی",
      avatar:
        "https://149351115.v2.pressablecdn.com/wp-content/uploads/2022/03/280322-Stack-Overflow-Best-practices-to-increase-the-speed-for-next.js.jpg",
      rate: 3.5,
      date: "12 بهمن، 1400",
      message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      _id: 5,
      name: "موسوی",
      avatar:
        "https://149351115.v2.pressablecdn.com/wp-content/uploads/2022/03/280322-Stack-Overflow-Best-practices-to-increase-the-speed-for-next.js.jpg",
      rate: 3.5,
      date: "12 بهمن، 1400",
      message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      _id: 6,
      name: "موسوی",
      avatar:
        "https://149351115.v2.pressablecdn.com/wp-content/uploads/2022/03/280322-Stack-Overflow-Best-practices-to-increase-the-speed-for-next.js.jpg",
      rate: 3.5,
      date: "12 بهمن، 1400",
      message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      _id: 7,
      name: "موسوی",
      avatar:
        "https://149351115.v2.pressablecdn.com/wp-content/uploads/2022/03/280322-Stack-Overflow-Best-practices-to-increase-the-speed-for-next.js.jpg",
      rate: 3.5,
      date: "12 بهمن، 1400",
      message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
  ];

  async function handleNewComment(e) {
    e.preventDefault();
  }

  return (
    <PageModalWrapper name="single-product" isPage={isPage}>
      <$Hero>
        <$HeroRight>
          <$TitleWrapper>
            <$Model>(IPB) HEB ASTM</$Model>
            <$Title>تیر آهن بال پهن سنگین</$Title>
            <div>
              <Link href="" passHref>
                <$Badge>کلاف</$Badge>
              </Link>
              <Link href="" passHref>
                <$Badge>کلاف</$Badge>
              </Link>
            </div>
            <$LikeIconWrapper>
              <LikeIcon />
            </$LikeIconWrapper>
          </$TitleWrapper>
          <Filter filters={filters} />
        </$HeroRight>
        <$HeroLeft>
          <ImageSlider images={images} />
          <$DetailWrapper>
            <$DetailRow>
              <$Label>امتیاز</$Label>
              <$Rating
                name="read-only"
                value={3.5}
                precision={0.5}
                readOnly
                max={5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <$RateNum>3.5</$RateNum>
              <Link href="#comments" passHref>
                <$DetailLink>(73 دیدگاه ثبت شده است)</$DetailLink>
              </Link>
            </$DetailRow>
            <$DetailRow>
              <$Label>قیمت</$Label>
              <$Price>160,000</$Price>
              <$PriceUnit>تومان</$PriceUnit>
              <$HelpIcon />
              <Link href="?modal=quide" passHref>
                <$DetailLink>راهنمای خرید</$DetailLink>
              </Link>
            </$DetailRow>
            <$DetailRow>
              <Counter value={count} onChange={setCount} />
              <$AddToCartBtn
                variant="contained"
                startIcon={<AddShopingCartIcon />}
              >
                افزودن به سبد استعلام
              </$AddToCartBtn>
            </$DetailRow>
          </$DetailWrapper>
        </$HeroLeft>
      </$Hero>
      <ProductDescription />
      <ProductsList
        title="محصولات مکمل"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
        data={productSlider}
      />
      <$CommentsWrapper>
        <div>
          <Comments comments={comments} />
        </div>
        <div>
          <NewComment onSubmit={handleNewComment} />
        </div>
      </$CommentsWrapper>
    </PageModalWrapper>
  );
}

// ====== styles =======
// -----HERO-----
const $Hero = styled.section`
  display: grid;
  grid-template-columns: ${(100 / 12) * 4}% ${(100 / 12) * 8}%;
  gap: 4rem;
  padding: 0 7rem;
  margin-bottom: 20vh;

  @media ${device.tablet} {
    padding: 0 4rem;
    grid-template-columns: 1;
  }

  @media ${device.mobileM} {
    padding: 0 2rem;
    grid-template-columns: 100%;
  }
`;

const $HeroRight = styled.div``;

const $HeroLeft = styled.div``;

// title section - top right
const $TitleWrapper = styled.div`
  position: relative;

  &::after {
    content: "";
    display: block;
    margin-top: 1.5rem;
    width: 100%;
    height: 0.1rem;
    background-image: ${darkTheme.primaryColorGradientLight};
    box-shadow: ${darkTheme.primaryShadow};
  }
`;

const $Model = styled.h2`
  font-family: ${fontsTheme.primaryLight};
  font-weight: 400;
  font-size: ${typeScale.header3};
  text-align: right;
  direction: ltr;

  color: ${neutral[300]};
`;

const $Title = styled.h1`
  margin-bottom: 5.5rem;
  padding-inline-end: 6rem;
  font-family: ${fontsTheme.primaryBold};
  font-weight: 800;
  font-size: ${typeScale.header2};
  line-height: 1.6em;
  text-align: start;

  color: ${neutral[100]};
`;

const $Badge = styled.a`
  display: inline-block;
  padding: 0.2rem 1rem;
  margin-inline-end: 0.4rem;
  margin-bottom: 0.4rem;
  font-size: ${typeScale.paragraph};
  color: ${neutral[100]};
  background-image: ${darkTheme.primaryColorGradientLight};
  border-radius: 0.3rem;
`;

const $LikeIconWrapper = styled.div`
  position: absolute;
  top: 1.1rem;
  left: 0;
  cursor: pointer;
`;

// Detail Wrapper - under image

const $DetailWrapper = styled.div`
  margin-top: 2.7rem;
  padding-inline-start: 2rem;
`;

const $DetailRow = styled.div`
  margin-bottom: 2.7rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const $Label = styled.span`
  font-family: ${fontsTheme.primary};
  font-size: ${typeScale.header2};
  font-weight: 400;
  color: ${neutral[200]};

  &::after {
    content: ":";
    margin-inline: 1rem 2rem;
  }
`;

const $Rating = styled(Rating)`
  &&& {
    font-size: 3rem;
    direction: ltr;
  }
`;

const $RateNum = styled.span`
  font-family: ${fontsTheme.secondaryTitle};
  font-size: ${typeScale.header1};
  color: ${neutral[100]};
`;

const $DetailLink = styled.a`
  margin-inline-start: 1.5rem;
  font-family: ${fontsTheme.primaryLight};
  font-weight: 300;
  font-size: ${typeScale.header2};

  text-decoration-line: underline;
  color: ${neutral[300]};
`;

const $Price = styled.span`
  font-family: ${fontsTheme.secondaryTitle};
  font-size: ${typeScale.header1};
  color: ${neutral[100]};
`;

const $PriceUnit = styled.span`
  font-family: ${fontsTheme.primaryLight};
  font-size: ${typeScale.header3};
  font-weight: 400;
  color: ${neutral[300]};
  margin-inline: 0rem 3rem;
`;

const $HelpIcon = styled(HelpIcon)`
  &&& {
    font-size: ${typeScale.header1};
    color: #fff;
    margin-inline-end: -1rem;
  }
`;

const $AddToCartBtn = styled(Button)`
  &&& {
    gap: 2.7rem;
    padding: 1.3rem 2.3rem 1.3rem 3rem;
    margin-inline-start: 7rem;
    background: ${success[100]};

    font-family: ${fontsTheme.primaryBold};
    font-weight: 700;
    font-size: ${typeScale.header2};

    box-shadow: ${darkTheme.shadow.darkShadow};
    backdrop-filter: blur(1rem);

    border-radius: 1rem;

    @media ${device.tablet} {
      margin-inline-start: 2rem;
    }

    @media ${device.mobileL} {
      margin-inline-start: 0;
      width: 90%;
    }

    @media ${device.mobileM} {
      width: 100%;
    }
  }
`;

// Comments
const $CommentsWrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  gap: 3.7rem;
  margin-top: 10rem;
  padding: 0 7rem;
  margin-bottom: 20vh;

  @media ${device.tablet} {
    padding: 0 4rem;
    grid-template-columns: 1;
  }

  @media ${device.mobileM} {
    padding: 0 2rem;
    grid-template-columns: 100%;
  }
`;
