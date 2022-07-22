import styled from "styled-components";

export const ModalSection = styled.section`
  background-color: #00000042;
  display:flex;
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  align-items: center;
  justify-content: center;
  direction: rtl;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  opacity: 0;
  z-index: -10;
  ${(props) => props.show && `opacity:1;z-index:10;`}
`;
export const ContainerModal = styled.div`
  background-color: #ffff;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.3);
  width: 80%;
  height: 80%;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  border-radius: 20px;
  @media (max-width: 470px) {
    width: 90%;
  }
  ${(props) => {
    if (props.show) {
      return `
            transform: translateY(0%);
            -webkit-transform: translateY(0%);
            -moz-transform: translateY(0%);
            -ms-transform: translateY(0%);
            -o-transform: translateY(0%);
        `;
    } else {
      return `
            transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            -o-transform: translateY(-50%);
        `;
    }
  }}
`;

export const HeaderModal = styled.div`
  padding: 0px 30px;
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #555;
  h3 {
    color: #000;
    font-size: 20px;
  }
`;
