import {
  Checkbox,
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import styled from 'styled-components';
import { primary } from '../../styles/global/color';
import { neutral, fontsTheme } from '../../styles/global';
import SquareImg from '../../assets/square.svg';
import { useState } from 'react';

export default function MUITable(records, TABLE_HEAD) {
  // ___________Constants
  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();
  const [selected, setSelected] = useState([]);

  // _____________Table Container
  const TblContainer = (props) => (
    <$Table table-layout="fixed">{props.children}</$Table>
  );

  // _____________Table Header
  const TblHead = (props) => {
    const handleSortRequest = (cell_id) => {
      const isAsc = orderBy === cell_id && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(cell_id);
    };

    return (
      <$TableHead>
        <$TableRow >
          <$TableCell>
            {/* <$TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  'aria-label': 'select all desserts',
                }}
              />
            </$TableCell> */}
            <$SquareIcon />
          </$TableCell>
          {TABLE_HEAD.map((headCell) => (
            <$TableCell 
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              {headCell.disableSorting ? (
                headCell.label
              ) : (
                <$TableSortLabel
                  onClick={() => handleSortRequest(headCell.id)}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  active={orderBy === headCell.id}
                >
                  {headCell.label}
                </$TableSortLabel>
              )}
            </$TableCell>
          ))}
        </$TableRow>
      </$TableHead>
    );
  };
  // ________________Pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const TblPagination = () => (
    <$TablePagination
      component="div"
      page={page}
      rowsPerPageOptions={pages}
      rowsPerPage={rowsPerPage}
      count={records.length}
      onPageChange={handleChangePage}
      labelRowsPerPage={
        <$LabelRowsPerPage>سطر ها در هر صفحه</$LabelRowsPerPage>
      }
      labelDisplayedRows={({ from, to, count }) => {
        return '' + count + '  ' + 'از' + from + '-' + to;
      }}
    />
  );

  // _______________Sortable

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

  const recordsAfterPagingAndSorting = () => {
    return stableSort(records, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      (page + 1) * rowsPerPage
    );
  };

  return { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting };
}

const $LabelRowsPerPage = styled.span`
  font-family: ${fontsTheme.secondaryTitle};
  font-style: normal;
  font-weight: 400;
  font-size: 1.4em;
  text-align: center;
  color: ${neutral[100]};
`;

const $TableSortLabel = styled(TableSortLabel)``;

const $TablePagination = styled(TablePagination)`
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  .MuiToolbar-root {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    .MuiTablePagination-displayedRows {
      font-family: ${fontsTheme.secondaryTitle} !important;
    }
  }
`;

const $SquareIcon = styled(SquareImg)`
  width: 1.5em;
  height: 1.8em;
`;

const $TableCell = styled(TableCell)`
  font-family: ${fontsTheme.primaryLight};
  font-style: normal;
  font-weight: 700;
  font-size: 1.4em;
  line-height: 2em;
  text-align: center;
  color: ${neutral[100]};
  border-bottom: 0.03em solid #6c78a8;
`;

const $TableRow = styled(TableRow)``;

const $TableHead = styled(TableHead)``;

const $Table = styled(Table)`
  background: ${primary[500]};
  box-shadow: ${(p) => p.theme.shadow.primaryShadow};
  border-radius: 0px 0px 2em 2em;
  direction: rtl;
`;
