import styled from "styled-components";

export const DataDiv = styled.div`
   {
    width: 100%;
    height: 850px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    direction: rtl;
    margin: 10px 0;

    .divTable {
      width: 70%;
      height: 100%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
    }
    @media (max-width: 800px) {
      flex-direction: column;
      height: 1850px;

      .divTable {
        width: 100%;
      }
    }
  }
`;
export const DataTable = styled.div``;
