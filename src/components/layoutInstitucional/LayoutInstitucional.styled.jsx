import styled from "styled-components";

export const Wrapper = styled.div`
    padding-bottom: 4rem;
`

export const Institucional = styled.div`
    display: flex;
    height: 20rem;
    padding: 1.5rem 4rem;
    background-color: var(--bgDefault);
`

export const Column = styled.div`
    margin: 2rem;
    
    & h1 {
        font-weight: 700;
        margin-bottom: 1rem;
    }

    & p {
        margin-bottom: .25rem;
    }
`

export const WrapperFooter = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 8rem);
`

export const Footer = styled.div`
    position: relative;
    bottom: 0;
    left: 4rem;
    width: 100%;

    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0;

    background-color: var(--bgDefault);
    border-top: 1px solid var(--boxShadow);
`

export const FooterLogo = styled.div`
    font-weight: 700;
`

export const FooterLegal = styled.div`
    display: flex;
    flex-direction: columns;
    justify-content: space-between;

    & a:not(:last-child) {
        margin-right: 1rem;
    }
`
