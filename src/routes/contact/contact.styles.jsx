import styled from "styled-components";


export const ContactContainer = styled.div`
display: flex;
flex-direction: row;
    h2{
        text-align: center;
        font-weight: bold;
        font-size: 2em;
    }
`;
export const ContactInfo = styled.div`
    width: 50%;
    form{
       
        width: 80%;
        margin: 1em;
    }
`;
export const HoursAndAddress = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
    gap: 1.2em;
`;
