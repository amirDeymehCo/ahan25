import styled from "styled-components";

export const SectionOrder = styled.section`
  padding: 25px 20px;
  border: 1px solid #989898;
  border-radius: 15px;
  background-color: #45517840;
  margin-bottom: 25px;
  h2 {
    color: #ffffff;
    margin-bottom: 40px;
    width: 100%;
    text-align: center;
    font-size: 26px;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
  list-style: none;
  .address {
    width: 28%;
    margin: 20px 5px;
    span
      text-align: start;
      font-size: 12px;
      line-height: 20px;
    }
  }
  li {
    color: #ececec;
    font-size: 12px;
    width: 25%;
    display: flex;
    margin: 20px 15px;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1019px) {
      margin: 20px 5px;
    }
    @media (max-width: 953px) {
      width: 50%;
      margin: 20px 0px;
      text-align: center;
      &.address {
        width: 50%;
        margin: 20px 0px;
      }
    }
    @media (max-width:711px){
      width:100%;
      &.address{
        width:100%;
      }
    }
    span {
      text-align: center;
      width: 50%;
    }
  }
`;

export const BtnStatus = styled.div`
  width: 50%;
  text-align: center;
  button {
    min-height: 30px;
    border: none;
    padding: 7px;
    max-width: 151px;
    font-size: 10px;
    color: #cbcbcb;
    background-color: ${(props) => (props.status ? "#117C64" : "#AF3E3E")};
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
