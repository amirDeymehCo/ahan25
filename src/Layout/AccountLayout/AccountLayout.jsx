import { BodyLayout, AccountLayoutStyle } from "./AccountLayoutStyles";
import AccountSideBar from "./AccountSideBar";
import Error from "next/error";
import { useSelector } from "react-redux";
import Spinner from "../../Components/Spinner/Spinner";

const AccountLayout = ({ children }) => {
  const { token } = useSelector((state) => state.profileUser);

  if (token === "spinner") {
    return <Spinner text="...درحال اعتبار سنجی لطفا منتظر بمانید" />;
  }
  if (token === false) {
    return <Error statusCode={404} title="ابتدا وار سایت شوید" />;
  }

  return (
    <AccountLayoutStyle>
      <AccountSideBar />
      <BodyLayout>{children}</BodyLayout>
    </AccountLayoutStyle>
  );
};

export default AccountLayout;
