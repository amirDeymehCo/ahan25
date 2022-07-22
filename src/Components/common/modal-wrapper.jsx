import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device, primary } from "../../styles/global";
import { neutral } from "../../styles/global/color";
import Exit from "./../../assets/exit.svg";
import { useRouter } from "next/router";
import PrivateRoute from "./private-route";

/**
 * Wrapper For Auth Modals (Login, signup, e.g…)
 * @param {string} name - Required
 * @param {node} leftBar
 * @param {node} rightBar
 * @param {function} onClose
 * @param {bool} isPage - Will Remove modal properties (e.g position: fixed, ...) - Easily use the same component to create a page without extra work.
 * @param {bool} RedirectWhenItsInPage - default TRUE
 * @param {bool} privateRoute
 * @param {bool} reversePrivateRoute
 */
export default function ModalWrapper({
  name,
  isPage,
  RedirectWhenItsInPage = true,
  leftBar,
  rightBar,
  onClose,
  privateRoute = false,
  reversePrivateRoute = false,
}) {
  const router = useRouter();

  // showing auth modal over another modal is Not Cool
  if (
    RedirectWhenItsInPage &&
    !isPage &&
    router.pathname.split("/", 2)[1] === "auth"
  ) {
    const queryString = deleteModalQueryParam(router);
    router.replace(`/auth/${name}${queryString && "?" + queryString}`);
    return null;
  }

  const handleClose = () => {
    // Specific
    if (onClose) return onClose();

    // General
    const queryString = deleteModalQueryParam(router);
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
              aria-labelledby={`${name} modal`}
              onClick={(e) => e.stopPropagation()}
            >
              {!isPage && <$CloseBtn onClick={handleClose} />}
              <$Wrapper>
                <$RightBar>{rightBar}</$RightBar>
                <$LeftBar>{leftBar}</$LeftBar>
              </$Wrapper>
            </$Modal>
          </$Backdrop>
        </PrivateRoute>
      ) : (
        <$Backdrop onClick={isPage ? null : handleClose} isPage={isPage}>
          <$Modal
            isPage={isPage}
            aria-labelledby={`${name} modal`}
            onClick={(e) => e.stopPropagation()}
          >
            {!isPage && <$CloseBtn onClick={handleClose} />}
            <$Wrapper>
              <$RightBar>{rightBar}</$RightBar>
              <$LeftBar>{leftBar}</$LeftBar>
            </$Wrapper>
          </$Modal>
        </$Backdrop>
      )}
    </>
  );
}

// ====== Helpers =======
function deleteModalQueryParam(router) {
  const params = new URLSearchParams(router.query);
  params.delete("modal");
  return params.toString();
}

// ====== PropTypes ======
ModalWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  leftBar: PropTypes.node,
  rightBar: PropTypes.node,
  onClose: PropTypes.func,
};

// ====== Styles ======
const $Backdrop = styled.section`
  position: ${(p) => (p.isPage ? "static" : "fixed")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 1000;
  cursor: pointer;
`;

const $CloseBtn = styled(Exit)`
  position: fixed;
  top: 2.3rem;
  right: 2.3rem;
  width: 5.4rem;
  height: 5.4rem;
  cursor: pointer;

  transition: transform ease-in-out 0.05s;
  &:active {
    transform: scale(0.9);
  }
`;

const XGap = "2rem";
const YGap = "5rem";
const $Modal = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1001;
  position: ${(p) => (p.isPage ? "static" : "fixed")};
  top: 0;
  left: 0;
  margin: ${YGap} ${XGap};
  min-width: calc(100vw - (${XGap} * 2));
  min-height: calc(100vh - (${YGap} * 2));

  background-color: ${primary[400_40]};
  backdrop-filter: blur(2rem);

  border: 0.05rem solid ${neutral[400_30]};
  border-radius: 3rem;

  cursor: auto;

  @media ${device.mobileM} {
    margin: 0;
    width: 100vw;
    height: 100vh;
    border: none;
    border-radius: 0;
  }

  @media ${device.mobileS} {
    min-height: 0;
    height: ${(p) => (p.isPage ? "fit-content" : "100vh")};
  }
`;

const $Wrapper = styled.div`
  display: flex;

  width: 90rem;
  max-width: 70vw;

  min-height: 40rem;

  @media ${device.mobileL} {
    max-width: 80vw;
  }

  @media ${device.mobileM} {
    max-width: calc(100vw - (${XGap} * 2));
  }

  @media ${device.mobileS} {
    max-width: 100vw;
  }
`;

const $RightBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(100 / 3) * 1}%;

  border: 0.05rem solid ${neutral[400_30]};

  filter: drop-shadow(0 0 5.5rem rgba(0, 28, 118, 0.2));

  border-radius: 0 3rem 3rem 0;

  @media ${device.mobileS} {
    display: none;
  }
`;

const $LeftBar = styled.div`
  width: ${(100 / 3) * 2}%;
  padding: 5.2rem 5.8rem;

  border-bottom: 0.05rem solid ${neutral[400_30]};
  box-shadow: 0 0 5.5rem rgba(70, 80, 113, 0.2);

  background: ${primary[400_40]};
  backdrop-filter: blur(4rem);

  border-radius: 3rem 0 0 3rem;

  @media ${device.mobileL} {
    padding: 4.2rem 3.8rem;
  }

  @media ${device.mobileS} {
    width: 100%;
    border: none;
    border-radius: 0;
  }
`;
