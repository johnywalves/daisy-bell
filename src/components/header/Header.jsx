import React from "react";
// components
import AccessUser from "components/accessUser/AccessUser";
import SearchInput from "components/searchInput/SearchInput";
// style
import * as S from "./Header.styled";

const Header = () => {
    return <S.Main>
        <S.Logo to="/"><p>Daisy Bell</p></S.Logo>
        <SearchInput />
        <AccessUser />
    </S.Main>
}

export default Header;