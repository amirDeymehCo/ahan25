import { useState } from 'react';
import styled from 'styled-components';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import UseChart from '../../hooks/useChart';
import PositionedMenu from '../common/positioned-menu';
import ShopImg from '../../assets/shop.svg';
import TableLogoTest from '../../assets/table-logo-test.svg';
import ShareImg from '../../assets/share.svg';
import PrintImg from '../../assets/print.svg';
import { primary, fontsTheme, neutral, secondary } from '../../styles/global';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    TABLE_HEAD,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <$HTableCell padding="checkbox">
          <$Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </$HTableCell>
        {TABLE_HEAD.map((headCell) => (
          <$HTableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </$HTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <$Toolbar
      sx={{
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <$SelectedTypography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} <span>مورد انتخاب شده است</span>
        </$SelectedTypography>
      ) : (
        <$TableHeaderBox>
          <$TblHeaderLogo />
          <$TblHeaderTitle>
            <h4>فولاد مبارکه</h4>
            <span>اصفهان</span>
          </$TblHeaderTitle>
        </$TableHeaderBox>
      )}

      {numSelected > 0 ? (
        <$SelectedIconBox title="icons">
          <IconButton>
            <$ShareIcon />
          </IconButton>

          <IconButton>
            <$PrintIcon />
          </IconButton>

          <IconButton>
            <$ShopIcon />
          </IconButton>
        </$SelectedIconBox>
      ) : null}
    </$Toolbar>
  );
};

export default function TableTest({ TABLE_HEAD, data }) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [pages, setPages] = useState([5, 10, 25]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const TblPagination = () => (
    <>
      <$TablePagination
        component="div"
        page={page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count={data.length}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage={
          <$LabelRowsPerPage>سطر ها در هر صفحه</$LabelRowsPerPage>
        }
        labelDisplayedRows={({ from, to, count }) => {
          return ` ${from} -  ${to} ${' '} از ${' '} ${count}`;
        }}
      ></$TablePagination>
    </>
  );

  return (
    <$TableBox sx={{ width: '100%' }}>
      <$TableContent sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <$TableContainer>
          <$Table aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
              TABLE_HEAD={TABLE_HEAD}
            />
            <$TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <$TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <$TableCell padding="checkbox">
                        <$Checkbox 
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </$TableCell>

                      {/* _______________________________ */}
                      <$TableCell>{row.thick}</$TableCell>
                      <$TableCellDimensions>
                        {row.Dimensions}
                      </$TableCellDimensions>
                      <$TableCell>{row.status}</$TableCell>
                      <$TableCell>{row.deliveryPlayc}</$TableCell>
                      <$TableCellPrice>{row.price}</$TableCellPrice>
                      <$TableCellPriceValue>
                        {row.priceValue}
                      </$TableCellPriceValue>
                      {/* <$TableCell>نمودار تغییر قیمت</$TableCell> */}
                      <$TableCell align="center">
                        <UseChart
                          chart_array={row.chart}
                          changes={row.changes}
                        />
                      </$TableCell>
                      <$TableCell>
                        <$IconButton
                          sx={{ marginLeft: '1em' }}
                          aria-label="add to shopping cart"
                        >
                          <$ShopIcon />
                        </$IconButton>
                        <$IconButton aria-label="got to more details">
                          <PositionedMenu />
                        </$IconButton>
                      </$TableCell>

                      {/* ___________________________________________ */}
                    </$TableRow>
                  );
                })}
              {/* {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </$TableBody>
          </$Table>
        </$TableContainer>
        <TblPagination />
      </$TableContent>
    </$TableBox>
  );
}

// ____________________ styles

const $ShareIcon = styled(ShareImg)`
  width: 2em;
  height: 2em;
`;
const $PrintIcon = styled(PrintImg)`
  width: 2em;
  height: 2em;
`;

const $SelectedIconBox = styled(Box)`
  display: flex;
  align-items: center;
  padding: 3em 0;
  padding-left: 2em;
`;

const $SelectedTypography = styled(Typography)`
  font-family: ${fontsTheme.secondaryTitle};
  font-style: normal;
  font-weight: 600;
  font-size: 1.8em;
  color: ${neutral[100]};
  padding-right: 1em;

  span {
    font-family: ${fontsTheme.primaryLight};
  }
`;

const $Toolbar = styled(Toolbar)`
  padding: 0;
  width: 100%;
  background: ${primary[200]};
`;

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
  flex-direction: row;
  align-items: center;
  gap: 1.6em;
  padding: 1.5em 3em;
  width: 100%;
`;

const $TablePagination = styled(TablePagination)`
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  .MuiToolbar-root {
    display: flex;
    flex-direction: initial;
    align-items: center;

    .MuiTablePagination-displayedRows {
      font-family: ${fontsTheme.secondaryTitle} !important;
    }

    .MuiTablePagination-actions {
      display: flex;
      flex-direction: row-reverse;
    }
  }
`;

const $Checkbox = styled(Checkbox)`
  color: white;
`;

const $ShopIcon = styled(ShopImg)`
  width: 2.3em;
  height: 2em;
`;

const $IconButton = styled(IconButton)`
  cursor: pointer;
`;

const $LabelRowsPerPage = styled.span`
  font-family: ${fontsTheme.secondaryTitle};
  font-style: normal;
  font-weight: 400;
  font-size: 1.4em;
  text-align: center;
  color: ${neutral[100]};
`;

const $TableSortLabel = styled(TableSortLabel)``;

const $TableCell = styled(TableCell)`
  font-family: ${fontsTheme.primaryLight};
  font-style: normal;
  font-weight: 700;
  font-size: 1.4em;
  line-height: 2em;
  text-align: center;
  color: ${neutral[100]};
  border-bottom: 0.03em dashed #6c78a8;
`;
const $HTableCell = styled($TableCell)`
  border-bottom: 0.03em solid #6c78a8;
`;

const $TableCellDimensions = styled($TableCell)`
  font-family: ${fontsTheme.secondaryTitle};
`;

const $TableCellPrice = styled($TableCell)`
  font-family: ${fontsTheme.secondaryTitle};
`;

const $TableCellPriceValue = styled($TableCell)`
  font-family: ${fontsTheme.secondaryTitle};
`;

const $TableRow = styled(TableRow)`
  &:last-child {
    border-bottom: none;
  }

  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked{
    color: #fff !important;
  }
`;
const $TableBody = styled(TableBody)``;

const $TableHead = styled(TableHead)``;

const $TableContainer = styled(TableContainer)`
  &::-webkit-scrollbar-track {
    background: ${(p) => p.theme.primaryColorGradientLight};
    border-radius: 0.2em;
  }

  &::-webkit-scrollbar {
    width: 0.25em;
    height: 0.5rem;
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.2em;
    background-color: ${secondary[200]};
    background-clip: content-box;
  }
`;

const $TableContent = styled(Box)`
  background: ${primary[500]};
  box-shadow: ${(p) => p.theme.shadow.primaryShadow};
  border-radius: 2em;
  width: 100%;
  overflow-x: scroll;
  direction: rtl;
`;

const $Table = styled(Table)`
  min-width: 123em;
  direction: rtl;
  width: max-content;

  tr:last-child {
    border-bottom: none !important;
  }
`;

const $TableBox = styled(Box)``;
