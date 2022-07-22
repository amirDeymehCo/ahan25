import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import EtcDots from '../../assets/etc-dots.svg';
import styled from 'styled-components';
import { useState } from 'react';
import NextLink from 'next/link';
import { primary,fontsTheme, neutral } from '../../styles/global';
import { Link } from '@mui/material';

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <$ETCIcon />
      </IconButton>
      <$Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <$MenuItem onClick={handleClose}>
          <$NextLink href="/" passHref>
            <$MUILink>اشتراک گذاری</$MUILink>
          </$NextLink>
        </$MenuItem>
        <$MenuItem onClick={handleClose}>
          <$NextLink href="/" passHref>
            <$MUILink>چاپ</$MUILink>
          </$NextLink>
        </$MenuItem>
        <$MenuItem onClick={handleClose}>
          <$NextLink href="/" passHref>
            <$MUILink>سبد استعلام</$MUILink>
          </$NextLink>
        </$MenuItem>
      </$Menu>
    </div>
  );
}

const $MUILink = styled(Link)`
  font-family: ${fontsTheme.primaryLight};
  font-style: normal;
  font-weight: 800;
  font-size: 1.2em;
  line-height: 1.7em; 

  /* neutral_100 */

  color: ${neutral[100]};
`;

const $NextLink = styled(NextLink)``;

const $MenuItem = styled(MenuItem)``;

const $Menu = styled(Menu)`
  .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper {
    width: 17em;
    height: 12.2em;
    background: ${primary[200]};
    border: 0.5px solid rgba(189, 191, 193, 0.4);
    box-shadow: ${(p) => p.theme.shadow.primaryShadow};
    border-radius: 10px;
    direction: rtl;
  }
`;

const $ETCIcon = styled(EtcDots)`
  width: 0.46em;
  height: 2em;
  transform: rotateY(45deg);
`;
