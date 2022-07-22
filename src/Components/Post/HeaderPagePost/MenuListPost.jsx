import {
  MenuPostStyles,
  BoxPostMenu,
  DivImageMP,
} from "./HeaderPagePostStyles";
import image1 from "../1.jpg";
import { useEffect, useState } from "react";
import PostsServices from "../../../Services/Posts/Posts";
import Image from "next/image";
import Link from "next/link";

const MenuListPosts = ({ _id }) => {
  const [dataPosts, setDataPosts] = useState([]);
  const data = [{}, {}];

  useEffect(() => {
    PostsServices.getListPosts((res) => {
      if (res.code === 200) {
        setDataPosts(res.result);
      }
    });
  }, []);

  const dataFilter = dataPosts.filter((x) => x._id !== _id);

  return (
    <MenuPostStyles>
      <h4>پست های مرتبط</h4>
      {dataFilter.splice(0, 2).map((e, i) => (
        <BoxPostMenu key={i}>
          <Link href="/posts/[id]" as={`/posts/${e._id}`}>
            <a>
              <DivImageMP>
                <Image src={image1} layout="responsive" alt="image post" />
              </DivImageMP>
              <div className="body-amir-2">
                <h3>{e.fa.name}</h3>
                <p>{e.fa.description}</p>
                <span>12بهمن ، 1400</span>
              </div>
            </a>
          </Link>
        </BoxPostMenu>
      ))}
    </MenuPostStyles>
  );
};

export default MenuListPosts;
