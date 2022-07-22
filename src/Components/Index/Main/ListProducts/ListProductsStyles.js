import styled from "styled-components";
export const CardStyle = styled.div`
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
  padding: 30px 20px 5px 20px;
  border: 1px solid #989898;
  background-color: #34436d5e;
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;

  &:hover {
    background-color: #2e354c;
  }
`;
export const BodyCard = styled.div`
  display: flex;
  justify-content: space-between;
  .spanTxt {
    color: #e97b53;
    text-decoration: none;
    padding-right: 0px;
    font-size: 1.2rem;
    cursor: pointer;
    margin: 5px 10px;
  }

  .sec-card {
    width: 50%;
  }
  .title-list {
    color: #ffffff;
    margin: 5px 0px;
    font-size: 17px;
  }
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    .sec-card {
      width: 100%;
    }
  }
`;
export const IconStyle = styled.div`
  padding: 15px;
  background-color: #55628c;
  width: 130px;
  height: 130px;
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 145px;
    height: 138px;
  }
  .number {
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    background-color: #e97b53;
    color: #ffff;
    font-size: 11px;
    padding: 3px;
    font-weight: 100;
  }
  @media (max-width: 420px) {
    width: 100%;
  }
`;
export const DivNameCard = styled.div`
  .id-product {
    color: #989898;
    margin: 15px 0px;
    font-size: 11px;
  }
  .name-product {
    color: #ffffff;
    margin: 8px 0px;
    font-size: 17px;
  }
  @media (max-width: 420px) {
    display: flex;
    justify-content: space-between;
    direction: ltr;
  }
`;
export const List = styled.ul`
  list-style: none;
  background-color: #434d6d;
  padding: 10px 25px 10px 15px;
  border-radius: 10px;
  margin-top: 10px;
  width: 80%;
  max-height: 150px;
  height: auto;
  overflow: ${(props) => (props.scroll ? "auto" : "hidden")};

  li {
    margin: 9px 0px;
    color: #dad8d8;
    position: relative;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li::before {
    content: "";
    width: 7px;
    height: 7px;
    background-color: #ffffff;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    position: absolute;
    top: 7px;
    right: -13px;
  }
`;
export const FooterCard = styled.div`
  border-top: 1px solid #989898;
  padding: 10px 0px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #989898;
    font-size: 10px;
    margin: 0px 7px;
    display: flex;
    align-items: center;
  }
  span svg {
    margin: 0px 3px;
  }
  .div-right {
    display: flex;
    align-items: center;
  }
  .link-footer {
    color: #f1efef;
    font-size: 13px;
  }
`;
export const SectionSlider = styled.div`
  padding: 60px 10px;

  .mySwiper {
    padding-bottom: 70px;
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

  @media (max-width: 420px) {
    .div-name-card {
      display: flex;
      justify-content: space-between;
      direction: ltr;
    }
  }
`;
