import styled from "styled-components";
export const CardPost = styled.div`
  height: 300px;
  border-radius: 15px;
  border: 1px solid #989898;
  padding: 17px 23px;
  background-color: #374162;
`;
export const HeaderCard = styled.div`
  width: 100%;
  height: 132px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  .text-header {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 5px;
    z-index: 1;
  }

  .text-header div {
    display: flex;
    align-items: center;
  }
  .text-header .image-user {
    margin: 0px 7px;
    border-radius: 50%;
  }
  .text-header span {
    color: #ffffff;
    font-size: 12px;
  }
`;
export const BodyCard = styled.div`
  margin: 10px 0px 0px 0px;
  h3 {
    color: #ffffff;
    font-size: 17px;
    margin-bottom: 5px;
  }

  .div-text {
    display: flex;
    align-items: flex-start;
    height: 40px;
    overflow: hidden;
    position: relative;
  }

  .div-text p {
    color: #989898;
    font-size: 12px;
    line-height: 20px;
    width: 85%;
    height: 40px;
    text-overflow: ellipsis;
  }
  .div-text a {
    color: #e97b53;
    font-size: 12px;
    position: absolute;
    bottom: 2px;
    left: 0px;
    text-decoration: none;
  }
`;
export const DivMark = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #ffffff;
    padding: 4px 13px;
    background-color: #55628c;
    font-size: 11px;
    border-radius: 5px;
    margin: 6px 4px;
  }
`;
export const FooterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #989898;
  padding: 9px 0px;

  div {
    display: flex;
    align-items: center;
    color: #989898;
    font-size: 10px;
  }

  div svg {
    margin: 0px 4px;
  }
`;
export const Section = styled.section`
  margin-top: 70px;

  .container {
    margin-top: 50px;
    padding: 0px 20px;
  }

  .mySwiper {
    padding-bottom: 50px;
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
