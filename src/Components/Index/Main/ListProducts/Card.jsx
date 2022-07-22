import { useState } from "react";
import { Eye, Like, TirAhan } from "../../../Icons/Icons";
import Link from 'next/link'
import {
  CardStyle,
  BodyCard,
  IconStyle,
  DivNameCard,
  List,
  FooterCard,
} from "./ListProductsStyles";
const Card = ({ unitPrice, name, properties ,_id}) => {
  const [data, setData] = useState(properties.fa);
  const [scroll, setScroll] = useState(true);

  const goToTop = () => {
    const list = document.querySelector(".list");
    list.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
<Link href="/products/[id]" as={`/products/${_id}`}>
  <a>
  <CardStyle>
      <div>
        <BodyCard>
          <div className="sec-card">
            <IconStyle>
              <span className="number">{unitPrice}</span>
              <TirAhan />
            </IconStyle>
            <DivNameCard>
              {" "}
              <span className="id-product">(IPB) HEB ASRM</span>
              <h3 className="name-product">{name}</h3>
            </DivNameCard>
          </div>
          <div className="sec-card">
            <p className="title-list">موارد استفاده :</p>
            <List className="list" scroll={scroll}>
              {data.map((item) => {
                return (
                  <>
                    <li key={item?._id}>
                      <span>{item?.propertyName}</span>
                      <span>{item?.propertyValue}</span>
                    </li>
                  </>
                );
              })}
            </List>{" "}
            <span
              className="spanTxt"
              onClick={() => {
                setScroll(!scroll);
                goToTop();
              }}
            >
              ادامه مطلب
            </span>
          </div>
        </BodyCard>
        <FooterCard>
          <div>
            <a href="#" className="link-footer">
              مقالات مرتبط
            </a>
          </div>
          <div className="div-right">
            <span>
              <Like />
              109 بازدید کنند
            </span>
            <span>
              <Eye />
              109 بازدید کنند
            </span>
          </div>
        </FooterCard>
      </div>
    </CardStyle>
  </a>
</Link>
  );
};

export default Card;
