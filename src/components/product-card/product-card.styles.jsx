import styled from "styled-components";

export const ProductContainer = styled.div`
    width: 250px;
    height: auto;
    border-radius: 4px;
    margin-bottom: 1em;
    img{
        height: 330px;
        width: 250px;
         border-radius: 4px;
    }
    :hover{
     box-shadow: 10px 2px 15px 5px #cbcbcb;
    }
`;
export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: none;
    button{
        width: 100%;
    }
`
