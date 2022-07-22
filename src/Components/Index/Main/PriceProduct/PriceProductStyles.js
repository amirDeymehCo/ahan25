import styled from "styled-components";
export const DivIconUser = styled.div`
  width: 30%;
  text-align: center;
  @media (max-width: 722px) {
    width: 100%;
    text-align: center;
  }
`;
export const DivText = styled.div`
  width: 70%;
  padding: 0px 20px 0px 70px;

  h3 {
    color: #ffffff;
    margin: 0px 0px 20px 0px;
    font-size: 21px;
  }

  p {
    color: #b8b8b8;
    font-size: 16px;
    line-height: 22px;
  }
  @media (max-width: 810px) {
    padding: 0px 20px 0px 0px;
  }
  @media (max-width: 722px) {
    width: 100%;
    padding: 0px;
  }
`;
export const Section = styled.section`
  padding: 20px 30px;
  @media (max-width: 486px) {
    padding: 20px 10px;
  }
  .box {
    border: 1px solid #989898;
    border-radius: 20px;
    padding: 35px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 722px) {
    .box {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 20px 10px;
    }
  }
`;
