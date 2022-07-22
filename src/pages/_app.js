import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles/themes/light-theme";
import darkTheme from "../styles/themes/dark-theme";
import { useState } from "react";
import { GlobalStyle } from "../styles/global/global";
import { wrapper } from "../redux/store";
import ModalContainer from "../Components/modals/container";
import { useDispatch, useSelector } from "react-redux";
import { setJwtFromCache } from "../redux/slices/user";
import { useEffect } from "react";
import "../styles/ReactToastify.css";
import ProfileServices from "../Services/auth/profile";
import { AddHeader } from "../utils/axiosHelper/AxiosHelper";
import { loadedProfile } from "../redux/slices/profileSlice";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const profileUser = useSelector((state) => state.profileUser);

  useEffect(() => {
    dispatch(setJwtFromCache());
    if (profileUser.token === "spinner" || profileUser.token === false) {
      let token = localStorage.getItem("token");
      AddHeader("token", token);
      ProfileServices.getProfile((res) => {
        if (res.code === 200) {
          dispatch(loadedProfile(res.result));
        }
      });
    }
  }, [dispatch, profileUser]);

  /*   const [ theme , setTheme ] = useState( {
          current    : lightTheme ,
          setCurrent : () => {
               setTheme( ( { current } ) => ({
                         ...theme ,
                         current : current.id === "light" ? DarkTheme : lightTheme
          
                    })
               )
               
          }
          
     } );*/
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />

        <Component {...pageProps} toggleTheme={toggleTheme} />
        <ModalContainer />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
// export default MyApp;
