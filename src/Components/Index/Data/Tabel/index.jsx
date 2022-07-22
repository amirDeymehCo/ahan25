import Chart from "./Chart/Chart";
import SideBar from "./SideBar";
import { TableDivData, TableHeader, ChartAnSideBar } from "./Style";

const Table = () => {
  return (
    <TableDivData>
      <TableHeader>
        <button className="btn-primary">قیمت روز فلزات</button>
        <button className="btn-two">جداول وزنی</button>
      </TableHeader>
      <ChartAnSideBar>
        <SideBar />
        <Chart />
      </ChartAnSideBar>
    </TableDivData>
  );
};

export default Table;
