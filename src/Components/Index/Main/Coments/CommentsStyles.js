import styled from "styled-components";
export const HeaderCardComment = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  h3 {
    color: #ffffff;
  }
`;
export const SectionStyle = styled.section`
  padding: 50px 10px;
  margin-top: 70px;
  .mySwiper {
    padding: 50px 10px;
  }
  .swiper-pagination-bullet {
    background-color: #9fafef;
    width: 10px;
    height: 10px;
    margin: 0px 8px !important;
  }
  .swiper-pagination-bullet-active {
    background-color: #d16035;
  }
`;
export const BodyCardComment = styled.div`
  p {
    color: #cbcbcb;
    font-size: 14px;
    line-height: 20px;
    padding-left: 30px;
  }
`;
export const FooterCardComment = styled.div`
  padding-top: 30px;
  h4 {
    color: #ffffff;
    margin: 5px 0px;
  }
  p {
    color: #cbcbcb;
    font-size: 12px;
  }
`;
export const Card = styled.div`
  padding: 35px 20px;
  border: 1px solid #989898;
  border-radius: 20px;
  background-color: #3d4664;
  position: relative;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  &:hover {
    background-color: #2e354c;
  }
  .virgo {
    position: absolute;
    top: 0px;
    left: 0px;
    transform: translateY(-40%);
    -webkit-transform: translateY(-40%);
    -moz-transform: translateY(-40%);
    -ms-transform: translateY(-40%);
    -o-transform: translateY(-40%);
  }
`;


export const NoComments = styled.div`
width:100%;
text-align: center;
h2{
  color: #ffffff;
  font-size:24px;
  margin:20px 0px;
}
`