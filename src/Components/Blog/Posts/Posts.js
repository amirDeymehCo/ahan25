import React from "react";
import UserLogoImg from "../../../assets/Blogposts/user.jpg";
import {
  Wrapper,
  ImageBox,
  UserProfile,
  Profile,
  UserName,
  UserLogo,
  History,
  Details,
  DetailTitle,
  DetailDescription,
  Hashtag,
  Footer,
  FooterItem,
  Divider,
  ViewLogo,
  LikeLogo,
  Number,
  CommentLogo,
  Cover
} from "./styles";
import moment from "moment-jalaali";
import Link from "next/link";
import Image from "next/Image"

const Posts = ({ post }) => {
  return (
    <React.Fragment>
      <Wrapper key={post.id}>
        <Link href="/posts/[id]" as={`/posts/${post._id}`}>
          <a>
            <ImageBox>
              <Cover></Cover>
                <Image loader={({src})=>src} layout="fill"  src={`https://metalbackend.ryt-service.ir/uploads/thumbnails/${post.thumbnail}`}/>
              <UserProfile>
                <Profile>
                  <UserName>{post.fa.writer}</UserName>
                  <UserLogo src={UserLogoImg} alt={post.fa.writer} />
                </Profile>
                <History>
                  {moment(post.updatedAt).format("jYYYY/jMM/jDD")}
                </History>
              </UserProfile>
            </ImageBox>

            <Details>
              <DetailTitle>{post.fa.name}</DetailTitle>
              <DetailDescription>
                <button>ادامه مطلب</button>
                <p>{post.fa.description}</p>
              </DetailDescription>
              {post.fa.tags.map((e, i) => (
                <Hashtag key={i}>{e}</Hashtag>
              ))}
            </Details>

            <Divider />

            <Footer>
              <FooterItem>
                <Number>109 نظر</Number>
                <CommentLogo />
              </FooterItem>
              <FooterItem>
                <Number>{post.__v} بازدید کننده</Number>
                <ViewLogo />
              </FooterItem>
              <FooterItem>
                <Number>لایک 109</Number>
                <LikeLogo />
              </FooterItem>
            </Footer>
          </a>
        </Link>
      </Wrapper>
    </React.Fragment>
  );
};
export default Posts;
