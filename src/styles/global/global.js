import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { device } from "../global/index";

export const GlobalStyle = createGlobalStyle`
     ${normalize()}
     :root {

          --base-font-size           : 1.9px;
          --fluid-typography-ratio   : 0.6;
          --rem-lg                   : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1vw);
          --rem-md                   : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1.2vw);
          --rem-sm                   : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1.5vw);
          --rem-xsm                  : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 2.1vw);
          --rem-xxsm                 : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 2.4vw);
          
          }

     *,
     *::after,
     ::before {
          padding         : 0;
          margin          : 0;
          box-sizing      : inherit;
          text-decoration : none;
          box-sizing: border-box;

          }

     html {
          scroll-behavior: smooth;

          /*font-size : 62.5%;*/
          font-size : var(--rem-lg);
          @media only screen and ${device.tablet} {
               font-size : var(--rem-md);
               }
          @media only screen and ${device.mobileL} {
               font-size : var(--rem-sm);
               }
          @media only screen and ${device.mobileM} {
               font-size        : var(--rem-xsm);
               }
          @media only screen and ${device.mobileS} {
               font-size        : var(--rem-xxsm);
               }
          /*     @media only screen and (max-width : 50em) {
                    font-size : var(--rem-sm);
                    }
     
               @media only screen and (max-width : 37em) {
                    font-size : var(--rem-xsm);
                    }
               @media only screen and (max-width : 32em) {
                    font-size : var(--rem-xxsm);
                    }*/
          }

     body {
          overflow-x   : hidden;
          box-sizing   : border-box;
          line-height  : 155%;
          text-align   : justify;
          text-justify : inter-word;
          font-weight  : 400;
          background : ${(p) => p.theme.primaryColorDarker};
          font-family  : IRANYekanRegular, sans-serif;
          -webkit-tap-highlight-color: transparent;
          }

     form, button, input {
          font-family : inherit;
          color       : inherit;
          font-weight : 500;
          }

     ol, ul {
          list-style : none;
          }

     img {
          max-width : 100%;
          display: block;
          height    : 400;
          }

     table {
          border-collapse : collapse;
          }

     textarea {
          white-space : revert;
          }

     code {
          font-family : source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
          }

     @font-face {
          font-family  : 'IRANYekanExtraBlack';
          font-style   : normal;
          src          : url(/fonts/IRANYekan/IRANYekanWebExtraBlack.ttf) format('truetype');
          font-display : swap;
          }

     @font-face {
          font-family  : 'IRANYekanExtraBold';
          font-style   : normal;
          src          : url(/fonts/IRANYekan/IRANYekanWebExtraBold.ttf) format('truetype');
          font-display : swap;
          }

     @font-face {
          font-family  : 'IRANYekanBold';
          font-style   : normal;
          src          : url(/fonts/IRANYekan/IRANYekanWebBold.ttf) format('truetype');
          font-display : swap;
          }

     @font-face {
          font-family  : 'IRANYekanRegular';

          font-style   : normal;
          src          : url(/fonts/IRANYekan/IRANYekanWebRegular.ttf) format('truetype');
          font-display : swap;
          }

     @font-face {
          font-family  : 'IRANYekanLight';
          font-style   : normal;
          src          : url(/fonts/IRANYekan/IRANYekanWebLight.ttf) format('truetype');
          font-display : swap;
          }

     @font-face {
          font-family  : 'BTitr';
          font-style   : normal;
          src          : url(/fonts/BTitr/BTitrBold.ttf) format('truetype');
          font-display : swap;
          }

     /* The emerging W3C standard */
     * {
          scrollbar-width : thin;
          scrollbar-color : hsla(355, 100%, 10%, .7) transparent;
          }

     /* Works on Chrome/Edge/Safari */
     *::-webkit-scrollbar {
          width : 8px;
          }

     *::-webkit-scrollbar-track {
          background : transparent;
          }

     *::-webkit-scrollbar-thumb {
          background-color : hsla(355, 100%, 10%, .8);
          border-radius    : .5rem;
          border           : hsl(29, 50%, 44%);
          }

     ::-webkit-scrollbar-thumb:hover {
          background : hsla(355, 100%, 10%, .7);
          }

     ::selection {
          background-color : white;
          color            : black;
          }
          
     .MuiModal-root.MuiPopover-root.MuiMenu-root .MuiPaper-root{
          background-color: transparent;
          box-shadow: none;
     }





`;
