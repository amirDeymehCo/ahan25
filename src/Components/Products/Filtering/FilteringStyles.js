import styled from "styled-components";

export const SectionFilter = styled.section``;
export const BoxFiltering = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const BtnNoFilter = styled.button`
  background-color: #d16035;
  color: #ffffff;
  border: none;
  width: 90px;
  height: 45px;
  border-radius: 25px;
  margin-left: 15px;
  cursor: pointer;
  @media (max-width: 984px) {
    width: 23%;
    margin-left: 0px;
    margin-right: 10px;
  }
  @media (max-width: 596px) {
    width: 47%;
  }
  @media (max-width: 596px) {
    width: 100%;
  }
  @media (max-width: 596px) {
    margin-right: 0px;
  }
`;

export const BoxFilterStyle = styled.div`
  width: 193px;
  position: relative;
  padding: 0px 5px;
  margin: 10px 0px;
  @media (max-width: 984px) {
    width: 25%;
  }
  @media (max-width: 596px) {
    width: 50%;
    &:last-child {
      width: 100%;
    }
  }

  .title {
    border: none;
    min-height: 59px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    width: 100%;
    background-color: rgba(67, 77, 109, 0.5);
    border-radius: 10px;
    padding: 16px 10px;
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
  background-color:#434d6dd0;
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

export const SelectBox = styled.div`
  padding: 5px 15px;
  padding-left: 5px;
  border-radius: 20px;
  background-color: #8c98be;
  color: #ffffff;
  font-size: 12px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    margin-right: 5px;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;


export const LiList = styled.li`
  background-color:${props=>props.color};
  margin:7px 0px;
  &:hover{
    background-color:${props=>props.color} !important;
  }
`