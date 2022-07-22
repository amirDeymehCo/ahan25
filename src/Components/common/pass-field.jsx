import { useState } from "react";
import styled from "styled-components";
import { neutral, primary, typeScale } from "../../styles/global";
import Hide from "../../assets/hide.svg";
import Eye from "../../assets/eye.svg";
import Link from "next/link";

export default function PassField({
  label,
  name,
  isPage,
  forgetPassword,
  ...rest
}) {
  const [security, setSecurity] = useState(true);

  return (
    <$Wrapper>
      <$LabelWrapper>
        <$Label htmlFor={name}>{label} :</$Label>
        {forgetPassword && (
          <Link
            href={isPage ? "/auth/forget-password" : "?modal=forgetPassword"}
          >
            <$Text>فراموشی رمز عبور؟</$Text>
          </Link>
        )}
      </$LabelWrapper>
      <$InputWrapper>
        <$Input
          id={name}
          type={security ? "password" : "text"}
          autoComplete="off"
          dir="ltr"
          {...rest}
        />
        <$Icon onClick={() => setSecurity((state) => !state)}>
          {security ? <Hide /> : <Eye />}
        </$Icon>
      </$InputWrapper>
    </$Wrapper>
  );
}

// ===== Styles =====
const $Wrapper = styled.div`
  color: ${neutral[200]};
`;

const $LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const $InputWrapper = styled.div`
  position: relative;
`;

const $Icon = styled.div`
  position: absolute;
  top: 3.4rem;
  transform: translateY(-50%) scale(0.9);
  left: 2rem;
  cursor: pointer;
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
  padding: 2rem 2rem 1.7rem 6rem;
  margin-bottom: 3.8rem;

  background: ${primary[100]};
  font-size: ${typeScale.header2};

  border: 0.05rem solid ${neutral[400_30]};
  border-radius: 1rem;

  transition: all 0.1s;
  &:focus {
    border-color: ${neutral[300]};
  }
`;

const $Text = styled.a`
  position: relative;
  height: fit-content;
  font-size: ${typeScale.header4};
  line-height: 1.3em;
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
