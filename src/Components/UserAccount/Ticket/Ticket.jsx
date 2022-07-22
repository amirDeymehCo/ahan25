import {
  Container,
  Search,
  Table,
  TBody,
  BtnStatus,
  BoxTable,
  Main,
  BoxBox,
} from "./TicketStyles";
import { useEffect, useState } from "react";
import { ArrowBottomFlash, SearchIcon } from "../../Icons/Icons";
import { AddHeader } from "../../../utils/axiosHelper/AxiosHelper";
import TicketsServices from "../../../Services/auth/tickets/tickets";
import { Not } from "../Favorites/FavoritesStyles";
import moment from "moment-jalaali";
import { useSelector } from "react-redux";

const Ticket = () => {
  const [dataTickets, setDataTickets] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState("");
  const { token } = useSelector((state) => state.profileUser);

  useEffect(() => {
    AddHeader("token", token);
    TicketsServices.listTickets((res) => {
      if (res.code === 200) {
        setDataTickets(res.result.tickets);
        setFilterData(res.result.tickets);
      }
    });
  }, [token]);

  const handelSearch = (event) => {
    setSearch(event.target.value);
    if (search.trim() !== "") {
      const copyData = [...dataTickets];
      const newData = copyData.filter((x) => x.title.includes(search));
      setFilterData(newData);
    } else {
      setFilterData(dataTickets);
    }
  };

  return (
    <Main>
      {dataTickets.length ? (
        <Container>
          <Search>
            <div>
              <SearchIcon />
              <input
                value={search}
                onChange={handelSearch}
                type="search"
                placeholder="عبارت مورد نظر خود را سرچ کنید..."
              />
            </div>
          </Search>
          <BoxTable>
            {" "}
            <BoxBox>
              {" "}
              <Table>
                <thead>
                  <tr className="t-header">
                    <th>
                      عنوان <ArrowBottomFlash />
                    </th>
                    <th>تاریخ</th>
                    <th>وضعیت</th>
                    <th>بخش</th>
                  </tr>
                </thead>
                <tbody>
                  {filterData.map((e, i) => (
                    <TBody key={e._id}>
                      <td className="idCode">{e.title}</td>
                      <td>{moment(e.createdAt).format("jYYYY/jMM/jDD")}</td>
                      <td>
                        <BtnStatus status={e.messages[0].read}>
                          {e.messages[0].read
                            ? "پاسخ داده شده"
                            : " خوانده نشده "}
                        </BtnStatus>
                      </td>
                      <td>میلگرد</td>
                    </TBody>
                  ))}
                </tbody>
              </Table>
            </BoxBox>
          </BoxTable>
        </Container>
      ) : (
        <Not>
          <h2>موردی پیدا نشد</h2>
        </Not>
      )}
    </Main>
  );
};

export default Ticket;
