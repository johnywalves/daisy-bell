import styled from "styled-components";

export const Main = styled.div`
    display: grid;
    grid-template-columns: ${props => props.category ? "20% 80%" : "100%"};

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

export const AlertResult = styled.p`
    font-size: .9rem;
    margin-top: .5rem;
    visibility: ${props => props.visible ? "visible" : "hidden" }
`

export const ListResult = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 19.5%);
    grid-gap: 0.625%;
    margin-top: 1rem;
`

export const ListItem = styled.div`
    position: relative;
    height: 15rem;
    background-color: var(--boxShadow);
    background-size: cover;
    background-position: center center;
    border-radius: .5rem;
    transition: transform .5s;

    & p {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 1.5rem;

        color: var(--textClean);
        font-weight: 700;
        text-align: center;

        border-radius: 0 0 .5rem .5rem;
        background-image: linear-gradient(var(--bgInfoStart), var(--bgInfoEnd));

        opacity: 0;
        transition: opacity .3s;
    }

    &:hover {
        z-index: 2;
        transform: scale(1.1);

        & p {
            opacity: 1;
        }
    }
`