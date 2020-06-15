import styled from "styled-components";
import InputButton from "components/inputButton/InputButton";
import LazyImage from "components/lazyImage/LazyImage";

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
        margin: 1rem 0;
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
    padding: 1rem 0;
    overflow-y: auto;

    & a:not(:last-child) {
        margin-right: 1rem;
    } 
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

export const SectionFigure = styled(LazyImage)`
    flex: 50% 0 0;
`

export const Fronthead = styled(LazyImage)`
    position: relative;
    height: 50vh;
    background-color: var(--boxShadow);
`

export const FrontheadPainel = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: var(--bgInfoFade);
`

export const FrontheadBox = styled.div`
    position: relative;
    color: var(--textClean);
    padding: 5rem 0 0 5rem;
    display: flex;
    flex-direction: column;

    .right & {
        text-align: right;
        padding: 5rem 5rem 0 0;
    }

    .right & p {
        margin-left: 50%; 
    }

    h1 {
        font-size: 4rem;
        font-weight: 700;
        text-shadow: 2px 2px var(--boxShadow);
        margin-bottom: 1rem;
    }

    p {
        width: 50%;
        font-size: 2rem;
        text-shadow: 1px 1px var(--boxShadow);
        margin-bottom: 1rem;
    }
`

export const SignUpButton = styled(InputButton)`
    width: 10rem;
    font-weight: 700;
`
