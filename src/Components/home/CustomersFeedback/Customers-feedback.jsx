import styled from 'styled-components';
import UseTitle from '../../../hooks/useTitle';
import { Comment } from './Comment';
import UseSlider from '../../../hooks/useSlider';
import { SwiperSlide } from 'swiper/react';

const CustomersFeedback = () => {
  return (
    <$Wrapper>
      <UseTitle
        heading="نظرات مشتریان ما"
        paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت"
      />
      <$Box>
        <UseSlider
          slidesPerView={3}
          centeredSlides={true}
          delay={350000}
          navigation={false}
          pagination={true}
          paginationWidth={10}
          mobileM={1}
          mobileL={1}
          tablet={1}
          laptop={2}
          desktop={3}
        >
          {['a', 'b', 'c', 'd','e','f'].map((item, index) => (
            <SwiperSlide key={index}>
              <Comment />
            </SwiperSlide>
          ))}
        </UseSlider>
      </$Box>
    </$Wrapper>
  );
};

export default CustomersFeedback;

const $Box = styled.div`
  display: flex;
  justify-content: center;
`;

const $Wrapper = styled.section`
  margin-top: 12.5em;
`;
