import styled from "styled-components";

export const Main = styled.main``;
export const BtnHeader = styled.button``
export const Container = styled.div`
  margin-bottom:120px ;
  width: 100%;
  max-height: 456px;
  background-color: #2e354c;
  border-radius: 15px;
  overflow: hidden;
  .check-input:checked ~ .checkMark:after {
    display: block;
    opacity:1;
  }

  .check-input{
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    right:0px;
    z-index:2;
  }
  .checkMark {
    position: absolute;
    top: 50%;
    right: 7px;
    height: 20px;
    width: 20px;
    border-radius:3px;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    border:2px solid #f7f7f7;
  }
  .check-input:checked ~ .checkMark {
    background-color: #f7f7f7;
  }
  .checkMark::after {
    content: "";
    left: 50%;
    top: 50%;
    width: 5px;
    height: 9px;
    opacity:0;
    border: solid #535c79;
    border-width: 0 3px 3px 0;
    -webkit-transform:  translateY(5%) translateX(-50%) rotate(45deg);
    -ms-transform  translateY(5%) translateX(-50%): rotate(45deg);
    transform:  translateY(5%) translateX(-50%) rotate(45deg);
  }
`;
export const Search = styled.div`
  width: 100%;
  height: 80px;
  background-color: #535c79;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 458px) {
  }
  h3 {
    color: #fdfdf6;
    font-size: 20px;
    margin-bottom: 5px;
  }
  p {
    color: #fdfdf6;
    font-size: 14px;
  }

  svg {
    margin-left: 10px;
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
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0%;
    left: 0px;
    width: 100%;
    height: 4px;
    background-color: #8c98bec7;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0%;
    left: 35%;
    width: 157px;
    height: 4px;
    background-color: #d16035;
    border-radius: 10px;
  }

  .last-menu-td {
    width: 40px !important;
    cursor: pointer;
    overflow: visible !important;
  }
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
      position: relative;
      min-height: 33px;
      display: flex;
      align-items: center;
      justify-content: center;
      height:100%;
      a{
        height:100%;
        color: #cbcbcb;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    td:first-child {
      width: 30px;
    }
  }
  .t-header {
    border-bottom: 1px solid #9fafef;
    position: relative;
    &:hover {
      background-color: #2e354c;
    }
    th {
      position: relative;
      color: #ececec;
      font-size: 15px;
      width: 130px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-height: 33px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    th:first-child {
      width: 30px;
    }
  }
`;

export const TrBody = styled.tr`
  position: relative;
  overflow: visible !important;
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

  @media (max-width: 984px) {
    width: 120%;
  }
  @media (max-width: 984px) {
    width: 120%;
  }
  @media (max-width: 618px) {
    width: 250%;
  }
  .right {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: start;
    svg {
      margin: 0px 10px;
    }
    @media (max-width: 582px) {
      width: 50%;
      justify-content: start;
      padding: 0px 5px;
    }
    @media (max-width: 390px) {
      width: 100%;
      justify-content: start;
    }
  }
  .left {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-left: 50px;
    svg {
      margin: 0px 7px;
    }
    @media (max-width: 582px) {
      width: 50%;
      justify-content: end;
    }
    @media (max-width: 390px) {
      width: 100%;
      justify-content: start;
    }
    span {
      margin: 0px 15px;
    }
  }
`;

export const TdMenuDot = styled.td`
  &:hover {
    ul {
      opacity: 1;
      z-index: 3;
    }
  }
`;
export const MenuDotList = styled.ul`
  position: absolute;
  top: 0px;
  left: 10px;
  border-radius: 10px;
  background-color: #535c79;
  list-style: none;
  width: 140px;
  transition: opacity 0.3s ease;
  text-align: start;
  z-index: -10;
  opacity: 0;
  li {
    margin: 5px 0px;
    transition: all 0.4s ease;
    width: 100%;
    height: 50%;
    padding: 10px;
    &:hover {
      background-color: #666e8a;
    }
    a {
      width: 100%;
      height: 50%;
      text-decoration: none;
      color: #f7f7f7;
      font-size: 13px;
    }
  }
`;



export const DivTextHeader = styled.div``
export const TableSelectProductStyles = styled.div``