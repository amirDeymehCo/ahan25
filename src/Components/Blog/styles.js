import styled from "styled-components";
import {neutral,primary} from "../../styles/global/color";
import {fontsTheme , typeScale} from "../../styles/global/typography";
import { device } from "../../styles/global/size";
import darkTheme from "../../styles/themes/dark-theme";
import Image from "next/image";

export const Title = styled.h1`
  color: ${neutral[100]};
  font-family: ${fontsTheme.primaryBold};
  font-weight: 800;
  font-size: ${props => props.header2 ? `${typeScale.header2}`: `${typeScale.header1}` };
  margin-bottom: 2.2rem;
  text-align: ${props => props.center ? 'center' : 'right'};
`;
export const Description = styled.p`
  color: ${neutral[200]};
  font-family: ${fontsTheme.primary};
  font-weight: 300;
  font-size: ${typeScale.paragraph};
  margin-bottom: 2.2rem;
  text-align: center;
  line-height: 21.7px;
`;
export const Wrapper = styled.div`
direction:rtl;
  display: grid;
  grid-template-columns: ${8.333 * 4}% ${8.333 * 8}%;
  gap: 4rem;
  padding: 0 7rem;

  @media ${device.tablet} {
    padding: 0 4rem;
    grid-template-columns: ${8.333 * 4}% ${8.333 * 7.5}%;
  }

  @media ${device.mobileM} {
    padding: 0 2rem;
    grid-template-columns: 100%;
  }
`;
export const Sidebar = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;

  section:nth-child(even) {
    background-color: ${primary[300_25]};
    box-shadow: ${darkTheme.shadow.primaryShadow};
  }
`;
export const Widget = styled.section`
  width: 100%;
  padding: 2.4rem 3.4rem;
  color: ${neutral[100]};
  border: 0.05rem solid rgba(189, 191, 193, 0.4);
  filter: ${`drop-shadow(0 0 5.5rem ${primary[300_25]})`};
  border-radius: 1.5rem;
`;
export const Categories = styled.ul`
  display: flex;
  flex-direction: column;
  //align-items: flex-end;
  gap: 2rem;
  margin-top: 2.4rem;
`;
export const Category = styled.li`
  font-family: ${fontsTheme.primary};
  font-weight: 400;
  font-size: ${typeScale.header3};
  span{
    padding: 0 0.7rem;
  }
`;
export const Num = styled.span`
  font-family: ${fontsTheme.secondaryTitle};
  padding: 0 0.7rem;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const NewestPost = styled.li`
padding: 1.2rem 1.7rem;
a{
  gap: 2rem;
  display: flex;
  color:#ffffff;
}
  background: ${primary[300_25]};

  border: 0.05rem solid ${neutral[400_30]};

  box-shadow: ${darkTheme.shadow.primaryShadow};
  border-radius: 1.5rem;

  @media ${device.mobileL} {
    a{
      flex-direction: column;
  gap: 1.5rem;}
  }

  @media ${device.mobileM} {
    a{

      flex-direction: row;
    gap: 2rem;
    }
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 11rem;
  height: 8.5rem;
  overflow: hidden;
  border-radius: 1.5rem;

  @media ${device.mobileL} {
  width: 100%;
  }
`;
export const PostImage = styled(Image)`
  opacity: 0.6;
  filter: drop-shadow(0 2rem 4rem rgba(35, 33, 33, 0.15));
  object-fit: cover;
`;
export const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    280.17deg,
    rgba(62, 81, 117, 0.3) -52.57%,
    rgba(84, 94, 146, 0.09) 185.77%
  );
  border-radius: 15px;
`;
export const PostContent = styled.div`
  width: calc(100% - 11rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media ${device.mobileL} {
  width: 100%;
  }
`;
export const PostTitle = styled.h2`
  font-family: ${fontsTheme.primaryBold};
  font-size: ${typeScale.header4};
  margin-bottom: 0.4rem;
`;

export const PostDescription = styled.p`
  font-family: ${fontsTheme.primaryLight};
  font-size: ${typeScale.paragraph};
  font-weight: 300;
  line-height: 1.6em;
  height: 3.5rem;
  overflow: hidden;
  color: ${neutral[300]};
  margin-bottom: 0.4rem;
`;

export const PostDate = styled.time``;

export const BadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Badge = styled.div`
    padding: .7rem 1.4rem;
    background: ${primary[300]};
    border-radius: .3rem;
`;
export const PosterWidget = styled.section`
  width: 100%;
  padding: 2.4rem 3.4rem;
  color: ${neutral[100]};
  border: 0.05rem solid rgba(189, 191, 193, 0.4);
  filter: ${`drop-shadow(0 0 5.5rem ${primary[300_25]})`};
  border-radius: 1.5rem;
  margin-bottom: 3rem;
  a{
    color: #ffffff;
  }
`;
export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const PosterImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 23.813rem;
  overflow: hidden;
  border-radius: 1.5rem;

  @media ${device.mobileL} {
    width: 100%;
  }
`;
export const PosterImage = styled(Image)`
  opacity: 0.6;
  filter: drop-shadow(0 2rem 4rem rgba(35, 33, 33, 0.15));
  object-fit: cover;
`;
export const PosterContent = styled.div`
  position: absolute;
  top: 60%;
  text-align: right;
  padding:23px 25px;

  @media ${device.mobileL} {
    width: 100%;
  }
`;
export const PosterTitle = styled.h2`
  font-family: ${fontsTheme.secondaryTitle};
  font-size: ${typeScale.header2};
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 1rem;
`;
export const PosterDescription = styled.p`
  font-family: ${fontsTheme.primary};
  font-size: ${typeScale.helperText};
  font-weight: 400;
  line-height: 12.4px;
  height: 79px;
  overflow: hidden;
  color: ${neutral[200]};
  margin-bottom: 0.4rem;
`;
export const Posts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Not = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items: center;
  justify-content:center;
  margin-top:40px;  
  h2{
    color:#ffffff;
    font-size:24px;
  }
`