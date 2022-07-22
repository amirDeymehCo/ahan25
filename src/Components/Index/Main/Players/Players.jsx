import { Section, ContainerPlayers, Vector } from "./PlayerStyles";
import CardMusic from "./CardMusic/cardMusic";
import CardVideo from "./CardVideo/CardVideo";
import { VectorPlayers } from "../../../../Vectors";

const Players = () => {
  return (
    <Section>
      <ContainerPlayers className="container-players">
        <CardMusic />
        <CardVideo />
      </ContainerPlayers>
      <Vector className="vector">
        <VectorPlayers />
      </Vector>
    </Section>
  );
};

export default Players;
