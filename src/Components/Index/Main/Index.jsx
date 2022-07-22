import ListProducts from "./ListProducts/ListProducts";
import ListGetProducts from "./ListGetProducts/ListGetProducts";
import PriceProduct from "./PriceProduct/PriceProduct";
import Question from "./Question/Question";
import Posts from "./Posts/Posts";
import ListCompony from "./ListCompony/ListCompony";
import CardCompony from "./CardCompony/CardCompony";
import Comments from "./Coments/Comments";
import Players from "./Players/Players";
import Footer from "../../Common/Footer/Footer";
import BtnMobile from "./BtnMobile/BtnMobile";

const Main = () => {
  return (
    <div style={{ width: "100%", height: "auto", direction: "rtl" }}>
      <ListProducts />
      <ListGetProducts />
      <PriceProduct />
      <Question />
      <Posts />
      <ListCompony />
      <CardCompony />
      <Comments />
      <Players />
      <BtnMobile />
      <Footer />
    </div>
  );
};

export default Main;
