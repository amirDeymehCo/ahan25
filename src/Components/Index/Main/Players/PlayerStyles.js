import styled from "styled-components";
export const Vector = styled.div`
  position: absolute;
  width: 70%;
  height: 120vw;
  transform: translateY(-80%);
  z-index: -1;
  svg {
    width: 100%;
    height: 120vw;
  }
`;
export const ContainerPlayers = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  flex-wrap: wrap;
  z-index: 3;
`;
export const CardPlayer = styled.div`
  padding: 25px;
  border: 1px solid #989898;
  border-radius: 15px;
  width: 50%;
  margin-left: ${(props) => props.marginLeft};
`;
export const TitleCardPlayer = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 28px;
  svg {
    margin-left: 7px;
  }
`;
export const HeaderCardPlayer = styled.div`
  height: 229px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  margin: 20px 0px;
  overflow: hidden;
`;
export const SharePlayer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 3;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const BgMusic = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`;
export const BgVideo = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`;
export const DivBtnPlayer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 55%;
  height: 100%;
  transform: translateY(-60%) translateX(-50%);
  -webkit-transform: translateY(-60%) translateX(-50%);
  -moz-transform: translateY(-60%) translateX(-50%);
  -ms-transform: translateY(-60%) translateX(-50%);
  -o-transform: translateY(-60%) translateX(-50%);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .btn-player {
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
  }
  .btn-player:hover {
    opacity: 0.8;
  }
  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
  .play {
    width: 55px;
    height: 55px;
    background-color: #e97b53;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .next,
  .prev {
    width: 24px;
    height: 24px;
  }
  .name-video {
    color: #ffffff;
    font-size: 16px;
  }
  @media (max-width: 382px) {
    width: 80%;
  }
`;
export const Section = styled.section`
  padding: 20px 10px;

  .cover-bg {
    background: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.7)
    );
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
  }

  .prograss-time {
    height: 100%;
    background-color: #e97b53;
    float: left;
  }
  .div-text-time {
    width: 100%;
    background-color: transparent;
    position: absolute;
    bottom: 50px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 7px;
    color: #ffffff;
    font-size: 10px;
  }

  @media (max-width: 779px) {
    .container-players .card-player {
      margin: 25px 0px;
      width: 100%;
    }
    .container-players .music {
      margin-left: 0px;
    }
  }

  @media (max-width: 480px) {
    .container-players .card-player {
      padding: 20px 10px;
    }
  }
  @media (min-width: 780px) {
    .container-players {
      flex-wrap: nowrap;
    }
  }
  @media (max-width: 382px) {
    .div-btn-player {
      width: 80%;
    }
    & {
      padding: 20px 0px;
    }
  }
`;

export const ListPlayer = styled.div`
  margin-bottom: 15px;
  border: 1px solid #cbcbcb;
  border-radius: 20px;
  padding: 0px 15px;
  ul li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 10px;
    border-bottom: 1px solid #989898;
  }

  ul li:last-child {
    border: none;
  }
  ul li h5 {
    color: #ffffff;
    font-size: 13px;
    margin-bottom: 9px;
  }

  ul li p {
    color: #cbcdcb;
    font-size: 12px;
    margin-bottom: 7px;
  }

  .div-likes {
    display: flex;
    align-items: center;
  }
  ul li .div-likes span {
    color: #cbcbcb;
    font-size: 11px;
    display: flex;
    align-items: center;
    margin: 0px 7px;
  }
  .play-list {
    border: none;
    border-radius: 50%;
    background-color: #6474a5;
    width: 42px;
    height: 42px;
    cursor: pointer;
    transition: all 0.4s ease;
  }
  .play-list:hover {
    opacity: 0.8;
  }
`;
export const DivTextTimeMusic = styled.div`
  width: 80%;
  transform: translateX(15%);
  -webkit-transform: translateX(15%);
  -moz-transform: translateX(15%);
  -ms-transform: translateX(15%);
  -o-transform: translateX(15%);
  bottom: 70px;
  background-color: transparent;
  position: absolute;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 7px;
  color: #ffffff;
  font-size: 10px;
`;
export const DivTextVideo = styled.div`
  width: 100%;
  background-color: transparent;
  position: absolute;
  bottom: 50px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 7px;
  color: #ffffff;
  font-size: 10px;
`;
export const MusicCard = styled.div`
  @media (min-width: 500px) {
    .header-card {
      padding: 0px 40px;
    }
  }
`;
export const DivProgressVideo = styled.div`
  width: 100%;
  height: 3px;
  background-color: #8c98be;
  position: absolute;
  bottom: 40px;
  left: 0px;
`;
export const DivProgressMusic = styled.div`
  bottom: 65px;
  height: 3px;
  background-color: #8c98be;
  position: absolute;
  left: 0px;
  width: 80%;
  transform: translateX(15%);
  -webkit-transform: translateX(15%);
  -moz-transform: translateX(15%);
  -ms-transform: translateX(15%);
  -o-transform: translateX(15%);
  border-radius: 10px;
`;
export const ProgressTime = styled.div`
  width: ${(props) => props.width};
`;

export const FooterHeaderCardPlayer = styled.div`
  width: 100%;
  height: 40px;
  background-color: #3d4664d3;
  z-index: 2;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #cbcbcb;
  font-size: 11px;
  div {
    display: flex;
    align-items: center;
  }
  div svg {
    margin: 0px 3px;
  }
`;
