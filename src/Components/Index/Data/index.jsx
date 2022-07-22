import Average from "./Avrage";
import News from "./News";
import { DataDiv } from "./style";
import Table from "./Tabel";

const Data = () => {
  return (
    <DataDiv>
      <News />
      <div className="divTable">
        <Table />
        <Average />
      </div>
    </DataDiv>
  );
};

export default Data;
