import styled from "styled-components";

export const Main = styled.div`
    position: relative;
    margin-top: 5rem;
`

export const Wrapper = styled.div`
    padding-bottom: 4rem;
`

export const Institucional = styled.div`
    height: 20rem;
    background-color: var(--bgDetail);
`

export const Footer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 8rem);

    display: flex;
    justify-content: space-between;
    padding: 1.5rem 4rem;

    background-color: var(--bgDefault);
`

export const FooterLogo = styled.div`
    font-weight: 700;
`

export const FooterLegal = styled.div`
    display: flex;
    flex-direction: columns;
    justify-content: space-between;

    & a:first-child {
        margin-right: 1rem;
    }
`
