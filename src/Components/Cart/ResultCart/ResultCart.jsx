import {
  Result,
  Price,
  ListResult,
  FooterResult,
  BtnResult,
  Box,
} from "./ResultCartStyles";

const ResultCart = ({
  allPrice,
  pricePost,
  Profit,
  Discount,
  priceUnit,
  btnText,
  btnColor,
  onClick,
  link,
}) => {
  return (
    <Result>
      {" "}
      <Box>
        <h3>فاکتور خرید</h3>
        <ListResult>
          <li>
            <span>جمع کل</span>
            <Price>
              {allPrice} <span>تومان</span>
            </Price>
          </li>
          <li>
            <span>هزینه ارسال</span>
            <Price>
              {pricePost} <span>تومان</span>
            </Price>
          </li>
          <li>
            <span>ارزش افزوده</span>
            <span>{Profit}%</span>
          </li>
          <li>
            <span>تخفیف کل</span>
            <Price>
              {Discount} <span>تومان</span>
            </Price>
          </li>
        </ListResult>
        <FooterResult>
          <div>
            <p>هزینه قابل پرداخت :</p>
            <p className="price">
              {priceUnit} <span>تومان</span>
            </p>
          </div>
          <BtnResult onClick={onClick} color={btnColor} type="submit">
            {link ? <a href="#type-payment">{btnText}</a> : btnText}
          </BtnResult>
        </FooterResult>
      </Box>
    </Result>
  );
};

export default ResultCart;
