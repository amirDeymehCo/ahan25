import styled from "styled-components";

export const List = styled.div`
  padding: 40px 10px;
  .mySwiper {
    padding: 0px 0px 30px 0px;
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
  &::before {
    content: "";
    width: 50%;
    height: 50vw;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0px 0px 40px 5px #495169, 0px 0px 40px 5px #495169 inset;
    transform: translateY(-15%) translateX(-80%);
    -webkit-transform: translateY(-15%) translateX(-80%);
    -moz-transform: translateY(-15%) translateX(-80%);
    -ms-transform: translateY(-15%) translateX(-80%);
    -o-transform: translateY(-15%) translateX(-80%);
  }
`;

export const CardList = styled.div`
  padding: 18px 10px;
  background-color: #434d6d;
  border-radius: 20px;
  border: 1px solid #989898;
  text-align: center;
  margin: 20px 0px;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  &:hover {
    background-color: #2e354c;
  }

  p {
    color: #ffffff;
    font-size: 13px;
    margin-top: 10px;
  }
  span {
    color: #d16035;
    margin: 0px 0px 10px 2px;
  }
`;
