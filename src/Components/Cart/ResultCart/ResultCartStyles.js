import styled from "styled-components";

export const Result = styled.div`
  margin-top: 85px;

  text-align: center;
  width: 30%;
  @media (max-width: 864px) {
    width: 100%;
  }
  a {
    color: #f7f7f7;
  }
  h3 {
    color: #ffffff;
    margin-bottom: 20px;
    font-size: 22px;
  }
`;

export const Price = styled.span`
  font-size: 13px;
  span {
    color: #cbcbcb;
    font-size: 11px;
    margin-right: 5px;
  }
`;

export const ListResult = styled.ul`
  list-style: none;
  li {
    height: 47px;
    width: 100%;
    border: 1px solid #9898984d;
    background-color: #46527940;
    margin: 15px 0px;
    border-radius: 10px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
  }
`;

export const FooterResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  p {
    color: #f7f7f7;
    margin: 5px 0px;
  }
  .price {
    font-size: 21px;
    color: #ffffff;
    span {
      font-size: 13px;
      color: #cbcbcb;
      margin: 0px 7px;
    }
  }
`;

export const BtnResult = styled.button`
  background-color: ${(props) => props.color};
  color: #f7f7f7;
  padding: 12px 25px;
  border: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;
`;

export const Box = styled.div`
  border: 1px solid #9898984d;
  padding: 20px;
  border-radius: 15px;
`;
