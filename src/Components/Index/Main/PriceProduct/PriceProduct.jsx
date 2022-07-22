import { User } from "../../../Icons/Icons";
import { DivIconUser, DivText, Section } from "./PriceProductStyles";

const PriceProduct = () => {
  return (
    <Section>
      <div className="box">
        <DivIconUser>
          <User size={"130"} />
        </DivIconUser>
        <DivText>
          <h3>انتخاب کالا و استعلام قیمت</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </DivText>
      </div>
    </Section>
  );
};

export default PriceProduct;
