import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    padding: .5rem;
    border: 1px solid var(--boxShadow);
    background-color: var(--${props => props.large ? "bgDefault" : "bgInput"});
    border-radius: .5rem;
`

export const Icon = styled.div`
    & svg {
        color: var(--boxShadow);
        height: ${props => props.large ? "1.5rem" : "1rem"};
        margin: 0 .5rem 0 .25rem;
    }
`

export const Input = styled.input`
    appearance: none;
    border: none;
    width: ${props => props.large ? "100%" : "22rem"};
    font-size: ${props => props.large ? "1.2rem" : ".8rem"};
    font-weight: ${props => props.large ? "100" : "400"};
    background-color: var(--${props => props.large ? "bgDefault" : "bgInput"});

    &:focus {
        outline: none;
    }
`
