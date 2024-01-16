import styled from "styled-components";

export const CategoryContainer = styled.div`
    width: auto; 
    border-radius: 4px;
    border: 2px solid orange;
    :hover{
    opacity: 0.9;
    cursor: pointer;
    }
`;
export const BackgroundImageContainer = styled.div`
    height: 80%;
    width: 250px;
    border: 2px solid green;
    :hover{
       transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    img{
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    border-radius: 4px;
    }

`;

export const CategoryBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.color.white};
    border: 2px solid ${({theme}) => theme.color.teal};
    border-radius: 4px;
    opacity: 0.6;
    height: 80px;
    padding: 0.25px;
    margin-left: 2em;
    margin-right: 2em;
    position: relative;
    bottom: 13em;
`;