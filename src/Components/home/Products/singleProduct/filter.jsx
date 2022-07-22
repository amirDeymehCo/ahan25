import styled from "styled-components";
import { InputLabel, Select, MenuItem } from "@mui/material";
import {
  device,
  primary,
  neutral,
  fontsTheme,
  typeScale,
} from "../../../../styles/global";
import darkTheme from "../../../../styles/themes/dark-theme";
import ArrowBottomIcon from "./../../../../assets/arrow-bottom.svg";
import { makeStyles } from "@mui/styles";

export default function ProductFilter({ filters }) {
  const classes = useStyles();
  return (
    <$Filter>{filters.map((filter) => customSelect(classes, filter))}</$Filter>
  );
}

// ===== Helpers ======
function customSelect(classes, item) {
  return (
    <$SelectWrapper>
      <$InputLabel>{item.label}</$InputLabel>
      <$Select
        MenuProps={{
          classes: { list: classes.list },
        }}
        defaultValue={item.options[0]._id}
        fullWidth
        variant="filled"
        IconComponent={$ArrowBottomIcon}
      >
        {item.options.map((option) => (
          <$MenuItem key={option._id} value={option._id}>
            {option.value}
          </$MenuItem>
        ))}
      </$Select>
    </$SelectWrapper>
  );
}

// ===== Styles ======
const useStyles = makeStyles((theme) => ({
  list: {
    color: neutral[200],
    background: primary[400_50],
    boxShadow: darkTheme.shadow.darkShadow,
    backdropFilter: "blur(1rem)",
    borderRadius: "1rem",
  },
}));

const $Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  margin-top: 4rem;
`;

const $SelectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const $InputLabel = styled(InputLabel)`
  &&& {
    width: 35%;
    font-family: ${fontsTheme.primary};
    font-size: ${typeScale.header2};
    font-weight: 400;
    color: ${neutral[200]};

    &::after {
      content: ":";
      margin-inline-start: 1rem;
    }
    @media ${device.mobileL} {
      width: 50%;
    }
  }
`;

const $Select = styled(Select)`
  &&& {
    font-family: ${fontsTheme.primaryBold};
    font-size: ${typeScale.header2};
    font-weight: 700;
    color: ${neutral[200]};

    background: ${primary[300]};
    border: 0.1rem solid ${primary[300]};

    outline: none !important;

    box-shadow: ${darkTheme.shadow.primaryShadow};
    border-radius: 1rem;

    &::before,
    &::after {
      display: none;
    }

    .MuiSelect-select {
      padding: 2rem 1.5rem 2rem 4.8rem;
    }
  }
`;

const $ArrowBottomIcon = styled(ArrowBottomIcon)`
  &&& {
    width: 1.8rem;
    top: 2.8rem;
    left: 2rem;
    right: auto;
  }
`;

const $MenuItem = styled(MenuItem)`
  &&& {
    font-family: ${fontsTheme.primaryBold};
    font-size: ${typeScale.header2};
    font-weight: 700;
    padding: 1.5rem;

    transition: background-color ease 0.08s;
    &.Mui-selected,
    &:hover {
      background-color: ${primary[200]} !important;
    }
  }
`;
