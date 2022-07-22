import styled from "styled-components";

export const Main = styled.main`
  width: 67%;
  @media (max-width: 864px) {
    width: 100%;
  }
`;
export const BtnHeader = styled.button``;
export const Container = styled.div`
  width: 100%;
  max-height: 456px;
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
  border: 1px solid #9898984d;
  border-radius: 15px;
`;
export const Table = styled.table`
  width: 100%;
  position: relative;

  tr:last-child {
    border-radius: 0px 0px 15px 15px;
  }
  .last-menu-td {
    width: 30px !important;
    cursor: pointer;
    overflow: visible !important;
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
  .td-col-p {
    width: 180px;
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
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      min-height: 33px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 120px;
      a {
        height: 100%;
        color: #cbcbcb;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .td-name {
      display: flex;
      flex-direction: column;
      div {
        width: 23px;
        height: 23px;
        overflow: hidden;
        border-radius: 50%;
        margin: 5px 0px;
      }
    }
  }
  .t-header {
    position: relative;
    display: flex;
    align-items: center;
    background-color: #535c79;
    justify-content: space-between;
    border-radius: 15px 15px 0px 0px !important;
    &:hover {
      background-color: #535c79;
    }
    th {
      position: relative;
      color: #ececec;
      font-size: 15px;
      width: 90px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-height: 33px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .last-menu-th {
      width: 30px;
    }
    .th-col-p {
      width: 180px;
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

export const DivTextHeader = styled.div``;
export const TableSelectProductStyles = styled.div``;
export const ColP = styled.span`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  color: #ffffff;
  div {
    margin: 4px;
    span {
      color: #c2c2c2;
    }
  }
`;
export const BtnInc = styled.button`
  width: 28px;
  height: 28px;
  background-color: ${(props) => (props.outline ? "transparent" : "#6474a5")};
  border: 1px solid #5d6f94;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.4s ease;
  line-height: 40px;
  &:hover {
    opacity: 0.8;
  }
`;

export const Counter = styled.span`
  color: #ffffff;
  margin: 0px 7px;
  font-size: 13px;
`;

export const TitleLevel = styled.h2`
  color: #ffffff;
  font-size: 22px;
  margin-bottom: 70px;
  width: 100%;
  text-align: center;
`;
