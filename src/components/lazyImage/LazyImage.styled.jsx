import styled from "styled-components";

export const Main = styled.div`
    @keyframes pulse {
        0% {
            background-color: var(--bgInfoFade);
        }
        50% {
            background-color: var(--boxShadow);
        }
        100% {
            background-color: var(--bgInfoFade);
        }
    }

    position: relative;
    background-color: var(--boxShadow);
    background-size: cover;
    background-position: center center;
    animation: pulse 2s infinite;
`


