import Footer from "../../Components/common/Footer/Footer";
import Navbar from "../../components/layout/navabar";
import ForgetPassword from "../../components/modals/auth/forget-password";

function Login() {
  return (
    <>
      <Navbar />
      <ForgetPassword isPage={true} />
      <Footer />
    </>
  );
}

export default Login;
