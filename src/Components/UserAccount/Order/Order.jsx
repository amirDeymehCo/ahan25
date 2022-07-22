import { useState, useEffect } from "react";
import OrderServices from "../../../Services/auth/Order/orderServices";
import { AddHeader } from "../../../utils/axiosHelper/AxiosHelper";
import { Not } from "../Favorites/FavoritesStyles";
import Link from "next/link";
import {
  Container,
  Search,
  Table,
  TrBody,
  BtnStatus,
  BoxTable,
  Main,
  Footer,
  BoxBox,
} from "./OrderStyles";
import {
  ArrowBottomFlash,
  ArrowLeft,
  ArrowRight,
  ArrowTop,
  SearchIcon,
} from "../../Icons/Icons";
import moment from "moment-jalaali";
import { useSelector } from "react-redux";

const Order = () => {
  const [dataOrder, setDataOrder] = useState([]);
  const { token } = useSelector((state) => state.profileUser);

  useEffect(() => {
    AddHeader("token", token);
    OrderServices.listOrder((res) => {
      if (res.code === 200 || res.code === 20) {
        setDataOrder(res.result);
      }
    });
  }, [token]);

  return (
    <Main>
      {dataOrder.length ? (
        <Container>
          <Search>
            <div>
              <SearchIcon />
              <input
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
                      کد رهگیری <ArrowBottomFlash />
                    </th>
                    <th>تاریخ</th>
                    <th>وضعیت</th>
                    <th>مبلغ سفارش</th>
                    <th>محصولات</th>
                  </tr>
                </thead>
                <tbody>
                  {dataOrder.map((e, i) => (
                    <TrBody key={e._id}>
                      {console.log(e.products[0].product.updatedAt)}
                      <td className="idCode">ESD56KSD</td>
                      <td>
                        {moment(e.products[0].product.updatedAt).format(
                          "jYYYY/jMM/jDD"
                        )}
                      </td>
                      <td>
                        <BtnStatus status={e.status}>
                          {e.status ? "تحویل داده شده" : "هنوز ارسال نشده"}
                        </BtnStatus>
                      </td>
                      <td>
                        <span className="number">
                          {Number(e.products[0].product.unitPrice) *
                            Number(e.products[0].count)}
                        </span>
                        <span className="price">تومان</span>
                      </td>
                      <td>تیرآهن و...</td>
                    </TrBody>
                  ))}
                </tbody>
              </Table>
              <Footer>
                <div className="col-8">
                  سطر ها در هر صفحه 5 <ArrowTop />
                </div>
                <div className="col-4">
                  1- 5 از 56
                  <div>
                    <ArrowRight />
                    <ArrowLeft />
                  </div>
                </div>
              </Footer>
            </BoxBox>
          </BoxTable>
        </Container>
      ) : (
        <Not>
          <h2>شما محصولی سفارش نداده اید</h2>
          <Link href="/products">
            <a>مشاهده محصولات</a>
          </Link>
        </Not>
      )}
    </Main>
  );
};

export default Order;
