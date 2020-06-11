import React from "react";
// styled
import * as S from "./Header.styled";

const Header = () => {
    return <S.Main>
        <S.Logo href="/"><p>Daisy Bell</p></S.Logo>
        <S.Nav></S.Nav>
        <S.Search></S.Search>
        <S.Access></S.Access>
    </S.Main>
}

export default Header;