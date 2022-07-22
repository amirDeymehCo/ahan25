import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
  .section {
    width: 50%;
    margin-bottom: 100px;
  }
`;

export const SectionRight = styled.section`

  .card {
    border-radius: 20px;
    height: 315px;
    border: 1px solid #989898;
    text-align: center;
    overflow: hidden;
  }
  .card img {
    z-index:-1;
    border-radius:20px;
  }
  .footer-card {
    background-color: #55628c;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index:4;
    position: absolute;
    bottom:0px;
    width:100%;
    left:0px;
    border-radius:0px 0px 20px 20px;
  }
  .footer-card p {
    color: #ffffff;
    font-size: 14px;
  }
  .footer-card .name {
    margin: 0px 0px 8px 0px;
  }
  .footer-card span {
    font-size: 12px;
    color: #f1f1f1;
    margin: 0px 5px;
  }
  .footer-card .number {
    display: flex;
    align-items: center;
  }
  .mySwiper {
    padding: 0px 40px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #ffffff;
    font-weight: bold;
  }

  .root-slider {
    position: relative;
  }

  .cover {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    backdrop-filter: blur(8px);
  }
  .cover p {
    color: #ffffff;
    margin: 7px 0px;
  }
  .card:hover .cover {
    opacity: 1;
  }
  @media (max-width: 912px) {
    & {
      width: 30% !important;
    }
  }
  @media (max-width: 800px) {
    & {
      width: 100% !important;
    }
  }
`;

export const LinkShowPerson = styled.button`
  color: #ffffff;
  text-decoration: none;
  border: 2px solid #d16035;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  position: absolute;
  bottom: 0px;
  left: 50%;
  width: 85%;
  transform: translateY(150%) translateX(-50%);
  text-align: center;
  background-color: transparent;
  @media (max-width: 800px) {
    width: 90%;
  }

  @media (max-width: 660px) {
    width: 88%;
  }

  @media (max-width: 432px) {
    width: 82%;
  }

  &:hover {
    background-color: #d16035;
  }
`;
export const SectionQuestions = styled.section`
  padding: 0px 30px;

  .box {
    padding: 20px;
    border: 1px solid #989898;
    border-radius: 20px;
    position: relative;
    overflow-y: auto;
    max-height: 390px;
  }
  .box h4 {
    color: #ffffff;
    font-size: 18px;
    margin-bottom: 20px;
  }
  @media (max-width: 912px) {
    & {
      width: 70% !important;
    }
  }
  @media (max-width: 800px) {
    & {
      margin-top: 100px;
      width: 100% !important;
      padding: 10px !important;
    }
  }
`;

export const BoxQuestionStyle = styled.div`
  border: 1px solid #989898;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  padding: 19px;
  border-radius: 15px;
  margin: 15px 0px;
  overflow: hidden;
  position: relative;
  height: ${(props) => (props.active ? "auto" : "57px")};
  background-color: #374162;
  &:hover {
    background-color: #434d6d;
  }

  h5 {
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    color: ${(props) => (props.active ? "#ffffff" : " #989898")};
    font-size: 16px;
    margin-bottom: 15px;
  }
  p {
    color: #989898;
    font-size: 12px;
    line-height: 22px;
  }
`;

export const Vector1 = styled.div`
  position: absolute;
  transform: translateY(45%);
  svg {
    width: 60%;
    height: 60vw;
  }
`;

export const BtnArrow = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transform: ${(props) => (props.active ? "rotate(180deg)" : "rotate(0deg)")};
  -webkit-transform: ${(props) =>
    props.active ? "rotate(180deg)" : "rotate(0deg)"};
  -moz-transform: ${(props) =>
    props.active ? "rotate(180deg)" : "rotate(0deg)"};
  -ms-transform: ${(props) =>
    props.active ? "rotate(180deg)" : "rotate(0deg)"};
  -o-transform: ${(props) =>
    props.active ? "rotate(180deg)" : "rotate(0deg)"};
`;
