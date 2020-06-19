import styled from "styled-components";

export const Main = styled.div`
    @keyframes pulse {
        0% {
            transform: translate(-50%, -50%) scale(0.8);
        }
        70% {
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            transform: translate(-50%, -50%) scale(0.8);
        }
    }

    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 5rem;
    transform: translate(-50%, -50%);
    animation: pulse 2s infinite;
    background-color: var(--bgDefault);
`
