import styled from "styled-components";

export const Container = styled.main`
    padding:40px 50px;
    position:relative;
    direction:rtl;
    @media(max-width:978px){
        padding:20px 10px;
    }
    @media(max-width:384px){
        padding:20px 0px;
    }
    display:grid;
    @media(min-width:845px){
        grid-template-areas:
            "cg cg cg cg cv cv cv cv cv cv cv cv"
            "mp mp mp mp cv cv cv cv cv cv cv cv"
            "mi mi mi mi mi mi mi mi mi mi mi mi"
            "co co co co co co co ac ac ac ac ac"
        ;
    }
    gap:20px 30px;
    @media (max-width:845px){
        grid-template-areas:
            "cv cv cv cv cv cv cv cv cv cv cv cv"
            "cg cg cg cg cg cg cg cg cg cg cg cg"
            "mi mi mi mi mi mi mi mi mi mi mi mi"
            "mp mp mp mp mp mp mp mp mp mp mp mp"
            "co co co co co co co ac ac ac ac ac"
        ;  
    }
    @media (max-width:748px){
        grid-template-areas:
            "cv cv cv cv cv cv cv cv cv cv cv cv"
            "cg cg cg cg cg cg cg cg cg cg cg cg"
            "mi mi mi mi mi mi mi mi mi mi mi mi"
            "mp mp mp mp mp mp mp mp mp mp mp mp"
            "ac ac ac ac ac ac ac ac ac ac ac ac"
            "co co co co co co co co co co co co"
        ;  
    }
`
