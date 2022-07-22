import styled from "styled-components";

export const Nav = styled.nav`
  margin-top: 20px;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .mySwiper {
    padding-bottom: 40px;
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

export const Item = styled.li`
  position: relative;
  padding: 0px 20px;
  padding-bottom: 10px;
  width: 100%;
  overflow: hidden;
  text-align: center;
  &::before,
  &::after {
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    content: "";
    height: 4px;
    border-radius: 10px;
    width: 85%;
    background: ${(props) =>
      props.active ? "#D16035" : " rgba(159, 175, 239, 0.8)"};
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    background-color: #d16035;
    transform: translateX(60%);
  }
  &:hover::after {
    transform: translateX(-50%);
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #cbcbcb;
    text-decoration: none;
    svg {
      margin-left: 10px;
    }
  }
`;
