import styled from "styled-components"

export const CoverPostStyles = styled.section`
    grid-area:cv;
    overflow:hidden;
    position:relative;
    border-radius:15px;
    min-height:400px;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.4);
    .cover-post{
        width:100%;
        height:100%;
        z-index:-5;
    }
`
export const CoverBg = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    background-color:rgba(3, 3, 3, 0.300);
    z-index:0;
    .date{
        color: #ffffff;
        font-size:14px;
        position: absolute;
        bottom:45px;
        left:20px;
    }
    @media (max-width:878px){
        .date{
            top:20px;
            left:20px;
        }
    }
`
export const ShearBtn = styled.button`
    position:absolute;
    top:20px;
    right:20px;
    border:none;
    background-color: transparent;
    cursor: pointer;
`
export const FooterCover = styled.div`
    position:absolute;
    bottom:0px;
    left:0px;
    width:100%;
    padding:15px;
    display:flex;
    align-items: center;
    justify-content:space-between;

`

export const DivTextFooter = styled.div`
    display:flex;
    align-items: center;
    width:70%;
    img{
        width:44px;
        height:44px;
        border-radius:50%;
        margin:0px 10px;
    }
    h2{
        color: #F7F7F7;
        font-size:17px;
        margin:3px 0px; 
    }
    p{
        color: #F7F7F7;
        font-size:10px;
        line-height:14px;
    }
    @media (max-width:878px){
        width:100%;
    }
`


export const CategoryStyles = styled.div`
    grid-area:cg;
    padding:13px 15px;
    background-color:#37416240;
    border:1px solid #9898984d;
    border-radius:10px;
    div:nth-child(1){
        border-bottom: 1px solid #9898984d;
        padding-bottom:10px;
    }
    h4{
        color: #F7F7F7;
        font-size:17px;
        margin:7px 0px;
    }
    p{
        color: #F7F7F7;
        font-size:13px;
    }
`
export const Tag = styled.div`
    display:flex;
    align-items: center;
    flex-wrap: wrap;
    width:100%;
    span{
        background-color:#55628C;
        color: #ffffff;
        font-size:12px;
        border-radius:3px;
        padding:3px 9px;
        margin: 5px;
        width:45px;
        text-align: center;
    }
`

export const MenuPostStyles = styled.div`
    grid-area:mp;
    padding:13px 15px;
    background-color:#37416240;
    border:1px solid #9898984d;
    border-radius:10px;
    div:nth-child(1){
        border-bottom: 1px solid #9898984d;
        padding-bottom:10px;
    }
    h4{
        color: #F7F7F7;
        font-size:17px;
        margin:10px 0px;
    }
    img{
        width:100% !important;
    }

`

export const BoxPostMenu = styled.div`
    border:1px solid #9898984d;
    background-color:#37416240;
    border-radius:10px;
    padding:12px 14px;
    width:100%;
    margin:10px 0px;
    .body-amir-2{
        width:100%;
    }
    a{
        width:100%;
        border:none;
        @media (max-width:845px){
            display:flex;
            align-items:center;
        }
        @media (min-width:1191px){
            display:flex;
            align-items:center;
            flex-direction: row;
        }
    }
    img{
        width:40%;
        height:75px;
        border-radius:17px;
    }
    div{
        text-align:center;
        width:60%;
        padding:5px 10px;
    }
    h3{
        color: #F7F7F7;
        font-size:14px;
    }
    p{
        color: #CBCBCB;
        margin:10px 0px;
        font-size:11px;
    }
    span{
        color: #F7F7F7;
        font-size:11px;
    }
    @media (max-width:1115px){
        flex-direction: column;
        img{
            width:100%;
        }
        div{
            width:100%;
        }
    }
    @media (max-width:845px){
        flex-direction: row;
        img{
            width:40%;
            max-width:150px;
        }
        div{
            width:60%;
        }
    }
`
export const DivImageMP = styled.div`
    width:100% !important;
    @media(max-width:845px){
        width:40% !important;
    }
    @media(max-width:497px){
        width:70% !important;
    }
    border:none !important;
`