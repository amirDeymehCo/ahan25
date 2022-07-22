import Footer from "../../components/common/Footer/Footer";
import Navbar from "../../components/layout/navabar";
import Main from "../../components/Blog/Main";
import PostsServices from "../../Services/Posts/Posts";
import { CommentLogo } from "../../components/Blog/Posts/styles";
import axios from "axios";

export default function BlogPage({ posts }) {
  console.log(posts);
  return (
    <div style={{ direction: "rtl" }}>
      {/* <Navbar /> */}
      <Main isPage={true} posts={posts} />
      {/*<Blog isPage={true} />*/}
      <Footer />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const url = "https://metalbackend.ryt-service.ir/front/blog";
  const res = await axios.get(url);
  return {
    props: {
      posts: res.data.result,
    },
  };
}
