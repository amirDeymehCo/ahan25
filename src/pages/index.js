import Head from 'next/head';
import { useContext, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Toggle } from '../components/common/toggle';
import { useDispatch, useSelector } from '../redux/store';
import { getProducts } from '../redux/slices/product';
import { device } from '../styles/global';
import { useRouter } from 'next/router';

import ProductsList from '../components/home/ProductsList/ProdcutsList';
import RegsitrationProcess from '../components/home/RegistrationProcess/RegistrationProcess';
import Blogposts from '../components/home/Blogposts/Blog-posts';
import ManufacturingFactories from '../components/home/ManufacturingFacturies/Manufacturing-factories';
import FrequentlyAskedQuestion from '../components/home/FrequentlyAskedQuestion/Frequently-asked-question';
import CustomersFeedback from '../components/home/CustomersFeedback/Customers-feedback';
import Footer from '../components/home/Footer/Footer';
import Navbar from '../components/layout/navabar'

export default function Home({ toggleTheme }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const productSlider = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <$Wrapper>
      <Navbar />
        <ProductsList data={productSlider} />
        <RegsitrationProcess />
        <FrequentlyAskedQuestion />
        <Blogposts />
        <ManufacturingFactories />
        <CustomersFeedback />
      </$Wrapper>
      <Footer />
    </>
  );
}

const $Wrapper = styled.section`
  padding: 0 3em;
`;
