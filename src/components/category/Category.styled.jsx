import styled from "styled-components";
import LazyImage from "components/lazyImage/LazyImage";

export const Main = styled(LazyImage)`
  color: var(--textClean);
  border-radius: 0.5rem;

  & p {
    margin: 0 !important;
    padding: 2rem 2.5rem;
    font-weight: 700;
    text-shadow: 2px 2px var(--boxShadow);

    border-radius: 0.5rem;
    backdrop-filter: blur(10px) saturate(25%);
    transition: backdrop-filter 0.5s;
  }

  & p:hover {
    backdrop-filter: none;
  }
`;
