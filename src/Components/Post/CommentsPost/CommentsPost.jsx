import {
  AddComment,
  ListComments,
  BodyComment,
  NotComment,
} from "./CommentsPostStyles";
import { TimeDate } from "../../Icons/Icons";
import image1 from "../1.jpg";
import BtnShow from "../../common/BtnShow/BtnShow";
import Image from "next/image";
import { useEffect, useState } from "react";
import CommentsServices from "../../../Services/commentsServices";
import { AddHeader } from "../../../utils/axiosHelper/AxiosHelper";

const CommentsPost = ({ _id }) => {
  const [listComments, setListComments] = useState([]);
  const [textComment, setTextComment] = useState("");
  const { token } = useSelector((state) => state.profileUser);

  // useEffect(() => {
  //   CommentsServices.listCommentsById(_id, (res) => {
  //     if (res.code === 200) {
  //       setListComments(res.result);
  //     }
  //   });
  // }, [_id]);

  const handelCreateComment = (event) => {
    event.preventDefault();
    AddHeader("token", token);
    const data = {
      targetId: _id,
      text: textComment,
      type: "post",
      rating: 10,
    };
    CommentsServices.createComment(data, (res) => {
      console.log(res);
    });
  };

  return (
    <>
      <ListComments>
        {listComments.length ? (
          listComments.map((e, i) => (
            <li key={i}>
              <Image layout={"responsive"} src={image1} alt="image user" />
              <span className="date">
                <TimeDate />
                12 بهمن،1400
              </span>
              <BodyComment>
                <h4>نام کاربری</h4>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است{" "}
                </p>
              </BodyComment>
            </li>
          ))
        ) : (
          <NotComment>
            <h3>هنوز برای این پست کامنتی وجود ندارد</h3>
          </NotComment>
        )}
        {listComments.length && <BtnShow text="مشاهده بیشتر" />}
      </ListComments>
      <AddComment onSubmit={handelCreateComment}>
        <div>
          <input type="text" placeholder="اسم" />
          <input type="email" placeholder="ایمیل" />
          <textarea
            value={textComment}
            onChange={(e) => setTextComment(e.target.value)}
            placeholder="نظر شما"
          ></textarea>
          <div className="btn-submit">
            <button type="submit">ثبت نظر</button>
          </div>
        </div>
      </AddComment>
    </>
  );
};

export default CommentsPost;
