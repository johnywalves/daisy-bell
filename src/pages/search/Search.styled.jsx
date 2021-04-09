import styled from "styled-components";
import media from "styled-media-query";
import LazyImage from "components/lazyImage/LazyImage";

export const Main = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.category ? "20% 80%" : "100%")};

  &:hover {
    cursor: pointer;
  }
`;

export const Sidebar = styled.div`
  padding: 2rem 1rem;
  background-color: var(--bgContent);

  & h1 {
    margin: 0.5rem 0;
    font-weight: 700;
  }
`;

export const Results = styled.div`
  padding: 2rem 1rem;
`;

export const AlertResult = styled.p`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

export const ListResult = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 19.5%);
  grid-gap: 0.625%;
  margin-top: 1rem;

  ${media.lessThan("large")`
        grid-template-columns: repeat(4, 24%);
        grid-gap: 1%;
    `}

  ${media.lessThan("medium")`
        grid-template-columns: repeat(3, 32%);
        grid-gap: 1%;
    `}

    ${media.lessThan("small")`
        grid-template-columns: repeat(2, 49.5%);
        grid-gap: 1%;
    `}
`;

export const ListItem = styled(LazyImage)`
  position: relative;
  height: 15rem;
  border-radius: 0.5rem;
  transition: transform 0.5s;

  & p {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1.5rem;

    color: var(--textClean);
    font-weight: 700;
    text-align: center;

    border-radius: 0 0 0.5rem 0.5rem;
    background-image: linear-gradient(var(--bgInfoStart), var(--bgInfoEnd));

    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    z-index: 2;
    transform: scale(1.1);

    & p {
      opacity: 1;
    }
  }
`;
