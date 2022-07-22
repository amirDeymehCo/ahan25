import styled from 'styled-components';
import { neutral, primary, secondary } from '../../../styles/global/color';
import UseTitle from '../../../hooks/useTitle';
import Cart from './Cart';
import Inquiry from '../../../assets/registration-process/inquiry.svg';
import Commercial from '../../../assets/registration-process/commercial.svg';
import PurchaseOrder from '../../../assets/registration-process/purchase_order.svg';
import Packing from '../../../assets/registration-process/packing.svg';
import Delivery from '../../../assets/registration-process/delivery.svg';
import CardPayment from '../../../assets/registration-process/card_payment.svg';
import { fontsTheme } from '../../../styles/global/typography';
import { useState } from 'react';
import { device } from '../../../styles/global';

const RegsitrationProcess = () => {
  const [detail, setDetail] = useState({
    id: 1,
    number: 1,
    logo_img: Inquiry,
    title: 'مراحل ثبت و تحویل سفارش',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد',
  });

  const data = [
    {
      id: 1,
      number: 1,
      logo_img: Inquiry,
      title: 'مراحل ثبت و تحویل سفارش',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد',
    },
    {
      id: 2,
      number: 2,
      logo_img: Commercial,
      title: 'صدور پیش فاکتور و اطلاع رسانی',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد',
    },
    {
      id: 3,
      number: 3,
      logo_img: PurchaseOrder,
      title: ' در خواست خرید کالا',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد',
    },
    {
      id: 4,
      number: 4,
      logo_img: Packing,
      title: 'هماهنگی ارسال کالا',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد',
    },
    {
      id: 5,
      number: 5,
      logo_img: Delivery,
      title: 'ارسال و تحویل کالا',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد',
    },
    {
      id: 6,
      number: 6,
      logo_img: CardPayment,
      title: 'تسویه نهایی',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد',
    },
  ];
  const showDetailHandler = (id) => {
    const clicked = data.find((item) => item.id === id);
    setDetail(clicked);
  };

  const DetailImage = styled(detail.logo_img)`
    width: 15em;
    height: 15em;
    fill: none;
    @media ${device.mobileS} {
      width: 10em;
      height: 10em;
    }
  `;

  return (
    <$Wrapper>
      <$Title>
        <UseTitle
          heading="مراحل ثبت و تحویل سفارش"
          paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت"
        />
      </$Title>
      <$Process>
        {data.map((item) => (
          <>
            <Cart
              key={item.id}
              {...item}
              showDetailHandler={showDetailHandler}
            />
          </>
        ))}
      </$Process>
      <$Details>
        <$DetailsLeft>
          <h4>{detail.title}</h4>
          <p>{detail.desc}</p>
        </$DetailsLeft>
        <$DetailsRight>
          <DetailImage />
        </$DetailsRight>
      </$Details>
    </$Wrapper>
  );
};

export default RegsitrationProcess;

const $Wrapper = styled.div`
  position: relative;
`;
const $Title = styled.div`
  margin-top: 20em;
  @media ${device.mobileS} {
  }
`;
const $Process = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  @media ${device.mobileM} {
    justify-content: space-around;
  }
  @media ${device.mobileL} {
    justify-content: center;
  }
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
  margin-bottom: 5.6em;
  display: flex;
  align-items: center;
  padding: 6.7em 0 8em;
  @media ${device.mobileL} {
    flex-direction: column-reverse;
    padding: 3em;
  }
`;

const $DetailsLeft = styled.div`
  flex: 2;

  h4 {
    font-family: ${fontsTheme.primaryBold};
    font-style: normal;
    font-weight: 800;
    font-size: 1.8em;
    line-height: 2.5em;
    text-align: right;
    color: ${neutral[100]};
    margin-bottom: 1em;
   
  }
  p {
    font-family: ${fontsTheme.primaryBold};
    font-style: normal;
    font-weight: 300;
    font-size: 1.4em;
    line-height: 2.4em;
    text-align: right;
    text-transform: uppercase;
    padding-left: 9em;
    color: ${neutral[300]};
    @media ${device.mobileL} {
      padding-left: 0em;
    }
  }
`;
const $DetailsRight = styled.div`
  flex: 1;
  text-align: center;
  /* margin: 5.5em 0 62px; */
  @media ${device.mobileL} {
      margin-bottom: 4em;
    }
`;

const $CircleBackground = styled.div`
  position: absolute;
  width: 50vw;
  height: 95%;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  border: 0.4em solid ${secondary[200]};
  opacity: 0.1;
  box-shadow: inset 0.1em 0.1em 2em 0.2em ${secondary[200]};
  
`;
