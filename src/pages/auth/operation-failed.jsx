import Footer from "../../Components/common/Footer/Footer";
import Navbar from "../../components/layout/navabar";
import OperationFailed from "../../components/modals/auth/operation-failed";

function Login() {
  return (
    <>
      <Navbar />
      <OperationFailed isPage={true} />
      <Footer />
    </>
  );
}

export default Login;
