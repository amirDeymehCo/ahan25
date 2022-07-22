import styled from "styled-components";

export const ContainerFavorites = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height:100%;
`;

export const BoxCard = styled.div`
  width: 50%;
  padding: 20px 10px;
  @media (max-width: 650px) {
    width: 100%;
  }
`;
export const CardFavorites = styled.div`
  background-color: #374162;
  border-radius: 7px;
  border: 1px solid #989898;
  padding  15px  ;
  display: flex;
  align-items: center;
  min-height:130px;
  .text-show a{
    font-size:10px !important;
  }
  @media(max-width:382px){
    flex-direction: column;
  }
`;
export const LogoFavorites = styled.div`
  height: 85px;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #55628c;
  border-radius: 7px;
  @media (max-width: 382px) {
    height: 95px;
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const TextFavorites = styled.div`
  padding-right: 15px;
  h2 {
    color: #ffffff;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const DivPrice = styled.div`
  margin-bottom: 5px;
  .number {
    font-size: 14px;
    color: #ffdd47;
    margin-left: 7px;
  }
  .price {
    color: #cbcbcb;
    font-size: 14px;
  }
`;


export const Not= styled.div`
  width:100%;
  height:100%;
  text-align: center;
  justify-content:center;
  align-items: center;
  display: flex;
  flex-direction: column;
  h2{
    color: #ffffff;
    font-size:25px;
  }
  a{
    border: none;
    width: 100%;
    padding: 13px 10px;
    color: #ffffff;
    max-width: 150px;
    font-size:14px;
    background-color: #117C64;
    border-radius: 3px;
    cursor: pointer;
    margin:30px 0px;
    }
`