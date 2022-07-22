import styled from "styled-components";

export const SectionOnline = styled.section`
  margin-top: 150px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: replace(12, auto);
  gap: 0px 50px;

  @media (max-width: 850px) {
    gap: 0px 15px;
    border: none;
    padding: 0px 0px;
  }
  @media (max-width: 594px) {
    gap: 30px 50px;
  }
  border: 1px solid #989898;
  padding: 60px 40px;
  border-radius: 10px;
  margin-top: 40px;
  .levels {
    background-color: rgba(69, 81, 120, 0.25);
    border-radius: 10px;
    border: 1px solid #989898;
    padding: 25px 20px;
    h4 {
      font-size: 17px;
      color: #ffffff;
      display: flex;
      align-items: center;
      span {
        padding: 0px 5px 3px 5px;
        border-bottom: 1px solid #e97b53;
        margin-right: 5px;
      }
    }
  }
`;

export const Level1 = styled.div`
  grid-column: 1/7;
  @media (max-width: 594px) {
    grid-column: 1/-1;
  }
`;

export const Level2 = styled.div`
  grid-column: 7/13;
  @media (max-width: 594px) {
    grid-column: 1/-1;
  }
`;

export const ButtonPayment = styled.button`
  padding: 12px 40px;
  border-radius: 10px;
  border: none;
  color: #f7f7f7;
  cursor: pointer;
  background-color: #117c64;
  margin-bottom: 10px;
  &:disabled {
    cursor: no-drop;
    background-color: #434d6d;
  }
`;
