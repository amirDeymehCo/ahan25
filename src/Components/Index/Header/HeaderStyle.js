import styled from "styled-components";
export const HeaderDiv = styled.div`
   {
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5px;
    direction: rtl;
    padding-right: 25px;
    @media (max-width: 800px) {
    }
  }
`;
export const Div = styled.div`
   {
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    color: #9997;
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: #aaa;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }
`;
export const DivSmall = styled.div`
   {
    width: 100%;
    height: 100%;
    position: relative;
    display: none;
    color: #9997;
    &:hover {
      color: #aaa;
    }
    @media (max-width: 800px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .buttonShowMenu {
      width: 25px;
      height: 16px;
      text-align: center;
      color: #9997;
      padding: 1px;
      cursor: pointer;
      border: none;
      outline: none;
      background: transparent;
      border-bottom: 1px solid #aaa;
    }
    .buttonShowMenu:hover {
      color: #aaa;
    }

    .ul {
      position: absolute;
      top: 65px;
      left: 5px;
      background: #121729;
      width: 220px;
      height: 300px;
      list-style: none;
      overflow: auto;
      animation-name: identifier-UlShow;
      animation-duration: 1s;
      animation-iteration-count: ease;
      border-radius: 10px;
      z-index: 1;
    }
    .ulHide {
      position: absolute;
      top: 65px;
      left: 5px;
      background: #121729;
      width: 220px;
      height: 0px;
      list-style: none;
      overflow: auto;
      animation-name: identifier-UlHide;
      animation-duration: 1s;
      animation-iteration-count: ease;
      border-radius: 10px;
      z-index: 1;
    }
    .li {
      width: 100%;
      height: 65px;
      align-items: center;
      justify-content: space-between;
      display: flex;
      border-bottom: 1px solid #fff;
      padding: 5px 10px;
      color: #fff;
      cursor: pointer;
    }
    .li:hover {
      background: rgba(42, 42, 42, 0.6);
    }
    @keyframes identifier-UlShow {
      0% {
        height: 0;
      }
      100% {
        height: 300px;
      }
    }
    @keyframes identifier-UlHide {
      100% {
        height: 0;
      }
      0% {
        height: 300px;
      }
    }
  }
`;
