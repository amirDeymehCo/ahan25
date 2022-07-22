import styled from "styled-components";
export const IconStyleDiv = styled.div`
   {
    width: 120px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .Icon {
      border-radius: 50%;
      width: 35px;
      height: 50%;
      font-size: 1rem;
      font-weight: 500;
      border: none;
      cursor: pointer;
      transition: all 0.5s linear;
      direction: rtl;
      background: transparent;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 400px) {
      flex-direction: column;
      margin: 0 5px;
    }
  }
`;
