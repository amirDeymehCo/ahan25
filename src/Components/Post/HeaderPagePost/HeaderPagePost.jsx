import {
  CoverBg,
  CoverPostStyles,
  DivTextFooter,
  FooterCover,
  ShearBtn,
  CategoryStyles,
  MenuPostStyles,
  Tag,
  BoxPostMenu,
} from "./HeaderPagePostStyles";
import { Shear } from "./../../Icons/Icons";
import image1 from "./../1.jpg";
import Image from "next/image";
import moment from "moment-jalaali";
import MenuListPosts from "./MenuListPost";

const HeaderPagePost = ({ date, description, tags, _id,writer,image }) => {
  const url = `https://metalbackend.ryt-service.ir/uploads/thumbnails/${image}`
  return (
    <>
      <CoverPostStyles>
        <CoverBg>
          <ShearBtn>
            <Shear color="#ffffffff" />
          </ShearBtn>
          <FooterCover>
            <DivTextFooter>
              <Image src={image1} alt="image" width={50} height={55} />
              <div>
                <h2>{writer}</h2>
                <p>{description}</p>
              </div>
            </DivTextFooter>
          </FooterCover>
          <span className="date">{moment(date).format("jYYYY/jMM/jDD")}</span>
        </CoverBg>
        <Image
          className="cover-post"
          layout="fill"
          loader={({src})=>src}
          src={url}
          alt="name posts"
        />
      </CoverPostStyles>
      <CategoryStyles>
        <div>
          <h4>دسته بندی</h4>
          <p>آهنالات - تیرآهن</p>
        </div>
        <div>
          <h4>تگ</h4>
          <Tag>
            {tags.map((e, i) => (
              <span key={i}>{e}</span>
            ))}
          </Tag>
        </div>
      </CategoryStyles>
      <MenuListPosts _id={_id} />
    </>
  );
};

export default HeaderPagePost;
