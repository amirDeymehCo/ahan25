import { LinkStyle } from "./BtnShowStyles";
import { ArrowShow } from "../../Icons/Icons";

const BtnShow = ({ text }) => {
  return (
    <LinkStyle className="link-show">
      {text}
      <ArrowShow />
    </LinkStyle>
  );
};

export default BtnShow;
