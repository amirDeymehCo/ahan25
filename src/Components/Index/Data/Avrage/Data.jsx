import { DataDiv, IconAndBtn, TextAndPrice } from "./Style";
import React, { useState } from "react";
import { RebarIcon, UpArrowIcon } from "../../../icons/Icons";
const Data = () => {
  const [active, setActive] = useState(0);
  const items = [
    {
      id: 0,
      icon: <RebarIcon size={24} color="#9fafef" />,
      btn: "کلاف",
      text: "میلگرد استیل آجدار کاویان",
      price: "1.9678",
      growth: " 12.5%+",
      iconGrowth: <UpArrowIcon size={14} />,
    },
    {
      id: 1,
      icon: <RebarIcon size={24} color="#9fafef" />,
      btn: "کلاف",
      text: "میلگرد استیل آجدار کاویان",
      price: "1.9678",
      growth: " 12.5%+",
      iconGrowth: <UpArrowIcon size={14} />,
    },
    {
      id: 2,
      icon: <RebarIcon size={24} color="#9fafef" />,
      btn: "کلاف",
      text: "میلگرد استیل آجدار کاویان",
      price: "1.9678",
      growth: " 12.5%+",
      iconGrowth: <UpArrowIcon size={14} />,
    },
    {
      id: 3,
      icon: <RebarIcon size={24} color="#9fafef" />,
      btn: "کلاف",
      text: "میلگرد استیل آجدار کاویان",
      price: "1.9678",
      growth: " 12.5%+",
      iconGrowth: <UpArrowIcon size={14} />,
    },
    {
      id: 4,
      icon: <RebarIcon size={24} color="#9fafef" />,
      btn: "کلاف",
      text: "میلگرد استیل آجدار کاویان",
      price: "1.9678",
      growth: " 12.5%+",
      iconGrowth: <UpArrowIcon size={14} />,
    },
    {
      id: 5,
      icon: <RebarIcon size={24} color="#9fafef" />,
      btn: "کلاف",
      text: "میلگرد استیل آجدار کاویان",
      price: "1.9678",
      growth: " 12.5%+",
      iconGrowth: <UpArrowIcon size={14} />,
    },
  ];
  return (
    <>
      {items.map((item) => {
        return (
          <DataDiv
            background={item.id === active ? "#203A7E45" : ""}
            key={item.id}
            onClick={() => {
              setActive(item.id);
            }}
          >
            <IconAndBtn>
              <span className="icon">{item.icon}</span>
              <button className="btn">{item.btn}</button>
            </IconAndBtn>
            <TextAndPrice>
              <p>{item.text}</p>
              <h2>
                {item.price}
                <span>تومان</span>
              </h2>
              <span className="span">
                <small> {item.iconGrowth}</small>
                {item.growth}
              </span>
            </TextAndPrice>
          </DataDiv>
        );
      })}
    </>
  );
};

export default Data;
