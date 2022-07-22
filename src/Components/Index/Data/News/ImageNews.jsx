import Image from "next/image";
import { EyeIcon, LikeIcon } from "../../../Icons/Icons";
import { DivIcons, ImageNewsDiv } from "./Style";
import aks from "./1.png";
import stylessss from "./Style.module.css";
const ImageNews = () => {
  return (
    <ImageNewsDiv>
      <div className={stylessss.divImage}></div>
      <h1 className="h1">قیمت روز انواع آهن آلات</h1>
      <p className="p">lorem ipsum dolor sit am lorem ipsum dolor sit am</p>
      <DivIcons>
        <span>
          19
          <EyeIcon size={22} color="#DA7C57" />
        </span>
        <span>
          109
          <LikeIcon size={22} color="#DA7C57" />
        </span>
      </DivIcons>
    </ImageNewsDiv>
  );
};

export default ImageNews;
