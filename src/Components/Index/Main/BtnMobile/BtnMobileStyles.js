import styled from "styled-components";

export const BtnMobileStyles = styled.button`
  width: 119px;
  height: 119px;
  border-radius: 50%;
  background-color: #d16035;
  margin: 80px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  border: none;
  &:hover {
    transform: translateY(-5px);
    -webkit-transform: translateY(-5px);
    -moz-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    -o-transform: translateY(-5px);
  }
  @media (max-width: 678px) {
    width: 80px;
    height: 80px;
    margin: 50px 30px;
    svg {
      width: 50px;
      height: 50px;
    }
  }
  @media (max-width: 354px) {
    width: 50px;
    height: 50px;
    margin: 10px 30px;
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
