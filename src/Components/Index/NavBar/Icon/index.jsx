import { TwitterIcon, WhatsappIcon } from "../../../Icons/Icons";
import { IconStyleDiv } from "./IconStyle";

const IconSocial = () => {
  return (
    <IconStyleDiv>
      <button className="Icon">
        <TwitterIcon size="28" color="#FFF" />
      </button>
      <button className="Icon">
        <WhatsappIcon size="24" color="#FFF" />
      </button>
    </IconStyleDiv>
  );
};

export default IconSocial;
