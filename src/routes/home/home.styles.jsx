import styled from "styled-components";
export const MainContainer = styled.div`
    position: relative;
    text-align: center;
`;

export const HeroContainer = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 3em;
    border-radius: 4px;
    width: 45%;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    h2{
        margin-bottom: 1em;
    }
    @media screen and (max-width: 650px){
        left:50%;
        top: 10%;
    }
`;
