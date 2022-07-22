import styled from "styled-components";

export const DivChart = styled.div`
   {
    width: calc(100% - 80px);
    height: 100%;
    background: transparent;
    border-radius: 10px 0 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    padding: 20px;
    @media (max-width: 800px) {
      width: 100%;
      padding: 5px;
    }
    ${props=>props.styles}
  }
`;

export const FilterBtnDiv = styled.div`
   {
    width: 100%;
    height: 30px;
    background: transparent;
    padding: 5px;
    direction: ltr;
    .btn {
      background: #495169;
      width: 50px;
      height: 30px;
      text-align: center;
      border: none;
      outline: none;
      cursor: pointer;
      margin: 5px;
      border-radius: 15px;
      color: #fff;
      transition: all 0.5s ease-in-out;
      padding: 5px;
    }
    .btn:hover {
      background: #9fafef50;
    }
    @media (max-width: 800px) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 10px;
    }
  }
`;
