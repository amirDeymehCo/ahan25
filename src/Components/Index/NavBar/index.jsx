import Btn from "./Btns";
import IconSocial from "./Icon";

import SearchBar from "./SerachBar";
import Date from "./Date";
import { NavBarDiv } from "./NavBarStyle";
import { useState } from "react";
const NavBar = () => {
  return (
    <NavBarDiv>
      <div className="divMinWidthDate">
        <Date /> <SearchBar />
      </div>
      <div className="divMaxWidthDate">
        <Date /> <SearchBar />
      </div>
      <div className="divMaxWidth">
        <IconSocial /> <Btn />
      </div>
      <div className="divMinWidth">
        <IconSocial /> <Btn />
      </div>
    </NavBarDiv>
  );
};

export default NavBar;
