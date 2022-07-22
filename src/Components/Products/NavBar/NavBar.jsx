import { Milgerd } from "../../../Icons";
import { Item, Nav } from "./NavBarStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
const NavBar = () => {
  const data = [{}, {}, {}, {}, {}, {}];
  return (
    <Nav>
      <ul>
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
            952: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1074: {
              slidesPerView: 7,
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
          <SwiperSlide>
            <Item active={true}>
              <a href="#">
                <span>
                  {" "}
                  <Milgerd />
                </span>{" "}
                میلگرد
              </a>
            </Item>
          </SwiperSlide>

          {data.map((e, i) => (
            <SwiperSlide key={i}>
              <Item key={i}>
                <a href="#">
                  <span>
                    {" "}
                    <Milgerd />
                  </span>
                  میلگرد
                </a>
              </Item>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </Nav>
  );
};

export default NavBar;
