import Link from "next/link";
import styled from "styled-components";
import { fontsTheme, secondary, typeScale } from "../../../../styles/global";

/**
 *
 * @param {string} title
 * @param {object} badge - {title, href, as}
 * @param {bool} isPage
 * @param {string} wrapperStyle - write your custom css
 */
export default function ModalTitle({ title, badge, isPage, wrapperStyle }) {
  return (
    <$Header1 wrapperStyle={wrapperStyle}>
      {title}
      {badge ? (
        badge.href ? (
          <Link href={isPage ? badge.as : badge.href} as={badge.as}>
            <$Badge>( {badge.title} )</$Badge>
          </Link>
        ) : (
          <$Badge notLink>( {badge.title} )</$Badge>
        )
      ) : null}
    </$Header1>
  );
}

// ====== Styles ======
const $Header1 = styled.h1`
  margin: 0 0 3.8rem;
  color: #fff;
  font-size: ${typeScale.header1};
  font-family: ${fontsTheme.primaryBold};
  line-height: 3.9rem;

  ${(p) => p.wrapperStyle}
`;

const $Badge = styled.a`
  position: relative;
  margin-right: 1rem;
  font-size: ${typeScale.header2};
  font-family: ${fontsTheme.primary};
  font-weight: 400;
  color: ${secondary[200]};
  cursor: ${(p) => (p.notLink ? "auto" : "pointer")};
  ${(p) =>
    !p.notLink &&
    `
    &::after {
    content: "";

    position: absolute;
    right: 0;
    bottom: 0;

    margin: 0 10%;
    width: 80%;
    height: 0.1rem;

    background-color: ${secondary[200]};
  }
  `}
`;
