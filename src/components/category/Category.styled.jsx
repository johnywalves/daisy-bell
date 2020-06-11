import styled from "styled-components";

export const Main = styled.div`
    padding: 2rem;
    border: 1px solid var(--text);
    border-radius: .5rem;

    &:hover {
        color: var(--textClean);
        border: 1px solid var(--textClean);
        background-color: var(--textLink);
        transition: border 1s, background-color 1s;
    }
`
