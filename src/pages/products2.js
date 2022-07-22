import ProductsTable from '../components/home/Products/Products';
import styled from 'styled-components';

export default function Products() {
  return (
    <$Wrapper>
      <ProductsTable />
    </$Wrapper>
  );
}

const $Wrapper = styled.div``;
