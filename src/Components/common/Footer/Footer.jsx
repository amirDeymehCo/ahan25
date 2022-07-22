import { useEffect, useState } from "react";
import { Get } from "./../../../utils/axiosHelper/AxiosHelper";
import { ArrowTop, Email, Location, Mobile, Twitter } from "../../Icons/Icons";
import {
  Col4,
  CopyRight,
  FooterStyle,
  Col6,
  TextGroup,
  ItemList,
} from "./FooterStyles";
import PostsServices from "../../../Services/Posts/Posts";
import Link from "next/link";
import moment from "moment-jalaali";
import Image from "next/Image";

const dataLink2 = [
  { text: "میلگرد", href: "#" },
  { text: "میلگرد", href: "#" },
  { text: "میلگرد", href: "#" },
  { text: "میلگرد", href: "#" },
];

const Footer = () => {
  const [dataFooter, setDataFooter] = useState(false);
  const [dataBlog, setDataBlog] = useState([]);

  const handelScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    Get("/front/siteData", {}, (res) => {
      if (res.code === 200) {
        setDataFooter(res.result);
      }
    });

    PostsServices.getListPosts((res) => {
      if (res.code === 200) {
        setDataBlog(res.result);
      }
    });
  }, []);

  return (
    dataFooter && (
      <>
        <FooterStyle>
          <Col4>
            <h3>درباره ما</h3>
            <p>{dataFooter.aboutUs.fa.content}</p>
          </Col4>
          <Col4 row={true}>
            <Col6>
              <h3>تازه ها در بلاگ</h3>
              <ul>
                {dataBlog.splice(0, 4).map((e, i) => (
                  <ItemList border={"1px solid #ccc5b963"} key={i}>
                    <Link href="/posts/[id]" as={`/posts/${e._id}`}>
                      <a className="name">{e.fa.name}</a>
                    </Link>
                    <span className="date">
                      {moment(e.updatedAt).format("jYYYY/jMM/jDD")}
                    </span>
                  </ItemList>
                ))}
              </ul>
            </Col6>
            <Col6>
              <h3>دسترسی سریع</h3>
              <ul>
                {dataLink2.map((e, i) => (
                  <ItemList border={"1px solid #ccc5b963"} key={i}>
                    <a href={e.href} className="name">
                      {e.text}
                    </a>
                  </ItemList>
                ))}
              </ul>
            </Col6>{" "}
          </Col4>
          <Col4>
            <h3>راه های ارتباطی</h3>
            <TextGroup>
              <span>
                <Location />
              </span>
              <p>{dataFooter.contactUs.fa.content}</p>
            </TextGroup>
            <TextGroup>
              <span>
                <Email />
              </span>
              <p>alma.lawson@example.com</p>
            </TextGroup>
            <TextGroup>
              <span>
                <Mobile />
              </span>
              <p>(808) 555-0111</p>
            </TextGroup>
            <TextGroup>
              {dataFooter.socialMedia.map((e, i) => (
                <a key={e._id} href={"http://" + e.url}>
                  <Image
                    loader={({ src }) => src}
                    src={"https://metalbackend.ryt-service.ir/" + e.imageUrl}
                    width={50}
                    height={50}
                  />
                </a>
              ))}
            </TextGroup>
          </Col4>
        </FooterStyle>
        <CopyRight>
          <p>Copyright © 2021 All rights reserved </p>
          <button onClick={handelScrollTop}>
            <ArrowTop width="23" height="22" />
          </button>
        </CopyRight>
      </>
    )
  );
};

export default Footer;
