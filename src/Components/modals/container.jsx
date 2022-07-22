import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ConfirmationCode = dynamic(() => import("./auth/confirmation-code"));
const EmailAndPass = dynamic(() => import("./auth/email-and-pass"));
const LoginModal = dynamic(() => import("./auth/login"));
const SignupModal = dynamic(() => import("./auth/signup"));
const ForgetPassword = dynamic(() => import("./auth/forget-password"));
const ResetPassword = dynamic(() => import("./auth/reset-password"));
const OperationFailed = dynamic(() => import("./auth/operation-failed"));
const OperationSucceed = dynamic(() => import("./auth/operation-succeed"));
const ShareModal = dynamic(() => import("./share"));

const Blog = dynamic(() => import("./blog"));
import SingleProduct from './products/single-product';

/**
 * @returns Every Modal In Website
 */
// SignupModal false => SignUpModal True
export default function ModalContainer() {
  const router = useRouter();
  const currentModal = router.query.modal;
  const currentPage = router.query.page;

  return (
    <>
      {currentModal && modal(currentModal)}
      {currentPage && page(currentPage)}
    </>
  );
}

// ===== functions =====

function modal(currentModal) {
  switch (currentModal) {
    case "signup":
      return <SignupModal />;

    case "login":
      return <LoginModal />;

    case "email-and-pass":
      return <EmailAndPass />;

    case "confirmation-code":
      return <ConfirmationCode />;

    case "forget-password":
      return <ForgetPassword />;

    case "reset-password":
      return <ResetPassword />;

    case "operation-failed":
      return <OperationFailed />;

    case "operation-succeed":
      return <OperationSucceed />;

    case "share-modal":
      return <ShareModal />;

    default:
      return null;
  }
}

function page(currentPage) {
  switch (currentPage) {
    case "blog":
      return <Blog />;
   
    case "single-product":
    return <SingleProduct />;

    default:
      return null;
  }
}
