import styled from "styled-components";

export const SectionTiming = styled.section`
  margin-top: 150px;
  display: grid;
  grid-template-columns: replace(12, auto);
  gap: 0px 40px;
  @media (max-width: 809px) {
    gap: 0px 20px;
  }
  @media (max-width: 550px) {
    gap: 30px 0px;
  }
`;

export const Times = styled.div`
  grid-column: 1/5;
  background-color: #45517840;
  border-radius: 10px;
  @media (max-width: 550px) {
    grid-column: 1/-1;
  }
  padding: 30px;
  border: 1px solid #989898;
  h4 {
    color: #f7f7f7;
    margin-bottom: 30px;
    font-size: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    span {
      margin: 15px 0px;
    }
  }
`;

export const VectorStatusTime = styled.div`
  grid-column: 5/13;
  @media (max-width: 550px) {
    grid-column: 1/-1;
  }
  background-color: #45517840;
  border-radius: 10px;
  padding: 30px;
  border: 1px solid #989898;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
  h5 {
    font-size: 20px;
    margin-top: 20px;
    color: #ffffff;
  }
`;
