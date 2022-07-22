import { Result, Price, ListResult, FooterResult } from "./PaymentStyles";

const CardResult = () => {
  return (
    <Result>
      {" "}
      <h3>فاکتور خرید</h3>
      <ListResult>
        <li>
          <span>جمع کل</span>
          <Price>
            14000 <span>تومان</span>
          </Price>
        </li>
        <li>
          <span>هزینه تماس</span>
          <Price>
            0* <span>تومان</span>
          </Price>
        </li>
        <li>
          <span>ارزش افزوده</span>
          <span>0*%</span>
        </li>
        <li>
          <span>تخفیف کل</span>
          <Price>
            0* <span>تومان</span>
          </Price>
        </li>
      </ListResult>
      <FooterResult>
        <div>
          <p>هزینه قابل پرداخت :</p>
          <p className="price">
            3.9689
            <span>تومان</span>
          </p>
        </div>
        <button type="button">شیوه پرداخت</button>
      </FooterResult>
    </Result>
  );
};

export default CardResult;
