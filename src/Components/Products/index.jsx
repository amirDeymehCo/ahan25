import { useEffect, useState } from "react";
import NavBar from "./NavBar/NavBar";
import Main, { DivText, Not } from "./styles";
import Filtering from "./Filtering/index";
import TableProductCompony from "./TableProductCompony";
import TableSelectProduct from "./TableSelectProduct/TableSelectProduct";
import ProductServices from "../../Services/Products/Products";
import Modal from "./Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { loadedProducts } from "../../redux/slices/productsSlice";
import Spinner from "../Spinner/Spinner";
const MainProducts = () => {
  const [lanFilter, setLanFilter] = useState("fa");
  const [jensFilter, setJensFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { isLoading, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const resultJens = jensFilter !== "" ? `"${jensFilter}"` : "";
    const resultColor = colorFilter !== "" ? `"${colorFilter}"` : "";
    ProductServices.filterProducts(resultJens, resultColor, (res) => {
      if (res.code === 200) {
        if (resultColor !== "" || resultJens !== "") {
          dispatch(loadedProducts(res.result, true));
        } else {
          dispatch(loadedProducts(res.result, false));
        }
      }
    });
  }, [jensFilter, colorFilter, dispatch]);

  if (isLoading) {
    return <Spinner text="...درحال دریافت اطلاعات لطفا منتظر بمانید" />;
  }

  return (
    <>
      <Modal show={showModal} setShow={setShowModal} />
      <Main>
        <NavBar />

        <DivText>
          {" "}
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
          </p>
          <p>
            سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ و با استفاده از طراحان گرافیک است صنعت چاپ و با استفاده
            از طراحان گرافیک است
          </p>
        </DivText>

        <Filtering
          setJensFilter={setJensFilter}
          lanFilter={lanFilter}
          setLanFilter={setLanFilter}
          setColorFilter={setColorFilter}
        />

        {products.length ? (
          products.map((e, i) => (
            <TableProductCompony
              setShowModal={setShowModal}
              name={e[lanFilter].name}
              _id={e._id}
              key={e._id}
            />
          ))
        ) : (
          <Not>
            <h2>محصولی پیدا نشد</h2>
          </Not>
        )}
        <TableSelectProduct />
      </Main>
    </>
  );
};

export default MainProducts;
