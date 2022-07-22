import { Alert } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import { fontsTheme } from "../../../../styles/global/typography";
import { typeScale } from "../../../../styles/global/";

/**
 * @param {object} alert - {style, text}
 */
export default function ModalAlert({ alert }) {
  if (!alert?.text) return null;
  return <$Alert severity={alert.style}> {alert.text} </$Alert>;
}

const $Alert = muiStyled(Alert)`
font-weight: 300;
font-family: ${fontsTheme.primary};
font-size: ${typeScale.header3};
line-height: 1.7em;
gap: 1rem;
margin-bottom: 2rem;
`;
