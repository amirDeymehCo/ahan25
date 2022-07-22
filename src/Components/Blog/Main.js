import React from "react";
import PageModalWrapper from "../common/page-modal-wrapper";
import {
  Title,
  Description,
  Wrapper,
  PosterWidget,
  Poster,
  PosterImageWrapper,
  PosterImage,
  ImageOverlay,
  PosterContent,
  PosterTitle,
  PosterDescription,
  Posts,
  Not,
} from "./styles";
import SideBar from "./SideBar";
import PostImage from "../../assets/Blogposts/metal-cutting.jpg";
import Post from "./Posts/Posts";
import { filter } from "lodash";
import { useState, useEffect } from "react";
import Link from "next/link";
const Main = ({ isPage, posts }) => {
  const [search, setSearch] = useState("");
  const [filterPostState, setFilterPostState] = useState([]);

  useEffect(() => {
    const filterPost = posts.filter(
      (x) =>
        x.fa.name.toLowerCase().includes(search.toLowerCase().trim()) ||
        x.fa.description.toLowerCase().includes(search.toLowerCase().trim())
    );
    setFilterPostState(filterPost);
  }, [search, posts]);

  const listPostSelected = filterPostState.filter(x=>x._id !== filterPostState[0]._id)

  return (
    <PageModalWrapper name="blog" isPage={isPage}>
      <Title center>به وبلاگ ما خوش آمدید</Title>
      <Description>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و لورم ایپسوم
        متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و لورم ایپسوم متن ساختگی
        با تولید سادگی نامفهوم از صنعت چاپ و{" "}
      </Description>
      <Wrapper>
        <SideBar posts={posts} setSearch={setSearch} search={search} />
        <main>
          {filterPostState.length && (
            <PosterWidget>
              <Link href="/posts/[id]" as={`/posts/${filterPostState[0]._id}`}>
                <a>
                  <Poster>
                    <PosterImageWrapper>
                      <PosterImage loader={({src})=>src} src={`https://metalbackend.ryt-service.ir/uploads/thumbnails/${filterPostState[0].thumbnail}`} layout="fill" />
                      <ImageOverlay />
                      <PosterContent>
                        <PosterTitle> {filterPostState[0].fa.name}</PosterTitle>
                        <PosterDescription>
                          {filterPostState[0].fa.description}
                        </PosterDescription>
                      </PosterContent>
                    </PosterImageWrapper>
                  </Poster>
                </a>
              </Link>
            </PosterWidget>
          )}

          <Posts>
            {listPostSelected.length && (
              listPostSelected.map((post) => (
                <Post key={`list_posts_page_${post._id}`} post={post} />
              ))
            )}
          </Posts>
        </main>
      </Wrapper>
    </PageModalWrapper>
  );
};
export default Main;
