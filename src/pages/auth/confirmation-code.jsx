import Footer from "../../Components/common/Footer/Footer";
// import Navbar from "../../components/layout/navabar";
import ConfirmationCode from "../../components/modals/auth/confirmation-code";

function Login() {
  return (
    <>
      {/* <Navbar /> */}
      <ConfirmationCode isPage={true} />
      <Footer />
    </>
  );
}

export default Login;
