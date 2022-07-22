import { Container } from "../../components/Post/PostPageStyles";
import HeaderPagePost from "../../components/Post/HeaderPagePost/HeaderPagePost";
import MainPagePost from "../../components/Post/MainPagePost/MainPagePost";
import CommentsPost from "../../components/Post/CommentsPost/CommentsPost";
import PostsServices from "../../Services/Posts/Posts";
import Error from "next/error";

const SinglePost = ({ postData }) => {
  if (postData.code !== 200) {
    return (
      <Error statusCode={404} title="مقاله ای که به دنبال آن بودید پدا نشد" />
    );
  }

  console.log(postData);

  const resultData = postData.result;

  return (
    <Container>
      <HeaderPagePost
        date={resultData.updatedAt}
        tags={resultData.fa.tags}
        description={resultData.fa.description}
        _id={resultData._id}
        writer={resultData.fa.writer}
        image={resultData.thumbnail}
      />
      <MainPagePost name={resultData.fa.name} content={resultData.fa.content} />
      <CommentsPost _id={resultData._id} />
    </Container>
  );
};

export async function getServerSideProps(ctx) {
  const id = ctx.query.id;
  let postData = null;
  await PostsServices.getSinglePost(id, (res) => {
    postData = res;
  });

  return {
    props: {
      postData: postData,
    },
  };
}

export default SinglePost;
