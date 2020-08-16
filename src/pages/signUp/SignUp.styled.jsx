import styled from "styled-components";

export const Button = styled.button`
    height: 3rem;
    width: 100%;
    border-radius: 1rem;
    border: none;
    color: var(--text);
    font-size: 1rem;

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
    }
`
