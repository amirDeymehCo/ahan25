import styled from "styled-components";
// export const FontFacessss = styled`
//   @font-face {
//     font-family: "OurFont";
//     src: url(../../../../../public/fonts/IRANYekan/IRANYekanWebLight.ttf)
//       format("ttf2");

//     font-style: normal;
//   }
// `;
export const AverageDivData = styled.div`
   {
    width: 100%;
    height: 24%;
    border-radius: 10px;
    padding: 10px;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid #aaa9;
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #9fafef;
      cursor: pointer;
    }
    ::-webkit-scrollbar {
      width: 6px;
      background-color: #9fafef;
      height: 6px;
      cursor: pointer;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #d16035;
      height: 4px;
      cursor: pointer;
    }
  }
`;
export const DataDiv = styled.div`
   {
    width: 325px;
    background: ${(props) => props.background};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-right: 1px solid #aaa9;
    cursor: pointer;
  }
`;
export const IconAndBtn = styled.div`
   {
    width: 30%;
    height: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    .icon {
      width: 55px;
      height: 55px;
      background: #121726;
      border-radius: 50%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .btn {
      font-size: 1.3rem;
      font-weight: 500;
      width: 80%;
      height: 30px;
      background: #d16035;
      border-radius: 10px;
      borer: none;
      outline: none;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      border: 1px solid #aaa0;
      color: #fff;
    }
    .btn:hover {
      background: transparent;
      border: 1px solid #aaa8;
      color: #fff;
    }
  }
`;
export const TextAndPrice = styled.div`
   {
    width: 80%;
    height: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    color: #fff;
    font-size: 1.3rem;
    padding: 20px;
    p {
      width: 100%;
      height: 25px;
    }
    h2 {
      width: 100%;
      height: 25px;
      color: #ffdd47;

      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      span {
        width: 100%;
        color: #fff;
        font-size: 1.1rem;
      }
    }
    .span {
      width: 100%;
      height: 25px;
      direction: ltr;
      text-align: start;
      display: flex;
      align-items: center;
    }
  }
`;
