import styled from "styled-components";
import { neutral, primary, secondary } from "../../../styles/global/color";
import { fontsTheme, typeScale } from "../../../styles/global/typography";
import { device } from "../../../styles/global/size";
import darkTheme from "../../../styles/themes/dark-theme";
import Image from "next/image";
import ViewLogoImg from "../../../assets/view.svg";
import LikeLogoImg from "../../../assets/like.svg";
import CommentLogoImg from "../../../assets/comment.svg";

export const Wrapper = styled.div`
  margin-bottom: 25px;
  height: 32em;
  background: ${primary[300_25]};
  border: 0.05em solid ${neutral[400_50]};
  box-sizing: border-box;
  box-shadow: ${(p) => p.theme.boxShadow};
  backdrop-filter: blur(4em);
  border-radius: 1.5em;
  padding: 1.8em 2.4em 0;
  text-align: right;
  box-sizing: border-box;
  width: 48%;
  @media (max-width: 571px) {
    width: 100%;
  }
`;
export const ImageBox = styled.div`
  border-radius: 1.5em;
  z-index: 100;
  height: 13.2em;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  overflow:hidden;
`;
export const UserProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  padding: 0 1em 1em;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index:3;
  cursor: pointer;
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
`;
export const UserName = styled.span`
  font-family: ${fontsTheme.primaryBold};
  font-style: normal;
  font-weight: 800;
  font-size: 1em;
  line-height: 1.4em;
  text-align: center;
  text-transform: uppercase;
  color: ${neutral[100]};
  padding-right: 0.5em;
`;
export const UserLogo = styled(Image)`
  width: 2.4em;
  height: 2.4em;
  border-radius: 5.5em;
`;
export const History = styled.div`
  font-family: ${fontsTheme.secondaryTitle};
  font-style: normal;
  font-weight: 400;
  font-size: 0.8em;
  line-height: 1.1em;
  text-align: right;
  text-transform: uppercase;
  color: ${neutral[100]};
  text-align: right;
  cursor: pointer;
`;
export const DetailDescription = styled.p`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  p {
    font-family: ${fontsTheme.primaryBold};
    font-style: normal;
    font-weight: 300;
    font-size: 1em;
    line-height: 1.4em;
    text-align: right;
    text-transform: uppercase;
    color: ${neutral[300]};
    margin-bottom: 1.5em;
    text-align: right;
    direction: rtl;

    display: inline;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-wrap: break-word; /* Important for long words! */
  }
  button {
    border: none;
    background: transparent;
    white-space: nowrap;
    color: ${secondary[100]};
    outline: none;
    cursor: pointer;
  }
`;
export const DetailTitle = styled.h3`
  font-family: ${fontsTheme.primaryBold};
  font-style: normal;
  font-weight: 700;
  font-size: 1.4em;
  line-height: 2em;
  text-align: right;
  color: ${neutral[100]};
  padding: 1.4em 0 0.6em;
`;
export const Details = styled.div``;
export const Hashtag = styled.span`
  width: 3.109em;
  height: 1.331em;
  background: ${primary[300]};
  border-radius: 0.3em;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  font-family: ${fontsTheme.primaryBold};
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 0.8em;
  text-align: right;
  color: ${neutral[100]};
  padding: 0.3em 0.5em;
  margin: 2em 0.3em;
`;
export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.3em;
`;
export const Divider = styled.div`
  background: ${(p) => p.theme.primaryColorGradientLight};
  width: 100%;
  height: 0.102em;
  margin-top: 1.3em;
`;
export const ViewLogo = styled(ViewLogoImg)`
  width: 1.2em;
  height: 1.4em;
  fill: ${secondary[200]};
`;
export const LikeLogo = styled(LikeLogoImg)`
  width: 1.2em;
  height: 1.4em;
  fill: ${secondary[200]};
`;
export const Number = styled.span`
  font-family: ${fontsTheme.primaryBold};
  font-style: normal;
  font-weight: 400;
  font-size: 0.8em;
  line-height: 1.1em;
  text-align: right;
  color: ${neutral[100]};
  padding-right: 0.5em;
`;
export const CommentLogo = styled(CommentLogoImg)`
  width: 1.2em;
  height: 1.4em;
  fill: ${secondary[200]};
`;


export const Cover = styled.div`
  position:absolute;
  top:0px;
  left:0px;
  width:100%;
  height:100%;
  z-index:2;
  background:#00000042;
`