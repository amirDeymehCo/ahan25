import styled from "styled-components";
export const Cover = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.active ? "inline-block" : "none")};
  background-color: ${(props) => (props.active ? "#31313156" : "transparent")};
  z-index: 2;
  @media (min-width: 996px) {
    display: none;
  }
`;
export const SideBar = styled.aside`
  width: 35%;
  border: 1px solid #989898;
  padding: 30px 20px;
  border-radius: 15px;
  margin-left: 50px;
  max-height: 100%;
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  .box {
    overflow-y: auto;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 996px) {
    position: fixed;
    right: 0px;
    top: 0px;
    background-color: #2a324b;
    z-index: 3;
    height: 100vh;
    border-radius: 0px;
    border: none;
    box-shadow: 0px 0px 4px #ffffffa6;
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -ms-transform: translateX(100%);
    -o-transform: translateX(100%);
    ${(props) => {
      if (props.active) {
        return `
            transform: translateX(0%);
            -webkit-transform: translateX(0%);
            -moz-transform: translateX(0%);
            -ms-transform: translateX(0%);
            -o-transform: translateX(0%);
          `;
      }
    }}
  }
  @media (max-width: 800px) {
    width: 45%;
  }
  @media (max-width: 590px) {
    width: 55%;
  }
  @media (max-width: 476px) {
    width: 70%;
  }
  @media (max-width: 368px) {
    width: 100%;
  }
`;
export const HeaderSideBar = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
  h2 {
    color: #ffffff;
    font-size: 20px;
    margin: 5px 15px;
  }
  span {
    color: #cbcbcb;
    font-size: 12px;
    margin: 5px 15px;
    letter-spacing: 0.6px;
  }
`;

export const AccountLayoutStyle = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px 30px;
  max-height: 100vh;
  direction: rtl;
`;

export const ListMenu = styled.ul`
  list-style: none;
  margin: 20px 0px;
  li {
    border: 1px solid #989898;
    background-color: #374162;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    margin: 30px 0px;
    display: flex;
    align-items: center;
    height: 58px;
    position: relative;
    cursor: pointer;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      right: 0px;
      height: 70%;
      width: 3px;
      background-color: #d16035;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      border-radius: 10px 0px 0px 10px;
    }
    &:hover {
      background-color: #434d6d;
    }
    a {
      font-size: 15px;
      padding: 7px 35px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      span {
        margin: 0px 8px;
        color: #ffffff;
      }
    }
  }
`;

export const Logout = styled.button`
  width: 100%;
  height: 55px;
  border-radius: 7px;
  border: 2px solid #d16035;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  a {
    color: #ffffff;
    width: 100%;
    padding-left: 55px;
    height: 100%;
  }
  &:hover {
    background-color: #d16035;
  }
`;

export const BodyLayout = styled.section`
  padding: 30px 10px;
  border: 1px solid #989898;
  border-radius: 10px;
  width: 65%;
  max-height: 100%;
  overflow: auto;
  @media (max-width: 996px) {
    width: 100%;
  }
`;

export const BtnMenu = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0px 0px 4px #ffffffa6;
  background-color: #d16035;
  border: none;
  position: absolute;
  top: 150px;
  left: 0px;
  transform: translateX(20%);
  -webkit-transform: translateX(-120%);
  -moz-transform: translateX(-120%);
  -ms-transform: translateX(-120%);
  -o-transform: translateX(-120%);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px) translateX(-120%);
    -webkit-transform: translateY(-5px) translateX(-120%);
    -moz-transform: translateY(-5px) translateX(-120%);
    -ms-transform: translateY(-5px) translateX(-120%);
    -o-transform: translateY(-5px) translateX(-120%);
  }
  @media (min-width: 996px) {
    display: none;
  }
  span {
    width: 30px;
    height: 2px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
  }
  .line2 {
    transform: translateX(-50%) translateY(-10px);
  }
  .line1 {
    margin: 8px 0px;
  }
  ${(props) => {
    if (props.active) {
      return `
      .line1{
        transform: translateX(-85%) rotate(45deg) translateY(-800%);
      }
      .line2{
        opacity:0;
      }
      .line3{
        transform: translateX(-40%) rotate(-45deg) translateY(-300%);
      }
      `;
    }
  }}
`;

export const BtnClose = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 30px;
  left: 30px;
  @media (min-width: 369px) {
    display: none;
  }
`;
