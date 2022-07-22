import styled from "styled-components";
export const RowCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 60px 10px;
  flex-wrap: wrap;
  z-index: 1;
`;
export const CardCompony = styled.div`
  width: 174px;
  height: 144px;
  border-radius: 20px;
  border: 1px solid #989898;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px 0px;
  background-color: #434d6d;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;

  &:hover {
    background-color: #2e354c;
  }

  h4 {
    color: #ffffff;
    margin-top: 8px;
  }
`;
export const Section = styled.section`
  margin-top: 120px;
`;

export const VectorCompony = styled.div`
  width: 60%;
  height: 120vw;
  border-radius: 23% 77% 100% 0% / 52% 56% 44% 48%;
  position: absolute;
  box-shadow: 0px 0px 100px #434d6db7;
  left: -0px;
  background-color: #434d6d6c;
  transform: translateY(-60%);
  z-index: -2;
`;
