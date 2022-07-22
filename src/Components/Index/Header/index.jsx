import { useState } from "react";
import {
  GirderIcon,
  VertebraeIcon,
  CornerIcon,
  PipeIcon,
  ProfileIcon,
  PaperIcon,
  IronIcon,
  RebarIcon,
} from "../../Icons/Icons";
import { Div, DivSmall, HeaderDiv } from "./HeaderStyle";
const Header = () => {
  const [colorHover, setColorHover] = useState({ index: 0, color: "" });
  const listItems = [
    { id: 0, text: "بلاگ", icon: "" },
    { id: 1, text: "درباره ما", icon: "" },
    {
      id: 2,
      text: "میلگرد",
      icon: (
        <IronIcon
          color={colorHover.index !== 2 ? "#535C79" : colorHover.color}
        />
      ),
    },
    {
      id: 3,
      text: "تیر آهن و هاش",
      icon: (
        <RebarIcon
          size={40}
          color={colorHover.index !== 3 ? "#535C79" : colorHover.color}
        />
      ),
    },
    {
      id: 4,
      text: "ورق",
      icon: (
        <PaperIcon
          color={colorHover.index !== 4 ? "#535C79" : colorHover.color}
        />
      ),
    },
    {
      id: 5,
      text: "پروفیل",
      icon: (
        <ProfileIcon
          color={colorHover.index !== 5 ? "#535C79" : colorHover.color}
        />
      ),
    },
    {
      id: 6,
      text: "لوله",
      icon: (
        <PipeIcon
          color={colorHover.index !== 6 ? "#535C79" : colorHover.color}
        />
      ),
    },
    {
      id: 7,
      text: "نبشی و ناودونی",
      icon: (
        <CornerIcon
          color={colorHover.index !== 7 ? "#535C79" : colorHover.color}
        />
      ),
    },
    {
      id: 8,
      text: "تجهیزات",
      icon: (
        <GirderIcon
          color={colorHover.index !== 8 ? "#535C79" : colorHover.color}
        />
      ),
    },
    {
      id: 9,
      text: "عایق و پوشش",
      icon: (
        <VertebraeIcon
          color={colorHover.index !== 9 ? "#535C79" : colorHover.color}
        />
      ),
    },
    { id: 10, text: "تماس با ما", icon: "" },
    { id: 11, text: "راهنما", icon: "" },
  ];
  const [showMenu, setShowMenu] = useState(false);
  return (
    <HeaderDiv>
      {listItems.map((item) => {
        return (
          <>
            <Div
              key={item.id}
              onMouseEnter={() =>
                setColorHover({ index: item.id, color: "#FFF" })
              }
              onMouseLeave={() =>
                setColorHover({ index: item.id, color: "#535C79" })
              }
            >
              {item.icon !== "" ? <span>{item.icon}</span> : ""}
              <span>{item.text}</span>
            </Div>
          </>
        );
      })}
      <DivSmall>
        <span>بلاگ</span>
        <span>درباره ما</span>
        <span>تماس با ما</span>
        <span>راهنما</span>
        <button
          className="buttonShowMenu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          ...
        </button>
        <ul className={showMenu ? "ul" : "ulHide"}>
          {listItems.map((item) => {
            return (
              <>
                <li
                  className="li"
                  key={item.id}
                  onMouseEnter={() =>
                    setColorHover({ index: item.id, color: "#FFF" })
                  }
                  onMouseLeave={() =>
                    setColorHover({ index: item.id, color: "#535C79" })
                  }
                >
                  {item.icon !== "" ? <span>{item.icon}</span> : ""}
                  <span>{item.text}</span>
                </li>
              </>
            );
          })}
        </ul>
      </DivSmall>
    </HeaderDiv>
  );
};

export default Header;
