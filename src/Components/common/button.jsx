import styled from "styled-components";
import { neutral, secondary, typeScale } from "../../styles/global";

export default function Button({ children, ...rest }) {
  return <$Button {...rest}>{children}</$Button>;
}

// ====== Styles =====
const $Button = styled.button`
  text-align: center;
  font-size: ${typeScale.header2};

  padding: 1.5rem 4.6rem 1.4rem;

  background-color: ${secondary[300]};
	color: #fff;

	border: none;
  border-radius: 1rem;
  cursor: pointer;

  transition: transform .05s ease-in-out;
  &:active {
    transform: scale(.95);
  }
`;
