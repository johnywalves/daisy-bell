import styled from "styled-components";
import InputText from "components/inputText/InputText";
import InputButton from "components/inputButton/InputButton";

export const Main = styled.div`
    position: relative;
    margin-top: 5.2rem;
    min-height: calc(100vh - 5.2rem);
`

export const FieldTextLogin = styled(InputText)`
    margin: .25rem 0 1.5rem;
`

export const FieldButtonLogin = styled(InputButton)`
    width: 100%;
`