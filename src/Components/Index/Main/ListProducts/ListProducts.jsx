import { SectionSlider } from "./ListProductsStyles";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import TitleSection from "./../../../Common/TitleSection/TitleSection";
import { useEffect, useState } from "react";
import ProductServices from "./../../../../Services/Products/Products";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../Spinner/Spinner";
import { loadedProducts } from "../../../../redux/slices/productsSlice";

const ListProducts = () => {
  const { isLoading, products, filter } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoading || filter) {
      ProductServices.getListProduct((res) => {
        if (res.code === 200) {
          dispatch(loadedProducts(res.result, false));
        }
      });
    }
  }, [isLoading, filter, dispatch]);

  if (isLoading) {
    return <Spinner text="...درحال دریافت اطلاعات لطفا منتظر بمانید" />;
  }

  return (
    <section>
      <TitleSection
        title={"لیست محصولات"}
        paragraf="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
      />
      <SectionSlider>
        <Swiper
          slidesPerGroup={2}
          breakpoints={{
            680: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1074: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {products.map((e, i) => (
            <SwiperSlide key={e._id}>
              <Card
                _id={e._id}
                unitPrice={e.unitPrice}
                name={e.fa.name}
                properties={e.properties}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionSlider>
    </section>
  );
};

export default ListProducts;
