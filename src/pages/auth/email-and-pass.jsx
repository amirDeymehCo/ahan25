import Footer from "../../components/home/Footer/Footer";
import Navbar from "../../components/layout/navabar";
import EmailAndPass from "../../components/modals/auth/email-and-pass";

function Login() {
  return (
    <>
      <Navbar />
      <EmailAndPass isPage={true} />
      <Footer />
    </>
  );
}

export default Login;
