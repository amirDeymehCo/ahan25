import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  device,
  fontsTheme,
  neutral,
  primary,
  secondary,
  typeScale,
} from "../../styles/global";
import ModalWrapper from "../common/modal-wrapper";
import ModalTitle from "./auth/common/title";
import RightBarIconShare from "./auth/common/right-bar-icon-share";
import TwitterImg from "../../assets/twitter-share.svg";
import WhatsappImg from "../../assets/whatsapp-share.svg";
import LinkImg from "../../assets/link.svg";

export default function ShareModal() {
  const {
    query: { url: query },
  } = useRouter();

  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    setCurrentURL(window.location.origin + window.location.pathname);
  }, []);

  const url = query || currentURL;

  return (
    <ModalWrapper
      name="share"
      RedirectWhenItsInPage={false}
      rightBar={<RightBarIconShare label="اشتراک گذاری" />}
      leftBar={
        <$Wrapper>
          <ModalTitle
            title="اشتراک گذاری لینک از طریق :"
            wrapperStyle="margin-bottom: 2rem;"
          />
          <$IconList>
            <SocialMediaLink link={`https://api.whatsapp.com/send?text=${url}`}>
              <WhatsappImg />
            </SocialMediaLink>
            <SocialMediaLink
              link={`https://twitter.com/intent/tweet?url=${url}`}
            >
              <TwitterImg />
            </SocialMediaLink>
          </$IconList>
          <ModalTitle
            title="یا کپی لینک :"
            wrapperStyle="margin: 4rem 0 2rem;"
          />
          <$InputWrapper>
            <$Input defaultValue={url} readOnly />
            <$Button
              onClick={(e) => {
                navigator.clipboard.writeText(url);
                e.target.innerText = "کپی شد";
              }}
            >
              کپی
            </$Button>
            <$LinkImg />
          </$InputWrapper>
        </$Wrapper>
      }
    />
  );
}
// ==== Components =====
const SocialMediaLink = ({ children, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

// ====== Styles ======
const $Wrapper = styled.div``;

const $IconList = styled.div`
  display: flex;
  gap: 2rem;

  svg {
    cursor: pointer;
  }
`;

const $InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.5rem;
  padding: 1rem;
  margin-bottom: 3rem;
  font-size: ${typeScale.header2};
`;

const $Input = styled.input`
  outline: none;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 2rem 1.7rem 6rem;

  caret-color: transparent;
  color: ${neutral[300]};
  background: ${primary[100]};
  font-family: ${fontsTheme.primaryLight};
  font-weight: 300;
  text-align: left;

  border: 0.05rem solid ${neutral[400_30]};
  border-radius: 1rem;

  transition: all 0.1s;
  &:focus {
    border-color: ${neutral[300]};
  }
`;

const $Button = styled.button`
  padding: 1.2rem 3rem;

  color: ${neutral[100]};
  background-color: ${secondary[200]};
  box-shadow: 0 0 1.5rem ${primary[500]};
  border: none;
  border-radius: 1rem;

  user-select: none;
  cursor: pointer;
  z-index: 1;

  transition: 0.06s ease-in-out transform;
  &:active {
    transform: scale(0.9);
  }
`;

const $LinkImg = styled(LinkImg)`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  z-index: 1;

  @media ${device.mobileS} {
    width: 5rem;
    height: 5rem;
  }
`;
