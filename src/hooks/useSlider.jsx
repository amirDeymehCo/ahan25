import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import styled from 'styled-components';
import { secondary, neutral } from '../styles/global/color';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import { device } from '../styles/global';

const UseSlider = ({
  children,
  centeredSlides,
  centeredSlidesDesk,
  delay,
  navigation,
  pagination,
  paginationWidth,
  width_30 = '100%',
  width_70 = '100%',
  width_100 = '100%',
  overflow = 'initial',
  mobileM,
  mobileL,
  tablet,
  laptop,
  desktop,
}) => {
  return (
    <Swiperr
      width_30={width_30}
      width_70={width_70}
      width_100={width_100}
      overflow={overflow}
      paginationWidth={paginationWidth}
      centeredSlidesDesk={true}
      // slidesPerView={6}
      centeredSlides={centeredSlides}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      loop
      pagination={pagination}
      // pagination={true}
      navigation={navigation}
      modules={[Autoplay, Pagination, Navigation]}
      breakpoints={{
        0: {
          // Mobile M
          slidesPerView: mobileM,
        },
        370: {
          // Mobile L
          slidesPerView: mobileL,
        },
        570: {
          // Tablet
          slidesPerView: tablet,
        },
        760: {
          // LapTop
          slidesPerView: laptop,
        },
        1280: {
          // Desktop
          slidesPerView: desktop,
          centeredSlides: centeredSlidesDesk
        },
      }}
    >
      {children}
    </Swiperr>
  );
};
export default UseSlider;

const Swiperr = styled(Swiper)`
  /* display: inline-block; */
  width: ${(p) => p.width_30}vw;
  /* overflow: ${(p) => p.overflow};
  height: auto;
  overflow-X: hidden; */
  /* overflow-Y: initial; */

  padding-bottom: 5em;

  @media ${device.mobileL} {
    width: ${(p) => p.width_100}vw;
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    /* bottom: -45px; */
  }
  .swiper-pagination-bullet {
    background: ${(p) => p.theme.primaryColorGradientLight};
    width: ${(p) => p.paginationWidth}px;
    height: ${(p) => p.paginationWidth}px;
  }
  .swiper-pagination-bullet-active {
    background: ${secondary[200]};
  }
  .swiper-container {
    width: 48em;
  }
  .swiper-button-next {
    padding-right: 1em;
  }
  .swiper-button-prev {
    padding-left: 1em;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: ${neutral[100]};
  }
  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after,
  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    font-size: 25px;
    font-weight: 9800px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    top: 35%;
  }
`;
