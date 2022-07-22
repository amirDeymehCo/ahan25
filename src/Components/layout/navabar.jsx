import {  useEffect } from "react";
import styled , { ThemeContext } from "styled-components";
import { useDispatch , useSelector } from "../../redux/store";

import { useRouter } from "next/router";
import Link from "next/link";



export default function Navbar( { toggleTheme } ) {
     const dispatch = useDispatch();
     const router = useRouter();
     const { locale } = router;
     console.log(locale)
     useEffect( () => {
     } , [] );
     return (
          <>
               <$Wrapper >
                    <button>
                         <Link href='?modal=login' as='/auth/login'>Login Modal</Link>
                    </button>
                    <button>
                         <Link href='?page=blog' as='/blog'>blog</Link>
                    </button>
                    <button>
                         <Link href='?page=single-product' as='/products/single-product'>single product</Link>
                    </button>
                    <button
                         onClick={async () => {
                              await router.push("/home", "/home", {
                                   locale: locale === "en" ? "fa" : "en",
                              });
                              router.reload();
                         }}
                    >
                         fa
                    </button>
               </$Wrapper >
          </>
     );
}

const $Wrapper = styled.section`
     background : ${ p => p.theme.PRIMARY };
     font-size  : 2rem;
     width: 100%;
     height: 55vh;
     
`

