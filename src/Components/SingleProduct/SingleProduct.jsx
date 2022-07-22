/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  Main,
  MenuProduct,
  LogoProduct,
  Description,
  ItemMenuProduct,
  Price,
  BoxColumns4,
  DivColumn,
  BtnAdded,
  BtnInc,
  NumberAdded,
} from "./SingleProductStyles";
import SideBar from "./SideBar/SideBar";
import { CardPlus, QuestionIcon, Star, TirAhan } from "../Icons/Icons";
import { Shear } from "../Icons/Icons";
import { range } from "lodash";
import Image from "next/image";
import OrderServices from "../../Services/auth/Order/orderServices";
import { AddHeader } from "../../utils/axiosHelper/AxiosHelper";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";

const dataMenu = [{}, {}, {}, {}, {}];

const SingleProduct = ({ product }) => {
  const [numberLength, setNumberLength] = useState(1);
  const { token } = useSelector((state) => state.profileUser);

  const handelAddTocard = () => {
    if (token.loading !== false) {
      AddHeader("token", token);
      let { id } = jwt_decode(token);
      const data = {
        userId: id,
        productId: product._id,
        count: numberLength,
      };
      OrderServices.addToCard(data, (res) => {
        console.log(res);
      });
    } else {
      alert("ابتدا وارد سایت شوید");
    }
  };

  return (
    product && (
      <Main>
        <SideBar product={product} _id={product._id} name={product.fa.name} />
        <LogoProduct>
          <button>
            <Shear color="#EFEFED" size="30" />
          </button>
          <TirAhan size="180" />
          {/* <Image
          src={`https://metalbackend.ryt-service.ir/${product.icon}`}
          width={500}
          height={500}
        /> */}
        </LogoProduct>
        <MenuProduct>
          {dataMenu.map((e, i) => (
            <ItemMenuProduct key={i} active={i === 0}>
              <span>
                {" "}
                <TirAhan size="28" />
              </span>{" "}
            </ItemMenuProduct>
          ))}
        </MenuProduct>
        <Description>
          <BoxColumns4>
            <DivColumn>
              <span>امتیاز :</span>
              <div>
                {product.rating &&
                  product.rating < 5 &&
                  range(product.rating - 5).map((e, i) => (
                    <Star color="#989898" key={i} size="28" />
                  ))}
                {product.rating &&
                  range(product.rating).map((e, i) => (
                    <Star key={i} size="28" />
                  ))}
                {!product.rating &&
                  range(5).map((e, i) => (
                    <Star color="#989898" key={i} size="28" />
                  ))}
              </div>
            </DivColumn>
            <DivColumn>
              <span>4.5 </span>
              <a href="#" className="link-dis">
                ({product.__v} دیدگاه ثبت شده است )
              </a>
            </DivColumn>
            <DivColumn>
              <span>قیمت :</span>
              <Price>
                {numberLength * Number(product.unitPrice)}
                <span>تومان</span>
              </Price>
            </DivColumn>
            <DivColumn>
              <span>
                <QuestionIcon size="26" />
              </span>
              <a href="#" className="link-dis">
                راهنمای خرید
              </a>
            </DivColumn>
            <DivColumn>
              <BtnInc
                onClick={() => setNumberLength((c) => c - 1)}
                outline={true}
              >
                -
              </BtnInc>
              <NumberAdded>{numberLength}</NumberAdded>
              <BtnInc onClick={() => setNumberLength((c) => c + 1)}>+</BtnInc>
            </DivColumn>
            <DivColumn>
              <BtnAdded onClick={handelAddTocard}>
                <CardPlus />
                افزودن به سبد خرید
              </BtnAdded>
            </DivColumn>
          </BoxColumns4>
        </Description>
      </Main>
    )
  );
};

export default SingleProduct;
