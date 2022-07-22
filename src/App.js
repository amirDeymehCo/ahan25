import Index from "./Components/Index/Index";
import AccountLayout from "./Layout/AccountLayout/AccountLayout";
import ChangeAccount from "./Components/UserAccount/ChangeAccount/ChangeAccount";
import Favorites from "./Components/UserAccount/Favorites/Favorites";
import Tikts from "./Components/UserAccount/Tikts/Tikts";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MainOrders from "./Components/Order/Main";
import MainProducts from "./Components/Products/mainProduct";
import OrderUser from "./Components/UserAccount/Order/Order";
import Image from "next/image";

function App() {
  return (
    <div>
      {/* <Index /> */}
      {/* <AccountLayout> */}
      {/* <ChangeAccount /> */}
      {/* <Favorites /> */}
      {/* <OrderUser /> */}
      {/* <Tikts /> */}
      {/* </AccountLayout> */}
      {/* <MainOrders /> */}

      <MainProducts />
    </div>
  );
}

export default App;
