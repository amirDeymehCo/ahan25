import styled from "styled-components";
export const BtnDiv = styled.div`
   {
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Button = styled.div`
   {
    width: auto;
    height: 60%;
    outline: none;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    .btn,
    .btn-noBg {
      border-radius: 10px;
      padding: 5px;
      width: 85px;
      height: 100%;
      font-size: 1rem;
      font-weight: 500;
      border: 2px solid #d16035;
      cursor: pointer;
      transition: all 0.5s linear;
    }
    .btn-noBg:hover {
      background: #d16035;
    }
    .btn-noBg {
      background: transparent;
    }
    .btn {
      background: #d16035;
    }
    .btn:hover {
      background: transparent;
    }
    @media (max-width: 800px) {
      .btn,
      .btn-noBg {
        height: 25px;
        padding: 5px;
        width: 85px;
      }
    }
  }
`;
