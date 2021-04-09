import styled from "styled-components";
import InputText from "components/inputText/InputText";

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;

  & a {
    margin: 0.5rem;
  }
`;

export const SearchText = styled(InputText)`
  width: 70%;
  margin: 0 auto 1rem;
`;
