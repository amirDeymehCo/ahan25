export const PageAnimation = {
     hidden : {
          y:300,
          opacity : .9 ,
     } ,
     show   : {
          y:0,
          opacity    : 1 ,
          transition : {
               duration : 1 ,
               ease: [0.83, 0, 0.17, 1],
               when:"beforeChildren",
               staggerChildren:0.25,
          } ,
          
     },
     
     exit   : {
          y:300,
     
          opacity    : .9 ,
          transition : {
               duration : .5 ,
               ease: [0.83, 0, 0.17, 1]
          } ,
     },
     
     
}




export const HeaderText={
     hidden:{y:330},
     show:{y:0,
          transition : {
               duration : .55 ,
               ease: "easeOut",
          } ,
     }
}

export const AccountPopup={
     hidden:{
          opacity:0,
          width:0,
          visibility:"hidden",
          transform: "skewY(0) rotate(0) translateY(0)"
     },
     
     show:{
          opacity:1,
          width:"28%",
          visibility:"visible",
          transform : "skewY(-5deg) rotate(5deg) translateY(-30px)",
          transition : {
               duration : .22 ,
               ease: "easeOut",
          } ,
     }
}
