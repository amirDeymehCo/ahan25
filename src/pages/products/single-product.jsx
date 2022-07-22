import Footer from "../../Components/common/Footer/Footer";
import Navbar from "../../components/layout/navabar";
import SingleProduct from "../../components/modals/products/single-product";

export default function SingleProductPage() {
  return (
    <>
      <Navbar />
      <SingleProduct isPage={true} />
      <Footer />
    </>
  );
}
