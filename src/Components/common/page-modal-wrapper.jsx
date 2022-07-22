import { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device, primary } from "../../styles/global";
import { neutral } from "../../styles/global/color";
import Exit from "../../assets/exit.svg";
import { useRouter } from "next/router";
import PrivateRoute from "./private-route";

/**
 * Wrapper For Auth Modals (Login, signup, e.g…)
 * @param {string} name - Required
 * @param {function} onClose
 * @param {bool} isPage - Will Remove modal properties (e.g position: fixed, ...) - Easily use the same component to create a page without extra work.
 * @param {bool} RedirectWhenItsInPage - default TRUE
 * @param {bool} privateRoute
 * @param {bool} reversePrivateRoute
 */
export default function PageModalWrapper({
  name,
  children,
  isPage,
  RedirectWhenItsInPage = true,
  onClose,
  privateRoute = false,
  reversePrivateRoute = false,
}) {
  const router = useRouter();

  useEffect(() => {
    if (!isPage) {
      document.body.style.overflowY = "hidden";
    }
  }, []);

  const handleClose = () => {
    // Specific
    if (onClose) return onClose();

    // General
    document.body.style.overflowY = "";

    const queryString = deletePageQueryParam(router);
    router.push(`${queryString && "?" + queryString}`, undefined, {
      shallow: true,
    });
  };

  return (
    <>
      {privateRoute || reversePrivateRoute ? (
        <PrivateRoute reversePrivateRoute={reversePrivateRoute}>
          <$Backdrop onClick={isPage ? null : handleClose} isPage={isPage}>
            <$Modal
              isPage={isPage}
              aria-labelledby={name}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </$Modal>
            {!isPage && <$CloseBtn onClick={handleClose} />}
          </$Backdrop>
        </PrivateRoute>
      ) : (
        <$Backdrop onClick={isPage ? null : handleClose} isPage={isPage}>
          <$Modal
            isPage={isPage}
            aria-labelledby={name}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </$Modal>
          {!isPage && <$CloseBtn onClick={handleClose} />}
        </$Backdrop>
      )}
    </>
  );
}

// ====== Helpers =======
function deletePageQueryParam(router) {
  const params = new URLSearchParams(router.query);
  params.delete("page");
  return params.toString();
}

// ====== PropTypes ======
PageModalWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  isPage: PropTypes.bool,
  RedirectWhenItsInPage: PropTypes.bool,
  privateRoute: PropTypes.bool,
  reversePrivateRoute: PropTypes.bool,
  onClose: PropTypes.func,
};

// ====== Styles ======
const XGap = "0rem";
const YGap = "2rem";

const $Backdrop = styled.section`
  position: ${(p) => (p.isPage ? "static" : "fixed")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 999;
  cursor: pointer;
`;

const $CloseBtn = styled.div`
  position: fixed;
  z-index: 1000;
  top: calc(2.3rem + ${YGap});
  right: 2.3rem;
  width: 5.4rem;
  height: 5.4rem;
  cursor: pointer;

  transition: transform ease-in-out 0.05s;
  &:active {
    transform: scale(0.9);
  }
`;

const $Modal = styled.article`
  padding: 12rem 1rem;
  z-index: 1000;
  position: ${(p) => (p.isPage ? "static" : "fixed")};
  top: 0;
  left: 0;
  margin: ${YGap} ${XGap};
  min-width: calc(100vw - (${XGap} * 2));
  min-height: calc(100vh - (${YGap} * 2));

  ${(p) =>
    !p.isPage &&
    `
    max-height: calc(100vh - (${YGap} * 2));
    overflow-y: auto;
  `}
  background-color: ${primary[400_40]};
  backdrop-filter: blur(2rem);

  border: 0.05rem solid ${neutral[400_30]};
  border-radius: 3rem;

  cursor: auto;

  @media ${device.mobileM} {
    margin: 0;
    width: 100vw;
    border: none;
    border-radius: 0;
  }

  @media ${device.mobileS} {
    min-height: 0;
    height: ${(p) => (p.isPage ? "fit-content" : "100vh")};
  }
`;
