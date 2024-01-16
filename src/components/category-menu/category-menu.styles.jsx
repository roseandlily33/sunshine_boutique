import styled from "styled-components";
export const MainMenuContainer = styled.div`
    margin-top: 1em;

`;
export const MenuContainer = styled.div`
    display: flex;
    overflow-x: scroll;
    gap: 1em;
    @media screen and (max-width: 650px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
`;