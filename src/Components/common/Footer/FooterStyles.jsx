import styled from "styled-components";

export const FooterStyle = styled.footer`
  padding: 40px 20px;
  background-color: #2e354c;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Col6 = styled.div`
  width: 50%;
  margin: 0px 10px;
  text-align: center;
  ul {
    list-style: none;
    padding-left: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .free {
    border: none;
  }
`;
export const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px 20px 5px 10px;
  position: relative;
  border-bottom: ${(props) => props.border};
  margin: 5px 0px;
  min-height: 45px;
  .name {
    color: #ffffff;
    font-size: 13px;
    text-decoration: none;
  }
  .date {
    color: #cbcbcb;
    margin: 3px 0px;
    font-size: 9px;
  }
  .item-list::before {
    content: ">";
    position: absolute;
    top: 8px;
    right: 0px;
    width: 5px;
    height: 5px;
    color: #e97b53;
  }
`;
export const TextGroup = styled.div`
  display: flex;
  margin: 10px 0px;
  color: #e6e7e8;
  span {
    margin-left: 10px;
    width: 30px;
    height: 30px;
  }
  span svg {
    width: 24px;
    height: 24px;
  }
  a {
    margin: 0px 5px;
  }
  @media (max-width: 658px) {
    align-items: center;
    justify-content: center;
    span {
      margin-top: 10px;
    }
  }
`;
export const Col4 = styled.div`
  width: 33.33333333333333%;
  padding: 0px 10px;
  ${(props) => props.row && "display:flex;"}
  justify-content:space-between;
  margin: 20px 0px;

  h3 {
    color: #ffffff;
    font-size: 14px;
    margin: 7px 0px 20px 0px;
  }
  p {
    color: #cbcbcb;
    font-size: 12px;
    line-height: 25px;
  }

  .logos svg {
    width: 25px;
    height: 25px;
    margin: 10px;
  }
  @media (max-width: 860px) {
    width: 50%;
  }
  @media (max-width: 658px) {
    width: 100%;
    text-align: center;
  }
`;

export const CopyRight = styled.div`
  height: 39px;
  width: 100%;
  background-color: #2d3651;
  text-align: center;
  color: #ffffff;
  position: relative;
  line-height: 39px;
  button {
    position: absolute;
    top: 50%;
    right: 20px;
    border: none;
    background-color: transparent;
    transform: rotate(180deg) translateY(50%);
    -webkit-transform: rotate(180deg) translateY(50%);
    -moz-transform: rotate(180deg) translateY(50%);
    -ms-transform: rotate(180deg) translateY(50%);
    -o-transform: rotate(180deg) translateY(50%);
    cursor: pointer;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    &:hover {
      transform: rotate(180deg) translateY(60%);
      -webkit-transform: rotate(180deg) translateY(60%);
      -moz-transform: rotate(180deg) translateY(60%);
      -ms-transform: rotate(180deg) translateY(60%);
      -o-transform: rotate(180deg) translateY(60%);
    }
    @media (max-width: 384px) {
      & {
        transform: rotate(180deg) translateY(150%);
      }
    }
  }
`;
