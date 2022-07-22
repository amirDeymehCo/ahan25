import styled from "styled-components";
import { device, fontsTheme, neutral, typeScale } from "../../../../styles/global";
import darkTheme from "../../../../styles/themes/dark-theme";

export default function ProductDescription () {
  return (
    <$DeWrapper>
        <$Descreiption>
          <$DeTitle>توضیحات تکمیلی</$DeTitle>
          <$DeParagraph>
            نامفهوم از صنعت چاپ و با استفاده لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ و با استفاده لورم ایپسوم متن ساختگی با
            تولید سادگی نامفهوم از صنعت چاپ و بااستفاده لورم ایپسوم متن ساختگی
            با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
            چاپ و با استفاده لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ و با استفاده لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ و بااستفاده لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ و با استفاده لورم ایپسوم متن ساختگی با
            تولید سادگی نامفهوم
          </$DeParagraph>
          <$DeUL>
            <li>سادگی نامفهوم از صنعت چاپ و با <br /> استفاده سادگی نامفهوم از صنعت چاپ و با استفاده</li>
            <li>سادگی نامفهوم از صنعت چاپ و با استفاده</li>
          </$DeUL>
        </$Descreiption>
      </$DeWrapper>
  )
}

// ===== Styles ======
const $DeWrapper = styled.section`
  padding: 0 7rem;
	margin-bottom: 20vh;

  @media ${device.tablet} {
    padding: 0 4rem;
  }

  @media ${device.mobileM} {
    padding: 0 2rem;
  }
`;

const $Descreiption = styled.div`
  padding: 5.4rem 5.6rem;
  border: 0.05rem solid ${neutral[400_30]};

  filter: ${darkTheme.shadow.boxShadow};
  backdrop-filter: blur(1rem);

  border-radius: 1.5rem;
`;

const $DeTitle = styled.h1`
  margin-bottom: 3.5rem;
  font-family: ${fontsTheme.primaryExtraBold};
  font-weight: 800;
  font-size: ${typeScale.header1};
  line-height: 1.8em;
  text-align: center;

  color: ${neutral[100]};
`;

const $DeParagraph = styled.p`
  margin-bottom: 5rem;
  font-family: ${fontsTheme.primaryLight};
  font-weight: 300;
  font-size: ${typeScale.header3};
  line-height: 2em;

  text-align: justify;

  color: ${neutral[200]};
`;

const $DeUL = styled.ul`
	font-family: ${fontsTheme.primaryLight};
  font-size: ${typeScale.header2};
	font-weight: 400;
  line-height: 2em;

  color: #e6e7e8;

  li{
		position: relative;
		margin-bottom: 1rem;
		margin-right: 3rem;
		&::before {
		content: "";
		position: absolute;
		top: 1em;
		transform: translateY(-50%);
		right: -3rem;
		width: 1.1rem;
		height: 1.1rem;
		border-radius: 100%;
		background-color: ${neutral[100]};
  }
	}
`;