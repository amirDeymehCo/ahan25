import { useEffect } from "react";
import LoginModal from "../../components/modals/auth/login";
import Footer from "./../../components/home/Footer/Footer";
import Navbar from "./../../components/layout/navabar";

function Login() {
  return (
    <>
      <Navbar />
      <LoginModal isPage={true} />
      <Footer />
    </>
  );
}

export default Login;
