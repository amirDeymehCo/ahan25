import styled from "styled-components";

export const SectionPayment = styled.section`
  margin-top: 120px;
`;

export const Content = styled.div`
  margin-top: 50px !important;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  a {
    color: #f7f7f7;
    text-decoration: none;
  }
`;
export const Result = styled.div`
  width: 28%;
  border: 1px solid #989898;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  @media (max-width: 949px) {
    width: 100%;
    margin-top: 20px;
  }
  h3 {
    color: #ffffff;
    margin-bottom: 10px;
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
    border: 1px solid #989898;
    background-color: #465279;
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
  button {
    background-color: #117c64;
    color: #f7f7f7;
    padding: 12px 25px;
    border: none;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-right: 10px;
  }
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

export const Container = styled.div`
  width: 100%;
  max-height: 456px;
  background-color: #2e354c;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #989898;
`;

export const BoxTable = styled.div`
  width: 67%;
  overflow: auto;
  @media (max-width: 949px) {
    width: 100%;
  }
`;
export const BoxBox = styled.div`
  width: 100%;
  height: 370px;
  overflow: auto;
`;
export const Table = styled.table`
  width: 100%;
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
    border-bottom: 1px dashed #989898;

    &:hover {
      background-color: #374162;
    }

    td {
      color: #cbcbcb;
      font-size: 12px;
      width: 130px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .t-header {
    background-color: #535c79;
    border-radius: 15px 15px 0px 0px;
    border: none;
    &:hover {
      background-color: #2e354c;
    }
    th {
      color: #ececec;
      font-size: 15px;
      width: 130px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .logo-product {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fdfdf6;
    span {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      margin: 5px 0px;
    }
  }
`;

export const TrBody = styled.tr`
  .idCode {
    font-size: 12px;
  }
`;

export const BtnStatus = styled.button`
  border: none;
  width: 100%;
  padding: 8px 3px;
  color: #ffffff;
  max-width: 98px;
  background-color: ${(props) => (props.status ? "#117C64" : "#AF3E3E")};
`;

export const ContainerFavorites = styled.div`
  display: flex;
  width: 90%;
`;

export const BoxCard = styled.div`
  width: 189px;
  padding: 5px;
  @media (max-width: 650px) {
    width: 100%;
  }
`;
export const CardFavorites = styled.div`
  background-color: #374162;
  border-radius: 15px;
  border: 1px solid #989898;
  padding: 10px;
  display: flex;
  align-items: center;
  min-height: 89px;

  .text-show a {
    font-size: 8px !important;
  }
  .text-show svg {
    width: 8px;
    height: 8px;
  }
  @media (max-width: 382px) {
    flex-direction: column;
  }
`;
export const LogoFavorites = styled.div`
  height: 58px;
  width: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #55628c;
  border-radius: 15px;
  @media (max-width: 382px) {
    height: 95px;
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const TextFavorites = styled.div`
  padding-right: 5px;
  h2 {
    color: #ffffff;
    font-size: 13px;
    margin-bottom: 5px;
  }
`;

export const DivPrice = styled.div`
  margin-bottom: 5px;
  .number {
    font-size: 12px;
    color: #ffdd47;
    margin-left: 7px;
  }
  .price {
    color: #cbcbcb;
    font-size: 11px;
  }
`;

export const BoxCardTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  padding: 0px 30px;
  .head-card {
    font-size: 12px;
  }
`;

export const Type = styled.div`
  width: 28%;
  @media (max-width: 949px) {
    width: 100%;
    margin-top: 40px;
  }
  background-color: #374162;
  border-radius: 15px;
  padding: 20px 15px;
  min-height: 90px;
  max-height: 103px;
  border: 1px solid #989898;
  div {
    display: flex;
  }
  @media (min-width: 878px) {
    margin-top: 20px;
  }
  color: #f7f7f7;
  p {
    font-size: 13px;
    margin-bottom: 15px;
  }
`;
export const Check = styled.p`
  margin: 15px 0px;
  color: #f7f7f7;
  padding-right: 20px;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  &.right {
    margin-right: 40px;
  }
  &::before {
    content: "";
    width: 7px;
    height: 7px;
    outline: 2px solid #e97b53;
    outline-offset: 2px;
    position: absolute;
    background-color: ${(props) => (props.active ? "#e97b53" : "")};
    top: 50%;
    right: -5px;
    border-radius: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
  }
`;

export const InstallmentStyle = styled.div`
  border: 1px solid #989898;
  background-color: #374162;
  padding: 15px 20px;
  border-radius: 15px;
  width: 67%;
  @media (max-width: 949px) {
    width: 100%;
  }
  h4 {
    color: #f7f7f7;
    margin-bottom: 10px;
    font-size: 18px;
  }

  form {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 817px) {
      .input-group {
        width: 100%;
        padding: 0px;
      }
    }
  }
`;
