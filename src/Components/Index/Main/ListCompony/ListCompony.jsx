import TitleSection from "../../../Common/TitleSection/TitleSection";
import { Logo1} from "../../../Icons/Icons";
import { useEffect, useState } from "react";
import ProductServices from "./../../../../Services/Products/Products";
import Image  from 'next/image';
import {
  Section,
  RowCard,
  CardCompony,
  VectorCompony,
} from "./ListComponyStyles";


const ListCompony = () => {
  const [listComponyData, setListComponyData] = useState(false);

  useEffect(() => {
    ProductServices.getFactory((res) => {
      console.log(res)
      if(res.code === 200){
        setListComponyData(res.result);
      }
    });
  }, []);

  return (
    <Section>
      <TitleSection
        title={"کارخانجات تولیدی"}
        paragraf="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
      />
      <RowCard>
        {listComponyData &&
          listComponyData.map((e) => (
            <CardCompony key={e._id}>
              {/* <Image src={"/"+e.icon} width={400} height={400}/> */}
              <Logo1 />
              <h4>{e.fa.name}</h4>
            </CardCompony>
          ))}
      </RowCard>
      <VectorCompony></VectorCompony>
    </Section>
  );
};

export default ListCompony;
