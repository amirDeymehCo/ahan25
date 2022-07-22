import styled from "styled-components";
export const Main = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  width: 100%;
  max-height: 456px;
  background-color: #2e354c;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #989898;
`;
export const Search = styled.div`
  width: 100%;
  height: 80px;
  background-color: #535c79;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  position: relative;
  div {
    position: relative;
    margin-bottom: 15px;
  }
  input {
    width: 256px;
    height: 42px;
    border: 1px solid #989898;
    border-radius: 10px;
    background-color: #2e354c;
    padding: 0px 10px;
    color: #ffffff;
    padding-right: 40px;
    @media (max-width: 376px) {
      width: 200px;
    }
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #cbcbcb;
    }
  }
  svg {
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%) translateX(-50%);
  }
`;
export const BoxTable = styled.div`
  width: 100%;
  overflow: auto;
`;
export const BoxBox = styled.div`
  width: 100%;
  height: 370px;
  overflow: auto;
`;
export const Table = styled.table`
  width: 100%;
  tr {
    height: 75px;
    width: 100%;
    background-color: #2e354c;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    overflow-x: auto;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    &:hover {
      background-color: #374162;
    }

    td {
      color: #cbcbcb;
      font-size: 12px;
      width: 130px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .t-header {
    border-bottom: 1px solid #9fafef;
    &:hover {
      background-color: #2e354c;
    }
    th {
      color: #ececec;
      font-size: 15px;
      width: 130px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const TrBody = styled.tr`
  .idCode {
    font-size: 12px;
  }
`;

export const BtnStatus = styled.button`
  border: none;
  width: 100%;
  padding: 8px 10px;
  color: #ffffff;
  max-width: 98px;
  background-color: ${(props) => (props.status ? "#117C64" : "#AF3E3E")};
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  width: 100%;
  color: #ffffff;
  font-size: 14px;
  padding: 10px;
  @media (max-width: 390px) {
    flex-direction: column;
  }
  .col-8 {
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: end;
    @media (max-width: 582px) {
      width: 50%;
      justify-content: start;
      padding: 0px 5px;
    }
    @media (max-width: 390px) {
      width: 100%;
      justify-content: start;
    }
    svg {
      margin: 0px 7px;
    }
  }
  .col-4 {
    width: 25%;
    display: flex;
    align-items: center;

    @media (max-width: 582px) {
      width: 50%;
      justify-content: end;
    }
    @media (max-width: 390px) {
      width: 100%;
      justify-content: start;
    }
    div {
      svg {
        margin: 0px 10px;
        cursor: pointer;
      }
    }
  }
`;
