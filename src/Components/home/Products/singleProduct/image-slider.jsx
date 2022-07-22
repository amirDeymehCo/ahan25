import styled from "styled-components";
import { device, neutral, primary } from "../../../../styles/global";
import darkTheme from "../../../../styles/themes/dark-theme";
import ShareIcon from "./../../../../assets/share.svg";
import { useState } from "react";
import Link from "next/link";

/**
 * @param {array} images - [{src}, ...]
 */
export default function ProductImageSlider({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <$Wrapper>
      <$PImageWrapper>
        <$PImg
          src={images[activeIndex].src}
          width="100%"
          height="350"
          alt="image"
        />
        <Link href="?modal=share-modal" passHref>
          <$ShareIcon />
        </Link>
      </$PImageWrapper>
      <$ThumbPImgWrapper>
        {images.map(({ src }, i) => (
          <$ThumbImage
            key={i}
            src={src}
            width="54"
            height="54"
            alt="image"
            activeIndex={activeIndex}
            onClick={(e) => setActiveIndex(i)}
          />
        ))}
      </$ThumbPImgWrapper>
    </$Wrapper>
  );
}

// ==== Styles ====
const $Wrapper = styled.div`
  display: flex;
  gap: 2.7rem;
`;
const $PImageWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  background: ${primary[400_50]};

  border: 0.3px solid ${neutral[400_30]};

  box-shadow: ${darkTheme.shadow.boxShadow};
  backdrop-filter: blur(1rem);

  border-radius: 1.5rem;
`;

const $PImg = styled.img`
  width: 100%;
  height: 35rem;
  object-fit: cover;
  object-position: center;
`;

const $ThumbPImgWrapper = styled.div`
  position: relative;
  width: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-inline-end: 4rem;
  gap: 2.6rem;

  &::before {
    content: "";
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    border: 0.1rem dashed ${primary[400_50]};
  }

  @media ${device.mobileM} {
    margin-inline-end: 0rem;
  }
`;

const $ThumbImage = styled.img`
  width: 5.4rem;
  height: 5.4rem;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  background: ${primary[300]};
  box-shadow: ${darkTheme.shadow.boldShadow};
  border-radius: 100%;
  cursor: pointer;

  &:nth-child(${(p) => p.activeIndex + 1}) {
    background: #e97b53;
    box-shadow: 1.92281px 3.20009px 7.46667px rgba(28, 31, 39, 0.331),
      inset -0.709303px -1.18048px 1.37719px #da7c57,
      inset 0.709303px 1.18048px 1.37719px #da7c57;
  }
`;

const $Share = styled.div``;

const $ShareIcon = styled(ShareIcon)`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 1.7rem;
  right: 2.3rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;
