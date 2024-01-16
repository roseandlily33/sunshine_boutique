import styled from "styled-components";

export const AuthComponent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    align-items: flex-start;
    @media screen and (max-width: 650px){
        flex-direction: column-reverse;
    }
`;

export const SignContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2em;
    margin-top: 1em;
    gap: 2em;
    width: 100%;
    height: auto;

`;