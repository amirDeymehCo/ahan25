import styled from "styled-components";
export const NavBarDiv = styled.div`
   {
    width: 100%;
    height: 60px;
    display: flex;
    border-bottom: 1px solid #999;
    align-items: center;
    justify-content: space-between;
    padding-right: 25px;
    .divMinWidth {
      display: none;
    }
    .divMaxWidth,
    .divMaxWidthDate {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .divMinWidth,
    .divMinWidthDate {
      display: none;
    }
    @media (max-width: 800px) {
      height: 120px;
      flex-direction: column;
      padding: 10px 0;
      padding-right: 35px;
      .divMinWidth,
      .divMinWidthDate {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      .divMinWidthDate {
        flex-direction: column;
        padding: 10px;
      }
      .divMaxWidth,
      .divMaxWidthDate {
        display: none;
      }
    }
  }
`;
