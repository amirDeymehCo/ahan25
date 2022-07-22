/* eslint-disable react-hooks/exhaustive-deps */
import { SideBarStyles, HeaderSideBar, Mark } from "./SideBarStyles";
import { Like } from "./../../Icons/Icons";
import BodySideBarCo from "./bodySideBar";
import FavoritesServices from "./../../../Services/auth/favorites/favorites";
import { AddHeader } from "../../../utils/axiosHelper/AxiosHelper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const SideBar = ({ name, _id, product }) => {
  const [stateLike, setStateLike] = useState(false);
  const [update, setUpdate] = useState(false);
  const { token } = useSelector((state) => state.profileUser);

  const handelLike = () => {
    if (token.loading === false) {
      alert("ابتدا وارد سایت شوید");
    } else {
      AddHeader("token", token);

      if (stateLike) {
        FavoritesServices.deleteFavorites("product", _id, (res) => {
          if (res.code === 200) {
            setUpdate((c) => !c);
          }
        });
      } else {
        const dataLike = {
          type: "product",
          targetId: _id,
        };
        FavoritesServices.createFavorites(dataLike, (res) => {
          console.log(res);
          if (res.code === 200) {
            setUpdate((c) => !c);
          }
        });
      }
    }
  };

  useEffect(() => {
    AddHeader("token", token);
    FavoritesServices.listFavorites("product", (res) => {
      if (res.code === 200) {
        res.result.targets.map((e, i) => {
          if (e._id === _id) {
            setStateLike(true);
          } else {
            setStateLike(false);
          }
        });
      }
    });
  }, [_id, update]);

  return (
    <SideBarStyles>
      <HeaderSideBar>
        <div>
          <p className="code">(IPB) HEB ASTM</p>
          <h1>{name}</h1>
          <div>
            <Mark>کلاف</Mark>
            <Mark>کلاف</Mark>
          </div>
        </div>
        <button
          title={stateLike ? "حذف از علاقه مندی ها" : "افزودن به علاقه مندی ها"}
          onClick={handelLike}
        >
          <Like color={stateLike ? "red" : "#535C79"} size="40" />
        </button>
      </HeaderSideBar>
      <BodySideBarCo product={product} />
    </SideBarStyles>
  );
};

export default SideBar;
