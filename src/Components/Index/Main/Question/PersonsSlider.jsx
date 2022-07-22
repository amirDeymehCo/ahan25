import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import CardSliderPerson from "./CardSliderPerson";
import { LinkShowPerson, SectionRight } from "./QuestionStyles";
import { useEffect, useState } from "react";
import Authorities from "../../../../Services/authorities/authorities";

const PersonsSlider = () => {
  const [dataAuthorities, setDataAuthorities] = useState(false);
  useEffect(() => {
    Authorities.getListAuthorities((res) => {
      console.log(res);
      if (res.code === 200) {
        setDataAuthorities(res.result);
      }
    });
  }, []);

  console.log(dataAuthorities);

  return (
    <SectionRight className="section">
      {dataAuthorities && (
        <div className="root-slider">
          <Swiper
            slidesPerView={1}
            spaceBetween={80}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            breakpoints={{
              450: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              680: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              800: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              912: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
          >
            {dataAuthorities.map((e, i) => (
              <SwiperSlide key={i}>
                <CardSliderPerson
                  image={e.image}
                  name={e.fa.name}
                  phone={e.phone}
                  _id={e._id}
                  section={e.fa.section}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <LinkShowPerson href="#" className="link-show-person">
            مشاهده کارشناس فروش
          </LinkShowPerson>
        </div>
      )}
    </SectionRight>
  );
};

export default PersonsSlider;
