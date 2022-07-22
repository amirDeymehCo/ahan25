import TitleSection from "../../../Common/TitleSection/TitleSection";
import { Section } from "./PostsStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Card from "./Card";
import { useEffect } from "react";
import PostsServices from "../../../../Services/Posts/Posts";
import { useState } from "react";

const Posts = () => {
  const [dataPosts, setDataPosts] = useState(false);

  useEffect(() => {
    PostsServices.getListPosts((res) => {
      if (res.code === 200) {
        console.log(res);
        setDataPosts(res.result);
      }
    });
  }, []);

  return (
    <Section>
      <TitleSection
        title={"پست های بلاگ"}
        paragraf="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ        "
      />

      <div className="container">
        <Swiper
          slidesPerGroup={1}
          breakpoints={{
            680: {
              slidesPerView: 2,
              spaceBetween: 80,
              slidesPerGroup: 1,
            },
            972: {
              slidesPerView: 2,
              spaceBetween: 45,
              slidesPerGroup: 2,
            },
            1074: {
              slidesPerView: 4,
              spaceBetween: 45,
              slidesPerGroup: 2,
            },
            1512: {
              slidesPerView: 5,
              spaceBetween: 45,
              slidesPerGroup: 2,
            },
          }}
          spaceBetween={100}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {dataPosts &&
            dataPosts.map((e, i) => (
              <SwiperSlide key={i}>
                <Card
                  img={e.thumbnail}
                  writer={e.fa.writer}
                  id={e._id}
                  name={e.fa.name}
                  tags={e.fa.tags}
                  description={e.fa.description}
                  visit={e.__v}
                  time={e.updatedAt}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default Posts;
