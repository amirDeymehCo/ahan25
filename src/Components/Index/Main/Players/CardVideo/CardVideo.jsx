import BtnShow from "../../../../common/BtnShow/BtnShow";
import HeaderCard from "./HeaderCard";
import ListPlayers from "../ListPlayers";
import { MusicCard, TitleCardPlayer } from "../PlayerStyles";
import { CardPlayer } from "../PlayerStyles";
import { VideoPlayer } from "../../../../Icons/Icons";

const CardVideo = () => {
  const data = [{}, {}, {}, {}];

  return (
    <CardPlayer marginLeft={"0px"} className="card-player video">
      <TitleCardPlayer>
        <VideoPlayer />
        ویدئو
      </TitleCardPlayer>
      <HeaderCard />
      <ListPlayers data={data} />
      <BtnShow text="مشاهده بیشتر" href="#" />
    </CardPlayer>
  );
};

export default CardVideo;
