import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import ProductCart from './ProductCart';
import UseSlider from '../../../hooks/useSlider';
import UseTitle from '../../../hooks/useTitle';

/**
 * @param {string} title
 * @param {string} description
 * @param {Array} data - [{id, }]
 * @returns product slider
 */
const ProductsList = ({ title, description, data }) => {
  return (
    <div>
      <Container>
        <UseTitle heading={title} paragraph={description} />
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
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCart />
            </SwiperSlide>
          ))}
        </UseSlider>
      </Container>
    </div>
  );
};

export default ProductsList;

const Container = styled.div`
  margin-top: 13.2em;
`;
