import styled from "styled-components";
import { neutral, typeScale } from "../../../../styles/global";

export default function ModalDescription({ children }) {
  return <$p>{children}</$p>;
}

// ======= Styles =======
const $p = styled.p`
  font-weight: 300;
  font-size: ${typeScale.header3};
  line-height: 1.7em;

  color: ${neutral[300]};
`;
