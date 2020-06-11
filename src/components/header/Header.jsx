import React from "react";
// components
import AccessUser from "components/accessUser/AccessUser";
import SearchInput from "components/searchInput/SearchInput";
// styled
import * as S from "./Header.styled";

const Header = () => {
    return <S.Main>
        <S.Logo href="/"><p>Daisy Bell</p></S.Logo>
        <SearchInput />
        <AccessUser />
    </S.Main>
}

export default Header;