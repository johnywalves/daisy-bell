import styled from "styled-components";

export const Main = styled.div`
`

export const Content = styled.div`
    width: calc(100% - 8rem);
    padding: 1.5rem 4rem;

    &.pieces {
        display: grid;
        grid-template-columns: repeat(3, 31%);
        grid-gap: 3%;
    }

    & h1 {
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
    }
`

export const ContentPiece = styled.div`
    text-align: justify;

    & h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: .5rem 0;
        text-align: left;
    }

    & svg {
        height: 3rem;
    }
`

export const Categories = styled.div`
    display: flex;
    padding: 1rem;
    overflow-y: auto;
`

export const Section = styled.article`
    display: flex;
    flex-direction: row;

    &.right {
        flex-direction: row-reverse;
    }
`

export const SectionText = styled.div`
    flex: calc(50% - 6rem) 0 0;
    padding: 3rem 2rem 3rem 4rem;
    text-align: justify;

    & h1 {
        font-size: 2rem;
        font-weight: 700;
        text-align: left;
        margin-bottom: 1.5rem;
    }

    & p {
        margin: 1rem 0;
    }
`

export const SectionFigure = styled.figure`
    flex: 50% 0 0;
    background-color: var(--boxShadow);
`

export const Fronthead = styled.div`
    height: 50vh;
    background-color: var(--boxShadow);
`