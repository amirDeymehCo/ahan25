import styled from "styled-components";

export const SideBarStyles = styled.aside`
  grid-area: s;
`;

export const HeaderSideBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 0px;
  border-bottom: 1px solid #9fafefc5;
  .code {
    color: #dddbdb;
    font-size: 11px;
  }
  h1 {
    color: #fdfdf6;
    font-size: 18px;
    margin: 7px 0px;
    margin-bottom: 20px;
  }
  button {
    border:none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Mark = styled.span`
  background-color: #9fafefc5;
  padding: 3px 10px;
  font-size: 9px;
  color: #f7f7f7;
  border-radius: 4px;
  margin: 0px 3px;
`;

export const BodySideBar = styled.div`
  .box-select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 14px 0px;
    label {
      color: #e6e7e8;
      font-size: 16px;
      width: 30%;
    }
  }
`;

export const BoxFilterStyle = styled.div`
  width: 193px;
  position: relative;
  padding: 0px 5px;
  margin: 10px 0px;
  @media (max-width: 596px) {
    width: 50%;
    &:last-child {
      width: 100%;
    }
  }

  .title {
    border: none;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    width: 100%;
    background-color: #6474a5;
    border-radius: 10px;
    padding: 16px 13px;
    padding-right: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    &:hover {
      background-color: #535c79;
    }
  }
`;

export const ListFilters = styled.ul`
  color: #ffffff;
  width: 100%;
  background-color:#6474a5;
  border-radius: 10px;
  padding: 16px 0px;
  position: absolute;
  top: 65px;
  left: 0px;
  z-index: 3;
  li {
    padding: 25px 20px;
    width: 100%;
    position: relative;
    height: 38px;
    display: flex;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;

    &:hover {
      background-color: #535c79;
    }
    input:checked ~ .checkMark:after {
      display: block;
      opacity:1;
    }


    align-items: center;
    input {
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
    input:checked ~ .checkMark {
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

    span {
      font-size: 12px;
      margin-right: 15px;
    }
  }
`;
