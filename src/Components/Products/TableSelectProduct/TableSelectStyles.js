import styled from "styled-components";
export const TableSelectProductStyles = styled.section`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 458px) {
      flex-direction: column;
    }
  }
`;
export const DivTextHeader = styled.div`
  padding: 0px 20px;
  h3 {
    font-size: 16px;
  }
`;

export const BtnHeader = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 0px 7px;
`;
