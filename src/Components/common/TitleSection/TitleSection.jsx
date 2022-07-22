import { Title } from "./TitleSectionStyles";
const TitleSection = ({ title, paragraf }) => {
  return (
    <Title>
      <h2>{title}</h2>
      <p>{paragraf}</p>
    </Title>
  );
};

export default TitleSection;
