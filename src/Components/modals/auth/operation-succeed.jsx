import styled from "styled-components";
import ModalWrapper from "../../common/modal-wrapper";
import ModalTitle from "./common/title";
import ModalDescription from "./common/description";
import RightBarIconPayment from "./common/right-bar-icon-payment";
import { device, neutral, secondary, typeScale } from "../../../styles/global";
import { fontsTheme } from "../../../styles/global/typography";

export default function OperationSucceed({ isPage }) {
  return (
    <ModalWrapper
      name="operation-succeed"
      isPage={isPage}
      rightBar={<RightBarIconPayment label="پرداخت موفق" success={true} />}
      leftBar={
        <$Wrapper>
          <ModalTitle
            title="پرداخت با موفقیت انجام شد."
            wrapperStyle="margin-bottom: 1.8rem;"
          />
          <ModalDescription>
            از حسن انتخاب شما متشکریم با آرزوی رضایتمندی از سوی شما مشتاق بازگشت
            دوباره شما هستیم.
          </ModalDescription>
          <$List>
            <$Item>
              <span>تحویل گیرنده :</span>
              <span>امیر عباس موسوی</span>
            </$Item>
            <$Item>
              <span>کد رهگیری :</span>
              <$Num>1115055803</$Num>
            </$Item>
            <$Item>
              <span>مبلغ کل :</span>
              <span>
                <$Num>1,600,000</$Num>
                <span
                  style={{
                    fontFamily: fontsTheme.primaryLight,
                    fontSize: typeScale.header3,
                    color: neutral[300],
                    paddingRight: ".3rem",
                  }}
                >
                  تومان
                </span>
              </span>
            </$Item>
            <$Item>
              <span>تعداد مراحل باقی مانده :</span>
              <$Num>2</$Num>
            </$Item>
          </$List>
        </$Wrapper>
      }
    />
  );
}

// ====== Styles ======
const $Wrapper = styled.div``;

const $List = styled.ul`
  margin-top: 3rem;
  padding: 0 4rem;

  font-size: ${typeScale.header2};
  line-height: 2.5rem;

  color: ${neutral[200]};

  @media ${device.mobileL} {
    padding: 0;
  }
`;

const $Item = styled.li`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  padding: 1.3rem 0;
  gap: 2rem;

  &:last-child {
    grid-template-columns: max-content min-content;
    padding: 3rem 0 2rem;
    text-align: right;
    & > span:last-child {
      color: ${secondary[200]};
    }
  }

  & > span:last-child {
    text-align: center;
  }
`;

const $Num = styled.span`
  font-family: ${fontsTheme.secondaryTitle};
`;
