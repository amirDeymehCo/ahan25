import styled from "styled-components";
export const Main = styled.div`
  direction: rtl;
`;
export const FormChange = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const DivButtonSubmitChange = styled.div`
  position: relative;
  width: 100%;
  button {
    height: 40px;
    width: 100px;
    color: #ffffff;
    background-color: #d16035;
    cursor: pointer;
    border: none;
    border-radius: 7px;
    font-size: 16px;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    margin-right: 20px;
    @media (min-width: 500px) {
      position: absolute;
      top: 0px;
      left: 50%;
      transform: translateX(-120%);
      -webkit-transform: translateX(-120%);
      -moz-transform: translateX(-120%);
      -ms-transform: translateX(-120%);
      -o-transform: translateX(-120%);
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const FormAddress = styled.form`
  padding-top: 65px;
  button {
    height: 40px;
    width: 100px;
    color: #ffffff;
    background-color: #d16035;
    cursor: pointer;
    border: none;
    border-radius: 7px;
    font-size: 16px;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transform: translateY(-120%);
    -webkit-transform: translateY(-120%);
    -moz-transform: translateY(-120%);
    -ms-transform: translateY(-120%);
    -o-transform: translateY(-120%);
    margin-right:20px; 
    &:hover {
      opacity: 0.8;
    }
`;
