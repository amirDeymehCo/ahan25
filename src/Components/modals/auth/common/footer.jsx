import styled from "styled-components";
import Button from "../../../common/button";
import Link from "next/link";
import { neutral } from "../../../../styles/global/color";
import { typeScale } from "../../../../styles/global";

/**
 * @param {object} btn - filled button {children, handleClick}
 * @param {object} text - link {children, href, as}
 * @param {bool} isPage
 * @param {string} wrapperStyle - write your custom css
 */
export default function ModalFooter({ btn, text, isPage, wrapperStyle }) {
  return (
    <$Wrapper
      wrapperStyle={wrapperStyle}
      justifyContent={text ? "space-between" : "flex-end"}
    >
      {text && (
        <Link href={isPage ? text.as : text.href} as={text.as}>
          <$Text>{text.children}</$Text>
        </Link>
      )}
      {btn && <$Button onClick={btn.handleClick}>{btn.children}</$Button>}
    </$Wrapper>
  );
}

// ====== Styles ======
const $Wrapper = styled.div`
  display: flex;
  justify-content: ${(p) => p.justifyContent};
  align-items: flex-end;

  ${p=>p.wrapperStyle}
`;

const $Button = styled(Button)`
  display: block;

  cursor: pointer;
`;

const $Text = styled.a`
  position: relative;
  font-size: ${typeScale.header3};
  line-height: 1.3em;
  margin-bottom: 1.5rem;

  text-align: right;

  color: ${neutral[100]};

  &::after {
    content: "";

    position: absolute;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 0.1rem;

    background-color: ${neutral[100]};
  }

  cursor: pointer;
`;
