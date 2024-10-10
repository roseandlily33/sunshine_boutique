import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
   margin: 1em;
   overflow-y: scroll;
   padding: 1rem;
   width: 100%;
   background-color: ${({theme}) => theme.color.lightGrey};
   border-radius: ${({theme}) => theme.border.borderRadius};

`;
export const Preview = styled.div`
   display: flex;
   flex-direction: row;
   gap: 1em;
   justify-content: space-evenly;
   align-items: center;
   margin-top: 1em;
   max-width: 100%;
`;