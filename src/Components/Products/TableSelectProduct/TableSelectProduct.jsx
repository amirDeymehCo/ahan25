import {
  ArrowBottomFlash,
  ArrowLeft,
  ArrowRight,
  ArrowTop,
  CardPlus,
  MenuDot,
  Print,
  RefreshTwo,
  Shear,
} from "../../../Icons";
import {
  BtnHeader,
  DivTextHeader,
  TableSelectProductStyles,
} from "./TableSelectStyles";
import { useRef } from "react";
import {
  Main,
  Container,
  Search,
  Table,
  TrBody,
  BoxTable,
  Footer,
  BoxBox,
  TdMenuDot,
  MenuDotList,
} from "../TableProductCompony/TableProductComponyStyles";
const data = [{}, {}, {}, {}, {}, {}];

const CahrtSvg = () => (
  <svg
    width="88"
    height="36"
    viewBox="0 0 88 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.60156 32.6236C6.24044 31.5713 9.23275 25.1548 13.5746 24.0763C15.8887 23.5015 17.7426 24.6203 19.8111 26.3587C21.8795 28.0971 21.4746 28.8478 26.1265 30.188C29.9654 31.2939 30.9695 19.3699 34.7312 19.828C38.4929 20.2862 40.2328 5.94982 44.2043 7.14656C48.1759 8.34331 48.9694 5.24917 52.7027 11.1132C56.436 16.9772 59.8851 3.30856 64.5716 2.11182C69.258 0.915077 70.4786 13.6171 72.7026 13.1384C74.9267 12.6597 76.9292 21.7107 78.8356 23.0271C80.7419 24.3436 81.2825 19.5614 85.3335 19.5614"
      stroke="#52E1C1"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5746 24.0763C9.23275 25.1548 6.24044 31.5713 2.60156 32.6236V35.2189H85.3335V19.5614C81.2825 19.5614 80.7419 24.3436 78.8355 23.0271C76.9292 21.7107 74.9267 12.6597 72.7027 13.1384C70.4786 13.6171 69.258 0.915077 64.5716 2.11182C59.8851 3.30856 56.436 16.9772 52.7027 11.1132C48.9694 5.24917 48.1759 8.34331 44.2043 7.14656C40.2328 5.94982 38.4929 20.2862 34.7312 19.828C30.9695 19.3699 29.9654 31.2939 26.1265 30.188C21.4746 28.8478 21.8795 28.0971 19.8111 26.3587C17.7426 24.6203 15.8887 23.5015 13.5746 24.0763Z"
      fill="#52E1C1"
      fillOpacity="0.1"
    />
  </svg>
);

const TableSelectProduct = () => {
  const table = useRef();

  const handelPrint = () => {};
  return (
    <TableSelectProductStyles>
      <Main>
        <Container>
          <Search className="header">
            <DivTextHeader>
              <h3>1 مورد انتخاب شده است</h3>
            </DivTextHeader>
            <div>
              <BtnHeader>
                <Shear size="30" color="#F7F7F7" />
              </BtnHeader>
              <BtnHeader onClick={handelPrint}>
                <Print size="30" color="#F7F7F7" />
              </BtnHeader>
              <BtnHeader>
                <CardPlus size="30" color="#F7F7F7" />
              </BtnHeader>
            </div>
          </Search>
          <BoxTable>
            {" "}
            <BoxBox>
              {" "}
              <Table id="table" ref={table}>
                <thead>
                  <tr className="t-header">
                    <th>
                      <input
                        className="check-input"
                        type="checkbox"
                        checked={true}
                        onChange={() => {}}
                      />
                      <div className="checkMark"></div>{" "}
                    </th>
                    <th>
                      ضمانت <ArrowBottomFlash />
                    </th>
                    <th>ابعاد</th>
                    <th>حالت فیزیکی</th>
                    <th>محل تحویل</th>
                    <th>قیمت</th>
                    <th>مقدار ارزش افزوده</th>
                    <th>نمودار تغیر قیمت</th>
                    <th className="last-menu-td"></th>
                    <th className="last-menu-td"></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((e, i) => (
                    <TrBody key={i}>
                      <td>
                        {" "}
                        <input
                          className="check-input"
                          type="checkbox"
                          checked={true}
                          onChange={() => {}}
                        />
                        <div className="checkMark"></div>{" "}
                      </td>
                      <td>2 میلی متر</td>
                      <td>1/5 *6 متر</td>
                      <td>کلاف</td>
                      <td>انبار تهران</td>
                      <td>160،000 تومان</td>
                      <td>14،000 تومان</td>
                      <td>
                        <CahrtSvg />
                      </td>
                      <td className="last-menu-td">
                        <CardPlus />
                      </td>
                      <TdMenuDot className="last-menu-td">
                        <MenuDot />
                        <MenuDotList>
                          <li>
                            {" "}
                            <a href="#">اشتراک گذاری</a>
                          </li>
                          <li>
                            {" "}
                            <a href="#">چاپ</a>
                          </li>
                        </MenuDotList>
                      </TdMenuDot>
                    </TrBody>
                  ))}
                </tbody>
              </Table>
              <Footer>
                <div className="right">
                  <RefreshTwo />
                  <span>15 May 2020 9:30 am</span>
                </div>
                <div className="left">
                  سطر ها در هر صفحه 5 <ArrowTop />
                  <span>1- 5 از 56</span>
                  <div>
                    <ArrowRight />
                    <ArrowLeft />
                  </div>
                </div>
              </Footer>
            </BoxBox>
          </BoxTable>
        </Container>
      </Main>
    </TableSelectProductStyles>
  );
};

export default TableSelectProduct;
