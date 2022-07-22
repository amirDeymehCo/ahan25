import styled from "styled-components";
const Main = styled.main`
  padding: 0px 70px;
  direction: rtl;
  @media (max-width: 753px) {
    padding: 0px 5px;
  }
`;

export default Main;
export const DivText = styled.div`
  width: 100%;
  text-align: center;
  color: #f7f7f7;
  margin: 40px 0px;
  font-size: 15px;
  line-height: 30px;
  padding: 0px 15px;
`;

export const Not = styled.div`
  padding: 70px 0px;
  text-align: center;
  h2 {
    color: #ffffff;
    font-size: 24px;
  }
`;
