import styled from "styled-components";
export const SearchBarDiv = styled.div`
   {
    width: 350px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 35px;

    color: #fff;
    .input {
      border-radius: 5px;
      padding: 5px;
      width: 100%;
      height: 50%;
      font-size: 1rem;
      font-weight: 500;
      border: 2px solid #495169;
      cursor: pointer;
      transition: all 0.5s linear;
      direction: rtl;
      background: #495169;
      outline: none;
    }
    @media (max-width: 800px) {
      width: 100%;
      .input {
        height: 90%;
      }
    }
  }
`;
