import Footer from "../../Components/common/Footer/Footer";
import SignupModal from "./../../components/modals/auth/signup";
import Navbar from "./../../components/layout/navabar";

function Login() {
  return (
    <>
      <Navbar />
      <SignupModal isPage={true} />
      <Footer />
    </>
  );
}

export default Login;
