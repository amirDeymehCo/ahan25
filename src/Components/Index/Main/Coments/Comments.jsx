import { useEffect, useState } from "react";
import CommentsServices from "../../../../Services/commentsServices";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TitleSection from "../../../Common/TitleSection/TitleSection";
import { DefaultLogo, Virgo } from "../../../Icons/Icons";
import {
  Card,
  SectionStyle,
  BodyCardComment,
  FooterCardComment,
  HeaderCardComment,
  NoComments,
} from "./CommentsStyles";

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
const Comments = () => {
  const [dataComments, setDataComments] = useState([]);

  useEffect(() => {
    // CommentsServices.listComments((res) => {
    //   console.log(res);
    //   if (res.code === 200) {
    //     setDataComments(res.result);
    //   }
    // });
  }, []);

  return (
    <SectionStyle>
      <TitleSection
        title={"نظرات مشتریان ما"}
        paragraf="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ

"
      />
      {dataComments === [] ? (
        <Swiper
          slidesPerGroup={1}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1074: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {dataComments.map((e, i) => (
            <SwiperSlide key={i}>
              <Card className="card">
                <span className="virgo">
                  <Virgo />
                </span>
                <HeaderCardComment className="header">
                  <DefaultLogo />
                  <h3>فولاد مبارکه</h3>
                </HeaderCardComment>
                <BodyCardComment className="body">
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                    صنعت چاپ و با استفاده لورم ایپسوم متن ساختگی با تولید سادگی
                    نامفهوم
                  </p>
                </BodyCardComment>
                <FooterCardComment className="footer">
                  <h4>امیر یزدی</h4>
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی </p>
                </FooterCardComment>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <NoComments>
          <h2>نظری وجود ندارد</h2>
        </NoComments>
      )}
    </SectionStyle>
  );
};

export default Comments;
