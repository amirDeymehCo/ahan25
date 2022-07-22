import UseTitle from '../../../hooks/useTitle';
import styled from 'styled-components';
import Post from './Post';
import UseSlider from '../../../hooks/useSlider';
import { SwiperSlide } from 'swiper/react';

const Blogposts = () => {
  return (
    <$Wrapper>
      <UseTitle
        heading="پست های بلاگ"
        paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
      />
      <$Main>
        <UseSlider
          centeredSlides={true}
          delay={3500}
          navigation={false}
          pagination={true}
          paginationWidth={10}
          mobileM={1}
          mobileL={1}
          tablet={1}
          laptop={2}
          desktop={3}
        >
          {['a', 'b', 'c', 'd'].map((item, index) => (
            <SwiperSlide key={index}>
              <Post />
            </SwiperSlide>
          ))}
        </UseSlider>
      </$Main>
    </$Wrapper>
  );
};

export default Blogposts;

const $Wrapper = styled.div`
  margin-top: 9em;
`;

const $Main = styled.div`
  margin-top: 6.7em;
`;
