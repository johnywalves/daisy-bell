import styled from "styled-components";

export const Main = styled.div`
  padding: 0.5rem 2rem;
  margin: 0.5rem 0;
  color: ${(props) => (props.selected ? "var(--textClean)" : "var(--text)")};
  border: 1px solid
    ${(props) => (props.selected ? "var(--textClean)" : "var(--text)")};
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.selected ? "var(--textSelected)" : "transparent"};

  &:hover {
    color: var(--textClean);
    border: 1px solid var(--textClean);
    background-color: var(--textSelected);
    transition: border 1s, background-color 1s;
  }
`;
