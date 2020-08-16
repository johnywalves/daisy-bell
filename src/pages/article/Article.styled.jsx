import styled from "styled-components";
import LazyImage from "components/lazyImage/LazyImage";

export const Article = styled.article`
    display: flex;
    flex-direction: row;
    min-height: calc(100vh - 5.2rem);

    & h1 {
        font-size: 2rem;
        font-weight: 700;
        text-align: left;
        margin-bottom: 1.5rem;
    }
    
    &.right {
        flex-direction: row-reverse;
    }
`

export const ArticleText = styled.div`
    flex: calc(50% - 6rem) 0 0;
    padding: 3rem 2rem 3rem 4rem;
    text-align: justify;

    & p {
        margin: 1rem 0;
    }
`

export const ArticleFigure = styled(LazyImage)`
    flex: 50% 0 0;
    height: calc(100vh - 5.2rem);
`