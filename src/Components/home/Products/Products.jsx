import MUITable from '../../common/table';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import {
  Checkbox,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import {
  fontsTheme,
  neutral,
  primary,
  secondary,
} from '../../../styles/global';
import ShopImg from '../../../assets/shop.svg';
import EtcDots from '../../../assets/etc-dots.svg';
import SquareImg from '../../../assets/square.svg';
import TableLogoTest from '../../../assets/table-logo-test.svg';
import PositionedMenu from '../../common/positioned-menu';
import UseChart from '../../../hooks/useChart';
import TableTest from '../../common/table-test';
import CustomAutocompleteFilter from '../../../hooks/useCustomAutocompleteFilter';
import { useDispatch, useSelector } from '../../../redux/store';
import { getProducts } from '../../../redux/slices/product';

export default function ProductsTable() {

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products)
  const data = [
    {
      id: 1,
      thick: '3 میلی متر',
      Dimensions: '1.5*6 متر',
      status: '1 کلاف',
      deliveryPlayc: 'انبار تهران',
      price: '160/000 تومان',
      priceValue: '14/400 تومان',
      chart: [
        [1, 34],
        [3, 16],
        [5, 23],
        [15, 43],
      ],
      changes: 'up',
    },
    {
      id: 2,
      thick: '3 میلی متر',
      Dimensions: '1.5*6 متر',
      status: '2 کلاف',
      deliveryPlayc: 'انبار تهران',
      price: '160/000 تومان',
      priceValue: '14/400 تومان',
      chart: [
        [1, 10],
        [3, 27],
        [5, 15],
        [15, 30],
      ],
      changes: 'down',
    },
    {
      id: 3,
      thick: '3 میلی متر',
      Dimensions: '1.5*6 متر',
      status: 'کلاف',
      deliveryPlayc: 'انبار تهران',
      price: '160/000 تومان',
      priceValue: '14/400 تومان',
      chart: [
        [1, 34],
        [3, 30],
        [5, 2],
        [15, 43],
      ],
      changes: 'up',
    },
    {
      id: 4,
      thick: '3 میلی متر',
      Dimensions: '1.5*6 متر',
      status: ' 4 کلاف',
      deliveryPlayc: 'انبار تهران',
      price: '160/000 تومان',
      priceValue: '14/400 تومان',
      chart: [
        [1, 34],
        [3, 16],
        [5, 23],
        [15, 43],
      ],
      changes: 'up',
    },
    {
      id: 5,
      thick: '3 میلی متر',
      Dimensions: '1.5*6 متر',
      status: 'کلاف',
      deliveryPlayc: 'انبار تهران',
      price: '190/000/000 تومان',
      priceValue: '14/400 تومان',
      chart: [
        [1, 1],
        [3, 16],
        [5, 23],
        [15, 1],
      ],
      changes: 'down',
    },
    {
      id: 6,
      thick: '3 میلی متر',
      Dimensions: '1.5*6 متر',
      status: 'کلاف',
      deliveryPlayc: 'انبار تهران',
      price: '160/000 تومان',
      priceValue: '14/400 تومان',
      chart: [
        [1, 34],
        [3, 16],
        [5, 23],
        [15, 43],
      ],
      changes: 'up',
    },
    {
      id: 7,
      thick: '3 میلی متر',
      Dimensions: '1.5*6 متر',
      status: 'کلاف',
      deliveryPlayc: 'انبار تهران',
      price: '160/000 تومان',
      priceValue: '14/400 تومان',
      chart: [
        [1, 34],
        [2, 16],
        [5, 10],
        [15, 43],
      ],
      changes: 'up',
    },
  ];

  const TABLE_HEAD = [
    { id: 'thick', label: 'ضخامت', alignRight: false },
    { id: 'demensions', label: 'ابعاد', alignRight: false },
    { id: 'status', label: 'حالت فیزیکی', alignRight: false },
    { id: 'deliveryPlace', label: 'محل تحویل', alignRight: false },
    { id: 'price', label: ' قیمت', alignRight: false },
    { id: 'priceValue', label: 'مقدار ارزش افزوده', alignRight: false },
    {
      id: 'chart',
      label: 'نمودار تغییر قیمت',
      alignRight: false,
      disableSorting: true,
    },
    { id: '', disableSorting: true, alignLeft: true },
  ];

  const FILTER_DATA = [
    ['1سانتی متر', '2سانتی متر', '3سانتی متر', '4سانتی متر'],
    ['5سانتی متر', '6سانتی متر', '7سانتی متر', '8سانتی متر'],
    ['9سانتی متر', '10سانتی متر', '11سانتی متر', '12سانتی متر'],
    ['10سانتی متر', '11سانتی متر', '12سانتی متر', '13سانتی متر'],
    ['14سانتی متر', '15سانتی متر', '16سانتی متر', '17سانتی متر'],
  ];

  const [records, setRecords] = useState(data);
  // _____________Chceck Box
  const [selected, setSelected] = useState([]);
  const isSelected = (name) => selected.indexOf(name) !== -1;
  const isItemSelected = isSelected(data.name);
  const labelId = `enhanced-table-checkbox-`;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  // ____________End CheckBox
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    MUITable(records, TABLE_HEAD);


  const deleteAllFiltersHandler = () => {
    console.log('all filters deleted !');
  };

  return (
    <$Wrapper>
      <$FiltersBox>
        <$DeleteFiters onClick={deleteAllFiltersHandler}>
          بدون فیلتر
        </$DeleteFiters>
        {FILTER_DATA.map((item, index) => (
          <CustomAutocompleteFilter key={index} items={item} />
        ))}
      </$FiltersBox>

      <TableTest TABLE_HEAD={TABLE_HEAD} data={data} />
    </$Wrapper>
  );
}

const $DeleteFiters = styled.button`
  background: ${secondary[200]};
  border: 2px solid ${secondary[200]};
  box-shadow: ${(p) => p.theme.shadow.primaryShadow};
  border-radius: 30px;
  font-family: ${fontsTheme.primaryLight};
  font-style: normal;
  font-weight: 700;
  font-size: 1.4em;
  text-align: center;
  color: ${neutral[100]};
  padding: 1em;
  cursor: pointer;
`;

const $FiltersBox = styled.div`
  direction: rtl;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10em;
  gap: 3em;
`;

// ______________Fillters

const $TblHeaderTitle = styled.div`
  text-align: right;
  h4 {
    font-family: ${fontsTheme.primaryLight};
    font-style: normal;
    font-weight: 800;
    font-size: 1.8em;
    color: #fdfdf6;
    margin-bottom: 0.3em;
  }
  span {
    font-family: ${fontsTheme.primaryLight};
    font-style: normal;
    font-weight: 400;
    font-size: 1.4em;
    padding-top: 0.5em;
    color: ${neutral[300]};
  }
`;

const $TblHeaderLogo = styled(TableLogoTest)`
  width: 8em;
  height: 8em;
`;

const $TableHeaderBox = styled.div`
  background: ${primary[200]};
  border-radius: 2em 2em 0 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1.6em;
  padding: 1.5em 3em;
`;

const $SquareIcon = styled(SquareImg)`
  width: 1.5em;
  height: 1.8em;
`;

const $ShopIcon = styled(ShopImg)`
  width: 2.3em;
  height: 2em;
`;

const $ETCIcon = styled(EtcDots)`
  width: 0.46em;
  height: 2em;
  transform: rotateY(45deg);
`;

const $IconButton = styled(IconButton)`
  cursor: pointer;
`;

const $TableCell = styled(TableCell)`
  font-family: ${fontsTheme.primaryLight};
  font-style: normal;
  font-weight: 400;
  font-size: 1.4em;
  line-height: 2em;
  text-align: center;
  color: ${neutral[300]};
  border-bottom: 0.3px dashed ${neutral[400_50]};
`;

const $TableCellPrice = styled($TableCell)`
  font-family: ${fontsTheme.secondaryTitle};
`;

const $TableCellPriceValue = styled($TableCell)`
  font-family: ${fontsTheme.secondaryTitle};
`;

const $TableCellDimensions = styled($TableCell)`
  font-family: ${fontsTheme.secondaryTitle};
`;

const $TableRow = styled(TableRow)`
  &:last-child td {
    border-bottom: 3px solid ${primary[200]};
  }
`;

const $TableBody = styled(TableBody)``;

const $Table = styled.div`
  background: ${primary[500]};
  box-shadow: ${(p) => p.theme.shadow.primaryShadow};
  border-radius: 0px 0px 2em 2em;
`;

const $Wrapper = styled.div`
  padding: 0 6em;
  margin: 100px 0;
`;

// const amir = <$Table>
//         <TblContainer>
//           <TblHead />
//           <$TableBody>
//             {/* {recordsAfterPagingAndSorting().map((item, index) => ( */}
//               <$TableRow key={index}>
//                 <$TableCell padding="checkbox">
//                         <Checkbox
//                           color="primary"
//                           checked={isItemSelected}
//                           inputProps={{
//                             'aria-labelledby': labelId,
//                           }}
//                         />
//                       </$TableCell>
//                 <$TableCell>{item.thick}</$TableCell>
//                 <$TableCellDimensions>{item.Dimensions}</$TableCellDimensions>
//                 <$TableCell>{item.status}</$TableCell>
//                 <$TableCell>{item.deliveryPlayc}</$TableCell>
//                 <$TableCellPrice>{item.price}</$TableCellPrice>
//                 <$TableCellPriceValue>{item.priceValue}</$TableCellPriceValue>
//                 {/* <$TableCell>نمودار تغییر قیمت</$TableCell> */}
//                 <$TableCell>
//                     <UseChart chart_array={item.chart} changes={item.changes} />
//                 </$TableCell>
//                 <$TableCell>
//                   <$IconButton
//                     sx={{ marginLeft: '1em' }}
//                     aria-label="add to shopping cart"
//                   >
//                     <$ShopIcon />
//                   </$IconButton>
//                   <$IconButton aria-label="got to more details">
//                     <PositionedMenu />
//                   </$IconButton>
//                 </$TableCell>
//               </$TableRow>
//             {/* ))} */}
//           </$TableBody>
//         </TblContainer>
//         <TblPagination />
//       </$Table>
