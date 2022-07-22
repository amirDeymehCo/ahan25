import { useEffect,useState } from 'react';
import TitleSection from "../../../Common/TitleSection/TitleSection";
import { List } from "./ListGetProductsStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Card from "./Card";
import {
  Box,
  CardBonki,
  Faktore,
  SendAndGet,
  SendProduct,
  User,
} from "../../../Icons/Icons";
import { Get } from '../../../../utils/axiosHelper/AxiosHelper';

const data = [
  { icon: <User />, text: "انتخاب کالا و استعلام قیمت" },
  { icon: <Faktore />, text: "صدور پیش فاکتور و اطلاع رسانی" },
  { icon: <SendProduct />, text: "درخواست خرید کالا" },
  { icon: <Box />, text: "هماهنگی ارسال کالا" },
  { icon: <SendAndGet />, text: "ارسال و تحویل کالا" },
  { icon: <CardBonki />, text: "تسویه نهایی" },
];
const ListGetProducts = () => {
  const [dataList, setDataList] = useState([])

  useEffect(()=>{
    Get("/front/siteData", {}, (res) => {
      console.log(res);
      if (res.code === 200) {
        setDataList(res.result.orders);
      }
    });
  },[])


  return (
    <section>
      <TitleSection
        title="مراحل ثبت و تحویل سفارش"
        paragraf="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
      />
      <List>
        <Swiper
          slidesPerGroup={1}
          breakpoints={{
            405: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            592: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            821: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1074: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          spaceBetween={80}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {dataList.map((e, i) => (
            <SwiperSlide key={e._id}>
              <Card level={e.level} text={e.fa.title} imageUrl={e.imageUrl} />
            </SwiperSlide>
          ))}
        </Swiper>
      </List>
    </section>
  );
};

export default ListGetProducts;
