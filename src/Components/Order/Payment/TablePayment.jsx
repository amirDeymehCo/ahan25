import { useEffect, useState } from "react";
import BtnShow from "../../common/BtnShow/BtnShow";
import { TirAhan } from "../../Icons/Icons";
import {
  Table,
  Price,
  TrBody,
  BtnStatus,
  BoxTable,
  BoxBox,
  CardFavorites,
  LogoFavorites,
  TextFavorites,
  BoxCard,
  DivPrice,
  ContainerFavorites,
  BoxCardTable,
} from "./PaymentStyles";
import ProductServices from "../../../Services/Products/Products";
import Link from "next/link";
import { useSelector } from "react-redux";
const TablePayments = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const orderUser = useSelector((state) => state.orderUser);
  useEffect(() => {
    ProductServices.getListProduct((res) => {
      if (res.code === 200) {
        setDataProducts(res.result);
      }
    });
  }, []);

  const products = orderUser.data[0].products;

  return (
    <BoxTable>
      {" "}
      <BoxBox>
        {" "}
        <Table>
          <thead>
            <tr className="t-header">
              <th>محصول</th>
              <th>وضعیت</th>
              <th>تعداد</th>
              <th>تخفیف</th>
              <th>مبلغ سفارش</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((e, i) => (
                <TrBody key={e._id}>
                  <td className="logo-product">
                    <span>
                      <TirAhan size="25" />
                    </span>
                    {e.product ? e.product.fa.name : "-"}
                  </td>
                  <td>
                    {" "}
                    <BtnStatus status={e.product}>
                      {e.product ? "موجود هست" : "موجود نیست"}
                      {}
                    </BtnStatus>
                  </td>
                  <td>{e.product ? e.count : "-"}</td>
                  <td>
                    <Price>
                      ندارد
                      {/* <span>تومان</span> */}
                    </Price>
                  </td>
                  <td>
                    {" "}
                    <Price>
                      {e.product.unitPrice}
                      <span>تومان</span>
                    </Price>
                  </td>
                </TrBody>
              ))}
          </tbody>
          <BoxCardTable>
            <p className="head-card">محصول پیشنهادی جایگزین</p>
            <ContainerFavorites>
              {" "}
              {dataProducts.splice(0, 3).map((e, i) => (
                <Link
                  href="/products/[id]"
                  key={e._id}
                  as={`/products/${e._id}`}
                >
                  <a>
                    <BoxCard>
                      <CardFavorites>
                        <LogoFavorites>
                          <TirAhan size="29" />
                        </LogoFavorites>
                        <TextFavorites>
                          <h2>{e.fa.name}</h2>
                          <DivPrice>
                            <span className="number">{e.unitPrice}</span>
                            <span className="price">تومان</span>
                          </DivPrice>
                          <div className="text-show">
                            <BtnShow text={"مشاهده بیشتر"} />
                          </div>
                        </TextFavorites>
                      </CardFavorites>
                    </BoxCard>
                  </a>
                </Link>
              ))}
            </ContainerFavorites>
          </BoxCardTable>
        </Table>
      </BoxBox>
    </BoxTable>
  );
};

export default TablePayments;
