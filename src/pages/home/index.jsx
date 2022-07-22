import Data from "../../components/Index/Data";
import Header from "../../components/Index/Header";
import Main from "../../components/Index/Main/Index";
import NavBar from "../../components/Index/NavBar";
import styled from "./Style.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image"
const Index = () => {
  return (
    <div className={styled.Index}>
      <div className={styled.BoxBrnad}>
        <h1>
          <span>Ehsan</span> <span>Metal</span>
        </h1>
      </div>
      <NavBar />
      <Header />
      <Data />
      <Main />
    </div>
  );
};

export default Index;

