import styled from "styled-components";

export const Main = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 8rem);

    display: flex;
    justify-content: space-between;
    padding: 1.5rem 4rem;

    box-shadow: 0px 1px 5px 0px var(--boxShadow);
    background-color: var(--bgDefault);
`

export const Logo = styled.a`
    font-size: 2rem;
    font-weight: 700;
`

export const Search = styled.div`
    display: flex;
    padding: .5rem;
    border: 1px solid var(--boxShadow);
    background-color: var(--bgInput);
    border-radius: .5rem;
`

export const SearchIcon = styled.div`
    & svg {
        color: var(--boxShadow);
        height: 1rem;
        margin: 0 .5rem 0 .25rem;
    }
`

export const SearchText = styled.input`
    appearance: none;
    border: none;
    width: 22rem;
    background-color: var(--bgInput);

    &:focus {
        outline: none;
    }
`

export const Access = styled.div`
`