import { useState } from "react";
import { BookIcon, EyeIcon, LikeIcon } from "../../../Icons/Icons";
import {
  DivData,
  DivIcons,
  LineDiv,
  ListDivActive,
  ListDivDeActive,
  ListNewsDiv,
} from "./Style";
const ListNews = () => {
  const [active, setActive] = useState(0);
  const items = [
    {
      id: 0,
      name: "قیمت میلگرد",
      text: "یلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      icon: <BookIcon size="16" color="#aaa" />,
      visited: 109,
      visitedIcon: <EyeIcon size={18} color="#DA7C57" />,
      liked: 200,
      likedIcon: <LikeIcon size={18} color="#DA7C57" />,
    },
    {
      id: 1,
      name: "قیمت میلگرد",
      text: "یلوا تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      icon: <BookIcon size="16" color="#aaa" />,
      visited: 109,
      visitedIcon: <EyeIcon size={18} color="#DA7C57" />,
      liked: 200,
      likedIcon: <LikeIcon size={18} color="#DA7C57" />,
    },
    {
      id: 2,
      name: "قیمت میلگرد",
      text: "یلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      icon: <BookIcon size="16" color="#aaa" />,
      visited: 109,
      visitedIcon: <EyeIcon size={18} color="#DA7C57" />,
      liked: 200,
      likedIcon: <LikeIcon size={18} color="#DA7C57" />,
    },
    {
      id: 3,
      name: "قیمت میلگرد",
      text: "یلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      icon: <BookIcon size="16" color="#aaa" />,
      visited: 109,
      visitedIcon: <EyeIcon size={18} color="#DA7C57" />,
      liked: 200,
      likedIcon: <LikeIcon size={18} color="#DA7C57" />,
    },
    {
      id: 4,
      name: "قیمت میلگرد",
      text: "یلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      icon: <BookIcon size="16" color="#aaa" />,
      visited: 109,
      visitedIcon: <EyeIcon size={18} color="#DA7C57" />,
      liked: 200,
      likedIcon: <LikeIcon size={18} color="#DA7C57" />,
    },
    {
      id: 5,
      name: "قیمت میلگرد",
      text: "یلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      icon: <BookIcon size="16" color="#aaa" />,
      visited: 109,
      visitedIcon: <EyeIcon size={18} color="#DA7C57" />,
      liked: 200,
      likedIcon: <LikeIcon size={18} color="#DA7C57" />,
    },
    {
      id: 5,
      name: "قیمت میلگرد",
      text: "یلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      icon: <BookIcon size="16" color="#aaa" />,
      visited: 109,
      visitedIcon: <EyeIcon size={18} color="#DA7C57" />,
      liked: 200,
      likedIcon: <LikeIcon size={18} color="#DA7C57" />,
    },
    {
      id: 5,
      name: "قیمت میلگرد",
      text: "یلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      icon: <BookIcon size="16" color="#aaa" />,
      visited: 109,
      visitedIcon: <EyeIcon size={18} color="#DA7C57" />,
      liked: 200,
      likedIcon: <LikeIcon size={18} color="#DA7C57" />,
    },
    {
      id: 5,
      name: "قیمت میلگرد",
      text: "یلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      icon: <BookIcon size="16" color="#aaa" />,
      visited: 109,
      visitedIcon: <EyeIcon size={18} color="#DA7C57" />,
      liked: 200,
      likedIcon: <LikeIcon size={18} color="#DA7C57" />,
    },
    {
      id: 5,
      name: "قیمت میلگرد",
      text: "یلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      icon: <BookIcon size="16" color="#aaa" />,
      visited: 109,
      visitedIcon: <EyeIcon size={18} color="#DA7C57" />,
      liked: 200,
      likedIcon: <LikeIcon size={18} color="#DA7C57" />,
    },
  ];
  return (
    <ListNewsDiv>
      {items.map((item) => {
        return (
          <>
            <ListDivActive
              background={active === item.id ? "#434d6d" : ""}
              onClick={() => setActive(item.id)}
            >
              <DivData>
                <h2>{item.name}</h2>
                <p>{item.text}</p>
                <div className="Icons">
                  <span>
                    {item.visited}
                    {item.visitedIcon}
                  </span>
                  <span>
                    {item.liked}
                    {item.likedIcon}
                  </span>
                </div>
              </DivData>
              <div className="Icon">
                <span>
                  <BookIcon size="26" color="#aaa" />
                </span>
              </div>
            </ListDivActive>
            <LineDiv />
          </>
        );
      })}
    </ListNewsDiv>
  );
};

export default ListNews;
