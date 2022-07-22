import styled from "styled-components";
import { neutral, primary, secondary, typeScale } from "../../styles/global";

export default function Input({ label, name, ...rest }) {
  return (
    <$Wrapper>
      <$Label htmlFor={name}>{label} :</$Label>
      <$Input id={name} {...rest} />
    </$Wrapper>
  );
}

// ===== Styles =====
const $Wrapper = styled.div`
  color: ${neutral[200]};
`;

const $Label = styled.label`
  display: block;
  margin-bottom: 1.7rem;

  font-size: ${typeScale.header3};
`;

const $Input = styled.input`
	outline: none;

  width: 100%;
  height: 6.5rem;
	padding: 2rem 2rem 1.7rem;
  margin-bottom: 3.8rem;

  background: ${primary[100]};
  font-size: ${typeScale.header2};

  border: 0.05rem solid ${neutral[400_30]};
  border-radius: 1rem;

	transition: all .1s;
	&:focus {
		border-color: ${neutral[300]};
	}
`;
