import Footer from "../../Components/common/Footer/Footer";
import Navbar from "../../components/layout/navabar";
import ResetPassword from "../../components/modals/auth/reset-password";

function Login() {
  return (
    <>
      <Navbar />
      <ResetPassword isPage={true} />
      <Footer />
    </>
  );
}

export default Login;
