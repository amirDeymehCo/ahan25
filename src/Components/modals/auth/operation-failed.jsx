import styled from "styled-components";
import ModalWrapper from "../../common/modal-wrapper";
import ModalTitle from "./common/title";
import ModalFooter from "./common/footer";
import ModalDescription from "./common/description";
import RightBarIconPayment from "./common/right-bar-icon-payment";

export default function OperationFailed({ isPage }) {
  return (
    <ModalWrapper
      name="operation-failed"
      isPage={isPage}
      rightBar={<RightBarIconPayment label="پرداخت ناموفق" success={false} />}
      leftBar={
        <$Wrapper>
          <ModalTitle title="پرداخت با موفقیت انجام نشد." wrapperStyle="margin-bottom: 2rem;" />
          <ModalDescription>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده
          </ModalDescription>
          <ModalFooter
            btn={{ children: "بازگشت" }}
            isPage={isPage}
            wrapperStyle="justify-content: center; padding-top: 6rem;"
          />
        </$Wrapper>
      }
    />
  );
}

// ====== Styles ======
const $Wrapper = styled.div``;
