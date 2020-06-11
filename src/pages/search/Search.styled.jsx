import styled from "styled-components";

export const Main = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;

    &:hover {
        cursor: pointer;
    }
`

export const Sidebar = styled.div`
    padding: 2rem 1rem;
    background-color: var(--bgContent);

    & h1 {
        margin: .5rem 0;
        font-weight: 700;
    }
`

export const Results = styled.div`
    padding: 2rem 1rem;
`

export const ListResult = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 19.5%);
    grid-gap: 0.625%;
    margin-top: 1.5rem;
`

export const ListItem = styled.div`
    height: 15rem;
    background-color: var(--boxShadow);
`