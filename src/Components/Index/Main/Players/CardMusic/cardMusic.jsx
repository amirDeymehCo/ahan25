import BtnShow from "../../../../common/BtnShow/BtnShow";
import { useRef } from "react";
import { CardPlayer, MusicCard, TitleCardPlayer } from "./../PlayerStyles";
import HeaderCard from "./headerCard";
import ListPlayers from "../ListPlayers";
import { Voice } from "../../../../Icons/Icons";

const CardMusic = () => {
  const musicAuto = useRef();
  const data = [{}, {}, {}, {}];

  return (
    <CardPlayer marginLeft={"40px"} className="card-player video">
      <audio src="" ref={musicAuto}></audio>
      <TitleCardPlayer>
        <Voice />
        پادکست
      </TitleCardPlayer>
      <HeaderCard musicAuto={musicAuto} />
      <ListPlayers data={data} />
      <BtnShow text="مشاهده بیشتر" href="#" />
    </CardPlayer>
  );
};

export default CardMusic;
