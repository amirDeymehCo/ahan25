import styled from 'styled-components';
import { SalesExpert } from './Sales-expert';
import UseSlider from '../../../hooks/useSlider';
import { Accordion } from './Accordion';
import { device, fontsTheme } from '../../../styles/global';
import { secondary, neutral } from '../../../styles/global/color';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FrequentlyAskedQuestion = () => {
  return (
    <$Wrapper>
      <$Grid>
        <$GridItemLeft>
          <Accordion />
        </$GridItemLeft>
        <$GridItemRight>
          <Swiper
            spaceBetween={0}
            // centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={false}
            navigation={true}
            //

            paginationWidth={10}
            centeredSlidesDesk={true}
            // slidesPerView={6}

            loop
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              0: {
                // Mobile M
                slidesPerView: 1,
                centeredSlides: true,
              },
              370: {
                // Mobile L
                slidesPerView: 1,
                centeredSlides: true,
              },
              570: {
                // Tablet
                slidesPerView: 2,
                centeredSlides: false,
              },
              760: {
                // LapTop
                slidesPerView: 2,
                centeredSlides: false,
              },
              1280: {
                // Desktop
                slidesPerView: 2,
                centeredSlides: false,
              },
            }}
          >
            {['a', 'b', 'c', 'd', 'e', 'f'].map((item) => (
              <SwiperSlide key={item.id}>
                <SalesExpert />
              </SwiperSlide>
            ))}
          </Swiper>
          <$CartFooter>
            <Link href="/" passHref>
              <$Button>مشاهده کارشناسان فروش</$Button>
            </Link>
          </$CartFooter>
        </$GridItemRight>
      </$Grid>
    </$Wrapper>
  );
};

export default FrequentlyAskedQuestion;

const $Wrapper = styled.section`
  color: #fff;
  margin-top: 5.6em;

  .swiper {
    width: 47vw;

    @media ${device.mobileM} {
      width: 90vw !important;
    }

    @media ${device.mobileL} {
      width: 80vw;
    }
  }

  /* .swiper-button-next {
    right: -1px;
  } */

  /* .swiper-button-next {
    padding-right: 1em;
  }
  .swiper-button-prev {
    padding-left: 1em;
  } */
  .swiper-button-next,
  .swiper-button-prev {
    color: ${neutral[100]};
  }
  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after,
  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    font-size: 25px;
    font-weight: 900;
  }
`;

const $Grid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media ${device.mobileL} {
    flex-direction: column-reverse;
    gap: 4em;
  }
`;

const $GridItemLeft = styled.div`
  flex: 1;
  /* background: #ff000012; */
  display: flex;
  justify-content: center;

  @media ${device.mobileL} {
    width: 100%;
  }
`;
const $GridItemRight = styled.div`
  margin: 0 auto;
  /* background: #91918815; */
`;
const $Button = styled.button`
  border: 0.2em solid ${secondary[200]};
  box-sizing: border-box;
  border-radius: 0.5em;
  background: transparent;
  font-family: ${fontsTheme.primaryBold};
  font-style: normal;
  font-weight: 700;
  font-size: 1.4em;
  text-align: center;
  color: #fffcf2;
  padding: 2em 0;
  margin-top: 2em;
  cursor: pointer;
  width: 90%;
  height: 5em;
  @media ${device.mobileM} {
    width: 100%;
  }
`;
const $CartFooter = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.mobileM} {
    width: 23em;
    margin: 0 auto;
  }
`;

{
  /* <$Wrapper>
      <$GridItemLeft>
        <Accordion />
      </$GridItemLeft>
      <$GridItemRight>
        <UseSlider
          centeredSlides={true}
          centeredSlidesDesk={false}
          delay={3500}
          navigation={true}
          pagination={false}
          paginationWidth={10}
          width_30={50}
          width_70={70}
          width_100={100}
          overflow="hidden"
          mobileM={1}
          mobileL={1}
          tablet={1}
          laptop={1}
          desktop={2}
        >
          {['a', 'b', 'c', 'd', 'e', 'f'].map((item) => (
            <SwiperSlide key={item.id}>
              <SalesExpert />
            </SwiperSlide>
          ))}
        </UseSlider>
        <$CartFooter>
          <Link href="/" passHref>
            <$Button>مشاهده کارشناسان فروش</$Button>
          </Link>
        </$CartFooter>
      </$GridItemRight>
    </$Wrapper> */
}
