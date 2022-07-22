import Btn from "./Btn";
import ImageNews from "./ImageNews";
import ListNews from "./ListNews";
import { NewsDiv, NewsDivData } from "./Style";

const News = () => {
  return (
    <NewsDivData>
      <Btn />
      <NewsDiv>
        <ImageNews />
        <ListNews />
      </NewsDiv>
    </NewsDivData>
  );
};

export default News;
