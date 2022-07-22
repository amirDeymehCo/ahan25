import { AlaramIcon, ThemIcon } from "../../../Icons/Icons";
import { BtnDiv, Button } from "./BtnStyle";

const Btn = () => {
  return (
    <BtnDiv>
      <Button>
        <AlaramIcon size="22" color="#ffffff" />
      </Button>
      <Button>
        <ThemIcon size="22" color="#ffffff" />
      </Button>
      <Button>
        <button className="btn">ورود/ثبت نام</button>
      </Button>
      <Button>
        <button className="btn-noBg">سبد استعلام</button>
      </Button>
    </BtnDiv>
  );
};

export default Btn;
