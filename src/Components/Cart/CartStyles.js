import styled from "styled-components";

export const Main = styled.main`
  padding: 50px;
  direction: rtl;
  @media (max-width: 1007px) {
    padding: 50px 10px;
  }
`;

export const Level1Section = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 70px;
`;

export const NotProducts = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    text-align: center;
  }
  h1 {
    color: #ffffff;
    font-size: 24px;
    margin: 40px 0px;
  }
  a {
    background-color: #117c64;
    color: #f7f7f7;
    padding: 12px 25px;
    border: none;
    border-radius: 8px;
  }
`;

export const Loading = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: #ffffff;
    font-size: 25px;
  }
`;
