import styled from "styled-components";

export const Main = styled.main`
  padding: 100px 50px;
  direction: rtl;
  @media (max-width: 700px) {
    padding: 100px 10px;
  }
`;

export const SectionTypePayment = styled.section`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
