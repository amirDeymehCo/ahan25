import styled from "styled-components";

export const NewsDivData = styled.div`
   {
    width: 30%;
    height: 100%;
    padding: 10px;
    @media (max-width: 800px) {
      width: 100%;
      height: 100%;
      padding: 5px;
    }
  }
`;
export const NewsDiv = styled.div`
   {
    width: 100%;
    height: calc(100% - 85px);
    padding: 25px 25px;
    background-color: #374162;
    border-radius: 10px;
    border: 1px solid #9995;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    @media (max-width: 800px) {
      width: 100%;

      padding: 5px;
    }
  }
`;
export const BtnDiv = styled.div`
   {
    width: 100%;
    height: 45px;
    .btn-primary,
    .btn-two {
      width: 100px;
      height: 90%;
      border-radius: 10px 10px 0px 0px;
      transition: all 0.5s ease-in-out;
      border: none;
      outline: none;
      cursor: pointer;
      margin: 0 -2px;
      margin-top: 5px;
      margin-right: -2px;
    }
    .btn-primary {
      background: #d16035;
      color: #fff;
    }
    .btn-primary:hover {
      background: #495169;
      color: #fff;
    }

    .btn-two {
      background: #495169;
      color: #fff;
    }
    .btn-two:hover {
      background: #d16035;
      color: #fff;
    }
  }
`;

export const ImageNewsDiv = styled.div`
   {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    background-color: #fff5;
    position: relative;
    .h1 {
      width: 100%;
      height: auto;
      color: #ddd;
      padding: 10px 25px;
      position: absolute;
      top: 30%;
      transform: translateY(-35%);
    }
    .p {
      width: 100%;
      height: auto;
      color: #ddd;
      padding: 10px 25px;
      position: absolute;
      top: 70%;
      transform: translateY(-75%);
    }
  }
`;
export const DivIcons = styled.div`
   {
    width: 100%;
    position: absolute;
    top: 100%;
    transform: translateY(-100%);
    direction: ltr;
    padding: 10px;
    display: flex;

    span {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 55px;
      height: auto;
      color: #ddd;
      font-size: 1.1rem;
      text-align: center;
    }
  }
`;
export const ListNewsDiv = styled.div`
   {
    width: 100%;
    height: calc(100% - 210px);
    border-radius: 10px;
    background-color: transparent;
    position: relative;
    padding: 10px;
    overflow: auto;
    border-radius: 10px;
    border: 1px solid #aaa;
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #9fafef;
      cursor: pointer;
    }
    ::-webkit-scrollbar {
      width: 4px;
      background-color: #9fafef;
      height: 4px;
      cursor: pointer;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #d16035;
      height: 4px;
      cursor: pointer;
    }
    overflow: auto;
  }
`;
export const ListDivActive = styled.div`
   {
    cursor: pointer;
    width: 100%;
    height: 80px;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .Icon {
      width: 60px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        width: 70%;
        height: 70%;
        padding: 7px;
        background: #55628c;
        border-radius: 50%;
      }
    }
  }
`;
export const DivData = styled.div`
   {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    h2 {
      width: 100%;
      height: auto;
      color: #fff;
    }
    p {
      width: 100%;
      height: auto;
      color: #fff;
    }
    .Icons {
      width: 80%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-left: 90px;
      span {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #aaa;
      }
    }
  }
`;
export const LineDiv = styled.div`
   {
    width: 100%;
    height: 2px;
    padding: 0px;
    border-radius: 10px;
    background-color: #9fafef;
    position: relative;
    margin: 10px 0;
  }
`;
