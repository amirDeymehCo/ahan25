import { filter } from "lodash";
import { Icon } from "@iconify/react";
import React , { useEffect , useState } from "react";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Link as RouterLink , useNavigate } from "react-router-dom";


// material
import { styled , useTheme } from "@mui/material/styles";
import {
     Box ,
     Button ,
     Card ,
     Checkbox ,
     Container ,
     Table ,
     TableBody ,
     TableCell ,
     TableContainer ,
     TablePagination ,
     TableRow ,
     Typography
} from "@mui/material";
// redux
import { useDispatch , useSelector } from "../../../redux/store";
import { deleteProduct , getCategory , getProducts  } from "../../../redux/slices/product";
// utils
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// hooks
import useSettings from "../../../hooks/useSettings";
// components
import Page from "../../../components/Page";
import Scrollbar from "../../../components/Scrollbar";
import SearchNotFound from "../../../components/SearchNotFound";
import HeaderBreadcrumbs from "../../../components/HeaderBreadcrumbs";
import {
     ProductListHead ,
     ProductListToolbar ,
     ProductMoreMenu
} from "../../../components/_dashboard/e-commerce/product-list";
import { baseUrl } from "../../../config";
import moment from "moment-jalaali";
import Label from "../../../components/Label";
import { numberSeparator } from "../../../utils/formatNumber";
import { ListHead , ListToolbar , MoreMenu } from "../../../components/_dashboard/tables";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
     { id : "name" , label : "محصول" , alignRight : false } ,
     // { id : "createdAt" , label : "تاریخ ساخت" , alignRight : false } ,
     { id : "categories" , label : "دسته بندی" , alignRight : false } ,
     { id : "unit" , label : "واحد" , alignRight : false } ,
     { id : "price" , label : "قیمت" , alignRight : true } ,
     { id : "" }
];

const ThumbImgStyle = styled( "img" )( ( { theme } ) => ({
     width        : 64 ,
     height       : 64 ,
     objectFit    : "cover" ,
     margin       : theme.spacing( 0 , 2 ) ,
     borderRadius : theme.shape.borderRadiusSm
}) );

// ----------------------------------------------------------------------

function descendingComparator( a , b , orderBy ) {
     
     if ( orderBy === "price" ) {
          if ( b.items[ 0 ].price < a.items[ 0 ].price ) {
               return -1;
          }
          if ( b.items[ 0 ].price > a.items[ 0 ].price ) {
               return 1;
          }
     } else if ( orderBy === "isPublished" ) {
          if ( getStatus( b.items ) < getStatus( a.items ) ) {
               return -1;
          }
          if ( getStatus( b.items ) > getStatus( a.items ) ) {
               return 1;
          }
     } else {
          if ( b[ orderBy ] < a[ orderBy ] ) {
               return -1;
          }
          if ( b[ orderBy ] > a[ orderBy ] ) {
               return 1;
          }
     }
     
     return 0;
}

function getComparator( order , orderBy ) {
     return order === "desc"
          ? ( a , b ) => descendingComparator( a , b , orderBy )
          : ( a , b ) => -descendingComparator( a , b , orderBy );
}

function applySortFilter( array , comparator , query ) {
     const stabilizedThis = array.map( ( el , index ) => [ el , index ] );
     stabilizedThis.sort( ( a , b ) => {
          const order = comparator( a[ 0 ] , b[ 0 ] );
          if ( order !== 0 ) return order;
          return a[ 1 ] - b[ 1 ];
     } );
     
     if ( query ) {
          return filter( array , ( _product ) => _product.name.toLowerCase().indexOf( query.toLowerCase() ) !== -1 );
     }
     
     return stabilizedThis.map( ( el ) => el[ 0 ] );
}


function getStatus( items ) {
     return items.reduce( ( count , { number } ) =>
          count + number , 0 )
}

// ----------------------------------------------------------------------

export default function EcommerceProductList() {
     const { themeStretch } = useSettings();
     const theme = useTheme();
     const dispatch = useDispatch();
     const { products , categoriesList } = useSelector( ( state ) => state.product );
     const [ page , setPage ] = useState( 0 );
     let navigate = useNavigate();
     const [ order , setOrder ] = useState( "asc" );
     const [ selected , setSelected ] = useState( [] );
     const [ filterName , setFilterName ] = useState( "" );
     const [ rowsPerPage , setRowsPerPage ] = useState( 10 );
     const [ orderBy , setOrderBy ] = useState( "createdAt" );
     const lan = "lan=fa";
     
     useEffect( () => {
          dispatch( getProducts( lan ) );
          dispatch( getCategory() )
          // dispatch(getProducts(rowsPerPage*(page+1)));
          dispatch( getCategory() );
     } , [ dispatch , page ] );
     
     const handleRequestSort = ( event , property ) => {
          const isAsc = orderBy === property && order === "asc";
          setOrder( isAsc ? "desc" : "asc" );
          setOrderBy( property );
     };
     
     function DeleteSelect() {
          selected.map( s => (
               dispatch( deleteProduct( s ) ))
          )
          setSelected( [] )
     }
     
     
     const handleSelectAllClick = ( event ) => {
          if ( event.target.checked ) {
               const newSelecteds = products.map( ( n ) => n._id );
               setSelected( newSelecteds );
               return;
          }
          setSelected( [] );
     };
     
     const handleClick = ( event , id ) => {
          
          const selectedIndex = selected.indexOf( id );
          let newSelected = [];
          if ( selectedIndex === -1 ) {
               newSelected = newSelected.concat( selected , id );
          } else if ( selectedIndex === 0 ) {
               newSelected = newSelected.concat( selected.slice( 1 ) );
          } else if ( selectedIndex === selected.length - 1 ) {
               newSelected = newSelected.concat( selected.slice( 0 , -1 ) );
          } else if ( selectedIndex > 0 ) {
               newSelected = newSelected.concat( selected.slice( 0 , selectedIndex ) , selected.slice( selectedIndex + 1 ) );
          }
          setSelected( newSelected );
     };
     
     const handleChangePage = ( event , newPage ) => {
          setPage( newPage );
     };
     
     const handleChangeRowsPerPage = ( event ) => {
          setRowsPerPage( parseInt( event.target.value , 10 ) );
          setPage( 0 );
     };
     
     const handleFilterByName = ( event ) => {
          setFilterName( event.target.value );
     };
     
     
     const handleDelete = ( id ) => {
          dispatch( deleteProduct( id ) );
          
     };
     
     
     function getStatus( items ) {
          return items.reduce( ( count , { number } ) =>
               count + number , 0 )
     }
     
     const emptyRows = page > 0 ? Math.max( 0 , (1 + page) * rowsPerPage - products.length ) : 0;
     
     const filteredProducts = products && categoriesList ? applySortFilter( products , getComparator( order , orderBy ) , filterName ) : [];
     
     const isProductNotFound = filteredProducts.length === 0;
     
     return (
          <Page title = "فروشگاه: لیست محصولات | پنل  ادمین" >
               <Container maxWidth = { themeStretch ? false : "lg" } >
                    <HeaderBreadcrumbs
                         heading = "لیست محصولات"
                         links = { [
                              { name : "داشبورد" , href : PATH_DASHBOARD.root } ,
                              {
                                   name : "فروشگاه" ,
                                   href : PATH_DASHBOARD.eCommerce.root
                              } ,
                              { name : "لیست محصولات" }
                         ] }
                         action = {
                              <Button
                                   variant = "contained"
                                   component = { RouterLink }
                                   to = { PATH_DASHBOARD.eCommerce.newProduct }
                              >
                                   محصول جدید
                              </Button >
                         }
                    />
                    
                    <Card >
                         <ListToolbar onDelete = { DeleteSelect } numSelected = { selected.length }
                              filterName = { filterName }
                              onFilterName = { handleFilterByName } />
                         <Scrollbar >
                              <TableContainer sx = { { minWidth : 400 } } >
                                   <Table >
                                        <ListHead
                                             order = { order }
                                             orderBy = { orderBy }
                                             headLabel = { TABLE_HEAD }
                                             rowCount = { products?.length }
                                             numSelected = { selected.length }
                                             onRequestSort = { handleRequestSort }
                                             onSelectAllClick = { handleSelectAllClick }
                                        />
                                        <TableBody >
                                             { filteredProducts.slice( page * rowsPerPage , page * rowsPerPage + rowsPerPage ).map( ( row ) => {
                                                  const {
                                                             id ,
                                                             slug ,
                                                             _id ,
                                                             fa : { name } ,
                                                             photos
                                                             ,
                                                             createdAt ,
                                                             updatedAt ,
                                                             category ,
                                                             fa : { unit } ,
                                                             unitPrice
                                                        } = row;
                                                  const status = slug
                                                  const isItemSelected = selected.indexOf( _id ) !== -1;
                                                  
                                                  return (
                                                       
                                                       <TableRow
                                                            hover
                                                            key = { id }
                                                            tabIndex = { -1 }
                                                            role = "checkbox"
                                                            selected = { isItemSelected }
                                                            aria-checked = { isItemSelected }
                                                       >
                                                            <TableCell padding = "checkbox" >
                                                                 <Checkbox checked = { isItemSelected }
                                                                      onChange = { ( event ) => handleClick( event , _id ) } />
                                                            </TableCell >
                                                            <TableCell component = "th" scope = "row"
                                                                 padding = "none"
                                                                 onClick = { () => navigate( `${ PATH_DASHBOARD.eCommerce.root }/product/${ _id }/edit` ) } >
                                                                 <Box
                                                                      sx = { {
                                                                           py         : 2 ,
                                                                           display    : "flex" ,
                                                                           alignItems : "center" ,
                                                                           cursor     : "pointer"
                                                                      } }
                                                                 >
                                                                      {/*<ThumbImgStyle alt = { name } src = { `${ baseUrl }${ photos[ 0 ].thumbnail }` } />*/ }
                                                                      <Typography variant = "subtitle2"
                                                                           noWrap >
                                                                           { name }
                                                                      </Typography >
                                                                 </Box >
                                                            </TableCell >
                                                    
                                                            
                                                            <TableCell >
                                                                 {
                                                                 categoriesList && category && categoriesList.find( ( c ) => c._id === category
                                                                 ) === undefined ? "دسته بندی حذف" +
                                                                      " شده است" : categoriesList?.find( ( c ) => c._id === category ).fa.name
                                                                 }
                                                            </TableCell >
                                                            <TableCell >
                                                                 { unit }
                                                            </TableCell >
                                                            <TableCell
                                                                 align = "right" >{ numberSeparator( unitPrice ) }</TableCell >
                                                            <TableCell align = "right" >
                                                                 
                                                                 <MoreMenu
                                                                      onDelete = { () => handleDelete( _id ) }
                                                                      link = { `${ PATH_DASHBOARD.eCommerce.root }/product/${ _id }/edit` } />
                                                            
                                                            </TableCell >
                                                       </TableRow >
                                                  );
                                             } ) }
                                             { emptyRows > 0 && (
                                                  <TableRow style = { { height : 53 * emptyRows } } >
                                                       <TableCell colSpan = { 6 } />
                                                  </TableRow >
                                             ) }
                                        </TableBody >
                                        { isProductNotFound && (
                                             <TableBody >
                                                  <TableRow >
                                                       <TableCell align = "center" colSpan = { 6 } >
                                                            <Box sx = { { py : 3 } } >
                                                                 <SearchNotFound
                                                                      searchQuery = { filterName } />
                                                            </Box >
                                                       </TableCell >
                                                  </TableRow >
                                             </TableBody >
                                        ) }
                                   </Table >
                              </TableContainer >
                         </Scrollbar >
                         <TablePagination
                              rowsPerPageOptions = { [ 5 , 10 , 25 ] }
                              component = "div"
                              labelRowsPerPage = { "سطرها در هر صفحه" }
                              count = { products?.length }
                              rowsPerPage = { rowsPerPage }
                              page = { page }
                              labelDisplayedRows = {
                                   ( { from , to , count } ) => {
                                        return "" + from + "-" + to + " از " + count;
                                   }
                              }
                              onPageChange = { handleChangePage }
                              onRowsPerPageChange = { handleChangeRowsPerPage }
                         />
                    </Card >
               </Container >
          </Page >
     );
}
