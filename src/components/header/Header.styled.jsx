import styled from "styled-components";
import { Link } from "react-router-dom";

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
  z-index: 2;
`;

export const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
`;

export const Access = styled.div``;
