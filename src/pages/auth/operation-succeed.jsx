import Footer from "../../Components/common/Footer/Footer";
import Navbar from "../../components/layout/navabar";
import OperationSucceed from "../../components/modals/auth/operation-succeed";

function Login() {
  return (
    <>
      <Navbar />
      <OperationSucceed isPage={true} />
      <Footer />
    </>
  );
}

export default Login;
