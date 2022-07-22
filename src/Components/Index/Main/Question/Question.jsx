import BoxQuestion from "./BoxQuestion";
import PersonsSlider from "./PersonsSlider";
import { Main, Vector1, SectionQuestions } from "./QuestionStyles";

import { VectorListGetProduct } from "../../../../Vectors";
import BtnShow from "../../../common/BtnShow/BtnShow";
import { useEffect } from 'react';
import QuestionServices from './../../../../Services/Question/Question';
import { useState } from 'react';

const data = [{}, {}, {}];

const Question = () => {
  const [dataQuestion, setDataQuestion] = useState(false)

  useEffect(()=>{
    QuestionServices.listQuestion(res=>{
      if(res.code === 200){
        console.log(res)
        setDataQuestion(res.result)
      }
    })
  },[])

  return (
    <Main>
      <Vector1>
        <VectorListGetProduct />
        </Vector1>
      <PersonsSlider />
      <SectionQuestions className="section">
        <div className="box">
          <h4>سوالات متداول</h4>
          {dataQuestion ? (
            dataQuestion.map((e, i) => (
              <BoxQuestion question={e.fa.question} answer={e.fa.answer}  index={i} key={i} />
            ))
          ):(
            <h4>سوالی وجود ندارد</h4>
          )}
          <BtnShow text="مشاهده بیشتر" href={"#"} />
        </div>
      </SectionQuestions>
    </Main>
  );
};

export default Question;
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
