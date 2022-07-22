import { useState } from "react";
import { ArrowTop } from "../../../Icons/Icons";

import { BoxQuestionStyle, BtnArrow } from "./QuestionStyles";

const BoxQuestion = ({ index ,question,answer}) => {
  const [activeBox, setActiveBox] = useState(index === 0);

  return (
    <BoxQuestionStyle active={activeBox}>
      <h5>{question}</h5>
      <p>
        {answer}
      </p>
      <BtnArrow active={activeBox} onClick={() => setActiveBox((c) => !c)}>
        <ArrowTop />
      </BtnArrow>
    </BoxQuestionStyle>
  );
};

export default BoxQuestion;
