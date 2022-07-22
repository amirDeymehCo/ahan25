import styled from "styled-components";

export const LinkStyle = styled.span`
  color: #ffffff;
  text-decoration: none;
  font-size: 12px;
  word-spacing: 1.5px;
  margin-right: 5px;
  padding: 4px 3px;
  border-bottom: 1px solid #d16035;
  display: flex;
  align-items: center;
  width:100px;
  svg {
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    margin-right:5px;
  }
  &:hover svg {
    transform: translateX(-3px);
    -webkit-transform: translateX(-5px);
    -moz-transform: translateX(-5px);
    -ms-transform: translateX(-5px);
    -o-transform: translateX(-5px);
  }
`;
