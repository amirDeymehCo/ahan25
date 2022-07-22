import { Button, ButtonGroup, TextField } from "@mui/material";
import styled from "styled-components";
import { device, fontsTheme, primary } from "../../styles/global";
import darkTheme from "../../styles/themes/dark-theme";
import SubtractIcon from "../../assets/subtract.svg";
import PlusIcon from "../../assets/plus.svg";

/**
 * @param {int} value
 * @param {func} onChange - return the new value
 */
export default function Counter({ value, onChange }) {
  return (
    <$ButtonGroup variant="contained" dir="ltr" disableElevation>
      <$Increment onClick={() => onChange(++value)}>
        <PlusIcon />
      </$Increment>
      <$TextField
        type="text"
        value={value}
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9]*",
        }}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
      />
      <$Decrement onClick={() => onChange(value > 1 ? --value : value)}>
        <SubtractIcon />
      </$Decrement>
    </$ButtonGroup>
  );
}

// ==== Styles ====

const $ButtonGroup = styled(ButtonGroup)`
  &&& {
    gap: 1rem;
  }
`;

const $Increment = styled(Button)`
  &&& {
    width: 6.3rem;
    height: 5.8rem;
    padding: 0.6rem 1.6rem;

    background: ${primary[300]};
    border: 0.1rem solid #5d6f94;

    box-shadow: ${darkTheme.shadow.darkShadow};
    backdrop-filter: blur(1rem);

    border-radius: 1rem;
  }
`;

const $Decrement = styled(Button)`
  &&& {
    width: 6.3rem;
    height: 5.8rem;
    padding: 0.6rem 1.6rem;

    background: transparent;
    border: 1px solid #5d6f94;

    box-shadow: ${darkTheme.shadow.darkShadow};
    backdrop-filter: blur(1rem);

    border-radius: 1rem;
  }
`;

const $TextField = styled(TextField)`
  &&& * {
    width: 6.3rem;
    height: 5.8rem;
    padding: 0;

    text-align: center;
    font-family: ${fontsTheme.secondaryTitle};
    font-weight: 700;
    font-size: 2.8rem;

    color: ${darkTheme.white};
    border: none;
  }
`;
