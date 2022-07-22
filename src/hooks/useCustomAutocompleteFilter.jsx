import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import styled from 'styled-components';
import { fontsTheme, neutral, primary } from '../styles/global';
import { createStyles, makeStyles } from '@mui/styles';
import { Popper } from '@mui/material';
import { useState } from 'react';


const customStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiAutocomplete-listbox': {
        backgroundColor: ` ${primary[400_50]}`,
        boxShadow: `${(p) => p.theme.shadow.darkShadow}`,
        backdropFilter: blur(40),
        padding: 0,
      },
      '& .MuiAutocomplete-tag': {
        background: 'red',
      },
    },
  })
);

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const customPoper = (props) => {
  const classes = customStyles();
  return <Popper {...props} className={classes.root} />;
};

export default function UseCustomAutocompleteFilter({items}) {
  
    const [selected, setSelected] = useState([]);
    const [test, setTest ] = useState([])

    const inputValueHandler = (event, value) => {
     
     setTest({...test,value}) 
    };

    return (
      <$Wrapper>
          <$Autocomplete
            multiple
            PopperComponent={customPoper}
            id="checkboxes-tags-demo"
            options={items}
            disableCloseOnSelect
            onChange={inputValueHandler}
            getOptionLabel={(selected) => selected}
            renderOption={(props, option, { selected }) => (
              <$Li {...props}>
                <$Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option}
              </$Li>
            )}
            renderInput={(params) => (
              <$TextField {...params} label="قیمت میلگرد" placeholder="" />
            )}
          />
      </$Wrapper>
    );
}


const $Li = styled.li`
  text-align: right;
  direction: rtl;
  transition: all 0.5s ease;
  font-family: ${fontsTheme.secondaryTitle};
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 14px;
  color: #fefefe;
  word-spacing: 0.2em;

  &:hover {
    background: ${primary[200]} !important;
  }
`;

const $TextField = styled(TextField)`
  cursor: pointer;
  color: #fff;
`;

const $Checkbox = styled(Checkbox)``;

const $Autocomplete = styled(Autocomplete)`
  min-width: 24em;
  max-width: 33em;
  background: ${primary[400_50]};
  box-shadow: ${(p) => p.theme.shadow.primaryShadow};
  border-radius: 1em;

  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    font-family: ${fontsTheme.primaryLight};
    font-style: normal;
    font-weight: 400;
    font-size: 1.4em;
    color: ${neutral[300]};
    right: 6em;
  }
`;

const $Wrapper = styled.div`
  direction: rtl;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 2em;

  .css-16awh2u-MuiAutocomplete-root .MuiAutocomplete-tag {
    background: ${(p) => p.theme.primaryColorGradientLight};
    border-radius: 15px;
    padding: 0 1em;
    font-family: ${fontsTheme.secondaryTitle};
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
    color: #fefefe;
  }
  .css-iqd1hh-MuiButtonBase-root-MuiChip-root .MuiChip-deleteIcon {
    color: #fff !important;
  }
`;
