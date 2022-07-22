import { useEffect, useState } from "react";
import { Delete, TirAhan } from "../../../Icons";
import {
  Main,
  Container,
  Table,
  TrBody,
  BoxTable,
  BoxBox,
  ColP,
  BtnInc,
  Counter,
  TitleLevel,
} from "./TableLevel1Styles";
import OrderServices from "../../../Services/order";
import { AddHeader } from "../../../utils/axiosHelper/AxiosHelper";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, loadedCart } from "../../../redux/slices/cartSlice";

const TableLevel1 = ({ dataCart }) => {
  const [fakeCounter, setFakeCounter] = useState(0);
  const dispatch = useDispatch();
  const { token, profile } = useSelector((state) => state.profileUser);
  const cartUser = useSelector((state) => state.cartUser);
  const handelInc = (productId) => {
    setFakeCounter((c) => c + 1);
    AddHeader("token", token);
    const data = {
      userId: profile._id,
      productId,
      count: 1,
    };
    OrderServices.addCountFromCart(data, (res) => {
      if (res.code !== 200) {
        setFakeCounter((c) => c - 1);
      }
    });
  };

  const handelDec = (productId, count) => {
    setFakeCounter((c) => c - 1);

    AddHeader("token", token);
    const data = {
      userId: profile._id,
      productId,
      count,
    };
    OrderServices.deleteCountFromCart(data, (res) => {
      if (res.code !== 200) {
        setFakeCounter((c) => c + 1);
      }
    });
  };

  const handelDeleteProduct = (cartId, productId) => {
    let copyCartUser = { ...cartUser.data };
    dispatch(deleteCart(cartId));
    AddHeader("token", token);
    const data = {
      userId: profile._id,
      productId,
      count: 1000,
    };

    OrderServices.deleteCountFromCart(data, (res) => {
      if (res.code !== 200) {
        dispatch(loadedCart(copyCartUser));
        alert("مشکلی پیش آمده است بعدا امتحان کنید");
      }
    });
  };

  return (
    <Main>
      <TitleLevel>مرحله 1</TitleLevel>
      <Container>
        <BoxTable>
          {" "}
          <BoxBox>
            {" "}
            <Table>
              <thead>
                <tr className="t-header">
                  <th>محصول</th>
                  <th className="th-col-p">خصوصیات</th>
                  <th>تعداد</th>
                  <th>مبلغ سفارش</th>
                  <th className="last-menu-th"></th>
                </tr>
              </thead>
              <tbody>
                {dataCart.products &&
                  dataCart.products.map((product, i) => (
                    <TrBody key={i}>
                      <td className="td-name">
                        <div>
                          <TirAhan size="23" />
                        </div>
                        <p>{product.product.fa.name}</p>
                      </td>
                      <td className="td-col-p">
                        <ColP>
                          <div>
                            کارخانه : <span>2 میلی متر</span>
                          </div>
                          <div>
                            کارخانه : <span>2 میلی متر</span>
                          </div>
                          <div>
                            کارخانه : <span>2 میلی متر</span>
                          </div>
                        </ColP>
                      </td>
                      <td>
                        <BtnInc
                          onClick={() => handelDec(product.product._id, 1)}
                          outline={true}
                        >
                          -
                        </BtnInc>
                        <Counter>{product.count + fakeCounter}</Counter>
                        <BtnInc
                          onClick={() => handelInc(product.product._id)}
                          outline={false}
                        >
                          +
                        </BtnInc>
                      </td>
                      <td>{product.product.unitPrice} تومان</td>
                      <td className="last-menu-td">
                        <button
                          onClick={() =>
                            handelDeleteProduct(
                              product._id,
                              product.product._id
                            )
                          }
                        >
                          <Delete />
                        </button>
                      </td>
                    </TrBody>
                  ))}
              </tbody>
            </Table>
          </BoxBox>
        </BoxTable>
      </Container>
    </Main>
  );
};

export default TableLevel1;
