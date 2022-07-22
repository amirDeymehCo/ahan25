import Factory from './Factory';
import styled from 'styled-components';
import { neutral, primary, secondary } from '../../../styles/global/color';
import UseTitle from '../../../hooks/useTitle';
import UseSlider from '../../../hooks/useSlider';

import AdobeLogo from '../../../assets/ManufacturingFacturies/adobe_logo.svg';
import LinktreeLogo from '../../../assets/ManufacturingFacturies/linktree.svg';
import LogowanieLogo from '../../../assets/ManufacturingFacturies/logowanie.svg';
import MonozoLogo from '../../../assets/ManufacturingFacturies/monzo.svg';
import TomClancyLogo from '../../../assets/ManufacturingFacturies/tom_clancy_division.svg';
import XingLogo from '../../../assets/ManufacturingFacturies/xing.svg';
import ImageTest from '../../../assets/ManufacturingFacturies/detailImg.svg';

import { fontsTheme } from '../../../styles/global/typography';
import { useState } from 'react';
import { device } from '../../../styles/global';
import UseShowMore from '../../../hooks/useShowMore';
import { SwiperSlide } from 'swiper/react';

const ManufacturingFactories = () => {
  const [detail, setDetail] = useState({
    id: 1,
    title:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    logo_img: AdobeLogo,
    detail_img: ImageTest,
    name: 'فولاد مبارکه',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد ',
  });

  const data = [
    {
      id: 1,
      title:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      logo_img: AdobeLogo,
      detail_img: ImageTest,
      name: 'فولاد مبارکه',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد ',
    },
    {
      id: 2,
      title:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      logo_img: LinktreeLogo,
      detail_img: ImageTest,
      name: 'فولاد مبارکه',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد  تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل',
    },
    {
      id: 3,
      title:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      logo_img: LogowanieLogo,
      detail_img: ImageTest,
      name: ' فولاد مبارکه',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد ',
    },
    {
      id: 4,
      title:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      logo_img: MonozoLogo,
      detail_img: ImageTest,
      name: 'فولاد مبارکه',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد  تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل',
    },
    {
      id: 5,
      title:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      logo_img: TomClancyLogo,
      detail_img: ImageTest,
      name: 'فولاد مبارکه',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد ',
    },
    {
      id: 6,
      title:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      logo_img: XingLogo,
      detail_img: ImageTest,
      name: 'فولاد مبارکه',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد ',
    },
  ];
  const showDetailHandler = (id) => {
    const clicked = data.find((item) => item.id === id);
    setDetail(clicked);
  };

  const $DetailImage = styled(detail.detail_img)`
    width: 18.1em;
    height: 20em;
    fill: none;
    background: #ff000019;
    @media ${device.mobileS} {
      width: 10em;
      height: 10em;
    }
  `;

  return (
    <$Wrapper>
      <$Title>
        <UseTitle
          heading="کارخانجات تولیدی"
          paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت"
        />
      </$Title>
      <$FactoriesList>
        <UseSlider
          centeredSlides={true}
          delay={3500}
          navigation={false}
          pagination={false}
          paginationWidth={10}
          overflow="hidden"
          mobileM={2}
          mobileL={2}
          tablet={3}
          laptop={4}
          desktop={6}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Factory
                key={item.id}
                {...item}
                showDetailHandler={showDetailHandler}
              />
            </SwiperSlide>
          ))}
        </UseSlider>
      </$FactoriesList>
      <$Details>
        <$DetailsLeft>
          <p>{detail.desc}</p>
          <div>
            <UseShowMore href="/" justifyContent="flex-start" flexDirection="row" marginTop="5em" title="مشاهده محصولات" />
          </div>
        </$DetailsLeft>
        <$DetailsRight>
          <$DetailsRightContent>
            <$DetailImage />
            <$DetailRightDesc>
              <h4>{detail.name}</h4>
              <p>{detail.title}</p>
            </$DetailRightDesc>
          </$DetailsRightContent>
        </$DetailsRight>
      </$Details>
    </$Wrapper>
  );
};

export default ManufacturingFactories;

const $DetailsRightContent = styled.div`
  width: 60%;
  margin: 0 auto;
  @media ${device.mobileL} {
    width: 90%;
  }
`;
const $DetailRightDesc = styled.div`
  h4 {
    font-family: ${fontsTheme.secondaryTitle};
    font-style: normal;
    font-weight: 700;
    font-size: 2.4em;
    line-height: 2.4em;
    text-align: center;
    color: ${neutral[200]};
    margin-top: 3em;
  }

  p {
    font-family: ${fontsTheme.primaryBold};
    font-style: normal;
    font-weight: 300;
    font-size: 1em;
    line-height: 1.4em;
    text-align: center;
    text-transform: uppercase;
    color: ${neutral[300]};
    margin-top: 1.4em;
  }
`;
const $Wrapper = styled.div`
  position: relative;
  margin-top: 20em;
  direction: rtl;
`;
const $Title = styled.div``;
const $FactoriesList = styled.div`
  /* display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center; */
`;
const $Details = styled.div`
  border: 0.05em solid ${neutral[400_50]};
  box-sizing: border-box;
  filter: drop-shadow(${(p) => p.theme.shadow.boxShadow});
  backdrop-filter: blur(4em);
  border-radius: 2em;
  transform: matrix(1, 0, 0, 1, 0, 0);
  width: 100%;
  margin-top: 6.6em;
  margin-bottom: 3em;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  padding: 6.7em 0 8em;
  @media ${device.mobileL} {
    flex-direction: column-reverse;
    padding: 3em;
  }
`;
const $DetailsLeft = styled.div`
  flex: 3;

  p {
    font-family: ${fontsTheme.primaryBold};
    font-style: normal;
    font-weight: 300;
    font-size: 1.4em;
    line-height: 3.7em;
    text-align: right;
    text-transform: uppercase;
    padding-left: 9em;
    color: ${neutral[200]};
    @media ${device.mobileL} {
      padding-left: 0em;
    }
  }
`;
const $DetailsRight = styled.div`
  flex: 1;
  text-align: center;
  margin: 0 auto;
`;
