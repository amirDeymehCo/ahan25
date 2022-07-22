import styled from "styled-components";

export const Main = styled.main`
  width: 67%;
  @media (max-width: 864px) {
    width: 100%;
  }
`;

export const TitleLevel = styled.h2`
  color: #ffffff;
  font-size: 22px;
  margin-bottom: 70px;
  width: 100%;
  text-align: center;
`;

export const Container = styled.div`
  padding: 20px;
  border: 1px solid #9898984d;
  border-radius: 15px;
  h3 {
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 40px;
  }
`;
export const FormOwnerStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TypePost = styled.div`
  width: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    @media (max-width: 442px) {
      flex-direction: column;
      align-items: start;
      justify-content: start;
    }
  }
  h4 {
    color: #f7f7f7;
    font-size: 15px;
    margin: 15px 0px;
  }
`;
export const RaidoButton = styled.span`
  color: #cdcdcd;
  padding-right: 20px;
  width: 50%;
  font-size: 12px;
  position: relative;
  cursor: pointer;
  @media (max-width: 442px) {
    margin: 10px 0px;
    width: 100%;
  }
  &:before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    outline: 2px solid #e97b53;
    outline-offset: 3px;
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    background-color: ${(props) => (props.check ? "#e97b53" : "transparent")};
  }
`;

export const InputGet = styled.div`
  width: ${(props) => (props.width ? props.width : "47%")};
  margin: 20px 0px;
  @media (max-width: 564px) {
    width: 100%;
  }
  label {
    display: block;
    color: #ffffff;
    font-size: 15px;
    margin-bottom: 15px;
  }
  input {
    background-color: #495169;
    height: 45px;
    border: none;
    border-radius: 5px;
    width: 100%;
    color: #ffffff;
    padding: 0px 10px;
    font-size: 12px;
    &:focus {
      outline: none;
      background-color: #495163;
    }
  }
`;
