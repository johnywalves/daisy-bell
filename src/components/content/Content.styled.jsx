import styled from "styled-components";

export const Main = styled.div`
    width: calc(100% - 8rem);
    padding: 1.5rem 4rem;

    & h1 {
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
    }

    & h5 {
        text-align: center;
        padding: .5rem 0 2rem;
        width: 40%;
        margin: 0 auto;
    }

    & p {
        text-align: justify;
        margin: 1rem 0;
    }

    & section {
        display: grid;
        grid-template-columns: repeat(2, 49%);
        grid-gap: 4%;
        padding: 1rem 0 2rem;
        margin: 0 2rem;
    }

    & section:not(:last-child) {
        border-bottom: 2px solid var(--boxShadow);
    }

    & section p:last-child {   
        font-size: 1.5rem;
    }
`

export const Forehead = styled.div`
    padding: 3rem 0;
`

export const Body = styled.div`
`