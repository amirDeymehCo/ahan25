import styled from "styled-components";

export const DivLogo = styled.div`
  width: 22%;
  text-align: center;
  color: #ffffff;
  padding: 0px 20px;
  h3 {
    font-size: 22px;
  }
  p {
    font-size: 10px;
    line-height: 14px;
    margin: 10px 0px;
  }
  @media (max-width: 984px) {
    width: 100%;
  }
`;
export const DivText = styled.div`
  width: 78%;
  padding: 0px 40px;
  p {
    color: #cbcbcb;
    font-size: 14px;
    line-height: 24px;
  }
  @media (max-width: 984px) {
    width: 100%;
    padding: 0px 40px;
  }
  @media (max-width: 800px) {
    width: 100%;
    padding: 0px 0px;
  }
`;
export const CardComponyStyle = styled.article`
  padding: 20px;
  @media (max-width: 490px) {
    padding: 10px;
  }
  .box {
    width: 100%;
    border: 1px solid #989898;
    border-radius: 20px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 984px) {
    .box {
      flex-direction: column;
      text-align: center;
    }
  }
`;
export const DivBtnShow = styled.div`
  margin-top: 20px;
`;
