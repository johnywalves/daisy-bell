import styled from "styled-components";

export const Painel = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: var(--bgContent);
`

export const Box = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25rem;
    padding: 3rem 2rem;
    border-radius: 1rem;
    background-color: var(--bgDefault);

    h1 {
        text-align: center;
        margin-bottom: 1.5rem;
    }

    h5 {
        margin-top: 1rem;
        text-align: center;
    }

    h5 a {
        font-weight: 700;
    }

    p {
        color: var(--text);
        opacity: .5;
    }
`