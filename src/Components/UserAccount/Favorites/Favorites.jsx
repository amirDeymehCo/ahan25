import { useEffect, useState } from "react";
import { TirAhan } from "../../Icons/Icons";
import BtnShow from "../../common/BtnShow/BtnShow";
import FavoritesServices from "../../../Services/auth/favorites/favorites";
import { AddHeader } from "../../../utils/axiosHelper/AxiosHelper";
import Link from "next/link";
import {
  CardFavorites,
  ContainerFavorites,
  LogoFavorites,
  TextFavorites,
  BoxCard,
  DivPrice,
  Not,
} from "./FavoritesStyles";
import { useSelector } from "react-redux";

const Favorites = () => {
  const [dataFavorites, setDataFavorites] = useState([]);
  const { token } = useSelector((state) => state.profileUser);

  useEffect(() => {
    AddHeader("token", token);
    FavoritesServices.listFavorites("product", (res) => {
      if (res.code === 200) {
        setDataFavorites(res.result.targets);
      }
    });
  }, [token]);

  return (
    <ContainerFavorites>
      {dataFavorites.length ? (
        dataFavorites.map((e, i) => (
          <BoxCard key={e._id}>
            <CardFavorites>
              <LogoFavorites>
                <TirAhan size="48" />
              </LogoFavorites>
              <TextFavorites>
                <h2>{e.fa.name}</h2>
                <DivPrice>
                  <span className="number">{e.unitPrice}</span>
                  <span className="price">تومان</span>
                </DivPrice>

                <Link href="/products/[id]" as={`/products/${e._id}`}>
                  <a className="text-show">
                    <BtnShow text={"مشاهده بیشتر"} href={"#"} />
                  </a>
                </Link>
              </TextFavorites>
            </CardFavorites>
          </BoxCard>
        ))
      ) : (
        <Not>
          <h2>موردی پیدا نشد!</h2>
        </Not>
      )}
    </ContainerFavorites>
  );
};

export default Favorites;
