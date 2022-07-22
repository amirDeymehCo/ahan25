import styled from "styled-components";

export const Main = styled.main`
  padding: 50px;
  display: grid;
  width: 100%;
  direction: rtl;
  @media (min-width:917px) {
    gap: 30px 50px;
    grid-template-areas:
    "s s s s s s s l l l l l l m"
    "s s s s s s s d d d d d d d";
  }
  @media (max-width:917px){
    gap: 0px 33px;
    grid-template-areas:
    "l l l l l l l l l l l m"
    "s s s s s s s s s s s s"
    "d d d d d d d d d d d d"
    ;
  }
  @media (max-width:478px){
    padding: 20px;
    gap: 0px 0px;
    grid-template-areas:
    "m m m m m m m m m m m m"
    "l l l l l l l l l l l l"
    "s s s s s s s s s s s s"
    "d d d d d d d d d d d d"
    ;
  }

`;

export const LogoProduct = styled.div`
  grid-area: l;
  height: 370px;
  background-color: blue;
  background-color: rgba(67, 77, 109, 0.5);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  button {
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
export const MenuProduct = styled.ul`
  grid-area: m;
  list-style: none;
  @media(max-width:478px){
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ItemMenuProduct = styled.li`
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#E97B53" : "#55628c")};
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  transition: opacity 0.4s ease;
  -webkit-transition: opacity 0.4s ease;
  -moz-transition: opacity 0.4s ease;
  -ms-transition: opacity 0.4s ease;
  -o-transition: opacity 0.4s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  span {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Description = styled.div`
  grid-area: d;
`;

export const BoxColumns4 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const DivColumn = styled.div`
  width: 50%;
  @media(max-width:478px){
    width:100%;
    justify-content:space-between;


  }
  margin: 10px 0px;
  display: flex;
  align-items: center;
  span {
    color: #fdfdf6;
    margin-left: 15px;
  }
  .link-dis {
    color: #cbcbcb;
    padding: 2px;
    text-decoration: none;
    border-bottom: 1px solid #cbcbcb;
  }
`;
export const Price = styled.span`
  color: #ffffff;
  font-size: 22px;
  margin-left:0px !important;
  span {
    color: #cbcbcb;
    margin-right: 7px;
    font-size: 13px;
    margin-left:0px !important;

  }
`;

export const BtnAdded = styled.button`
  background-color: #117c64;
  height: 58px;
  padding: 0px 20px;
  color: #fffcf2;
  border: none;
  border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 19px;
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 0.8;
  }
  svg {
    margin-left: 15px;
  }
`;

export const BtnInc = styled.button`
  width: 50px;
  height: 47px;
  background-color: ${(props) => (props.outline ? "transparent" : "#6474a5")};
  border: 1px solid #5d6f94;
  border-radius: 7px;
  cursor: pointer;
  font-size: 30px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 0.8;
  }
`;

export const NumberAdded = styled.p`
  margin: 0px 20px;
  font-size: 27px;
  color: #ffffff;
`;
