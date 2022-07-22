import Image from 'next/image'
import { Comment, Like, Visit } from "../../../Icons/Icons";
import image1 from "./1.jpg";
import Link from "next/link";
import moment from "moment-jalaali";
import {
  BodyCard,
  CardPost,
  DivMark,
  FooterCard,
  HeaderCard,
} from "./PostsStyles";

const Card = ({ writer,img,name, tags, description, visit, time, id }) => {
  const url = `https://metalbackend.ryt-service.ir/uploads/thumbnails/${img}`
  return (
    <CardPost>
      <HeaderCard>
        <div className="text-header">
          <div>
            <Image
              className="image-user"
              width={25}
              height={25}
              src={image1}
              alt={writer}
            />
            <span>{writer}</span>
          </div>
          <span>{moment(time).format("jYYYY/jMM/jDD")}</span>
        </div>
        <Image loader={({ src }) => src} layout="fill" src={url} alt={name} />
      </HeaderCard>
      <BodyCard>
        <h3>{name}</h3>
        <div className="div-text">
          <p>{description}</p>
          <Link href={`/posts/${id}`}>
            <a>ادامه مطلب</a>
          </Link>
        </div>
        <DivMark>
          {tags.map((e, i) => (
            <span key={i}>{e}</span>
          ))}
        </DivMark>
      </BodyCard>
      <FooterCard>
        <div>
          <Like />
          200 لایک
        </div>
        <div>
          <Visit />
          {visit} بازدید
        </div>{" "}
        <div>
          <Comment />
          109 نظر
        </div>
      </FooterCard>
    </CardPost>
  );
};

export default Card;
