import styled from "styled-components";
import { neutral, primary, typeScale } from "../../styles/global";
import SearchIcon from "./../../assets/search.svg"
import darkTheme from './../../styles/themes/dark-theme';
import { fontsTheme } from './../../styles/global/typography';
import { device } from './../../styles/global/size';

export default function SearchField({ onClick, ...props }) {
  return (
      <$InputWrapper>
        <$Input
          type="text"
          autoComplete="off"
          placeholder="عبارت مورد نظر خود را سرچ کنید ..."
          {...props}
        />
        <$Icon onClick={onClick}>
        <SearchIcon />
        </$Icon>
      </$InputWrapper>
  );
}

// ===== Styles =====
const $InputWrapper = styled.div`
  position: relative;
`;

const $Icon = styled.div`
  position: absolute;
  top: 2.1rem;
  transform: translateY(-50%) scale(0.9);
  right: 1rem;
  cursor: pointer;
`;

const $Input = styled.input`
  outline: none;

  width: 100%;
  height: 3.9rem;
  padding: 1rem 4rem 1rem 2rem;

  color: ${neutral[200]};
  font-family: ${fontsTheme.primaryLight};
  font-weight: 300;
  font-size: ${typeScale.header3};

  background: ${primary[100]};

  box-shadow: ${darkTheme.shadow.primaryShadow};
  border: 0.05rem solid ${neutral[400_30]};
  border-radius: 1rem;

  transition: all 0.1s;
  &:focus {
    border-color: ${neutral[300]};
  }

  &::placeholder {
    color: ${neutral[300]};
  font-size: ${typeScale.header4};
  }

  
  @media ${device.mobileM} {
    padding: 1rem 5rem 1rem 2rem;
  }
`;