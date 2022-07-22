import { neutral , primary } from "../global";

export const lightTheme = {
     id                  : "light" ,
     white               : neutral[ 100 ] ,
     black               : neutral[ 500 ] ,
     primaryColorLighter : primary[ 100 ] ,
     primaryColorLight   : primary[ 200 ] ,
     primaryColorMain    : primary[ 300 ] ,
     primaryColorDark    : primary[ 500 ] ,
     primaryColorDarker  : primary[ 600 ] ,
     textColorMain       : neutral[ 100 ] ,
     textColorDark       : neutral[ 200 ] ,
     textColorDarker     : neutral[ 300 ] ,
     // primaryColorHover         : "hsl(0, 0%, 0%)" ,
     // primaryColorActive        : "hsl(0, 0%, 0%)" ,
     primaryColorGradientLight : "linear-gradient(180deg, rgba(159, 175, 239, 0.512) 2.1%, rgba(140, 152, 190, 0.504) 94.76%)" ,
     radialMenu                : "radial-gradient(50% 139.81% at 50% -39.81%, rgba(47, 55, 78, 0.5) 0%, rgba(72, 82, 113, 0) 100%)" ,
     widgetGlow                : "linear-gradient(113.91deg, rgba(32, 58, 126, 0.5) 0%, rgba(11, 152, 197," +
          " 5e-05) 82.9%)" ,
     
     shadow    : {
          boxShadow     : `0px 0px 55px rgba(70, 80, 113, 0.2)` ,
          primaryShadow : "0px 4px 20px rgba(56, 56, 57, 0.25)" ,
          boldShadow    : "1.92281px 3.20009px 7.46667px rgba(28, 31, 39, 0.331), inset -0.709303px -1.18048px" +
               " 1.37719px rgba(87, 100, 149, 0.9), inset 0.709303px 1.18048px 1.37719px rgba(119, 131, 175, 0.9)" ,
          darkShadow    : " 0px 4px 20px rgba(56, 56, 57, 0.25)" ,
     } ,
     overlay   : {
          blogImageOverlay : "linear-gradient(280.17deg, rgba(101, 121, 159, 0.6) -52.57%, rgba(146, 155, 205," +
               " 0.18) 185.77%)" ,
          newsImageOverlay : " linear-gradient(24.57deg, rgba(82, 99, 133, 0.6) 26.04%, rgba(146, 155, 205, 0.18)" +
               " 80.66%)" ,
          newInfoOverlay   : "linear-gradient(0.83deg, rgba(54, 62, 89, 0.87) -10.85%, rgba(60, 69, 100, 0.685864) 32.43%, rgba(73, 84, 122, 0.18) 68.63%, rgba(73, 84, 122, 0) 99.04%)" ,
          
     } ,
     card      : {
          background  : primary[ 300_25 ] ,
          glassBorder : "rgba(154, 154, 154, 0.5)" ,
     } ,
     cardHover : {} ,
     modal     : {
          background : primary[ 400_40 ] ,
     } ,
     
};




