import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
// components
import AccessUser from "components/accessUser/AccessUser";
import SearchInput from "components/searchInput/SearchInput";
// style
import * as S from "./Header.styled";

const Header = ({ title }) => {

    const history = useHistory();

    const [search, setSearch] = useState("");

    const goTop = useCallback(() => window.scrollTo(0, 0), []);

    const changeSearch = useCallback(e => setSearch(e.target.value), [setSearch]);

    const keySearch = useCallback(e => {
        if (e.key === "Escape") {
            setSearch("");
        } if (e.key === "Enter") {
            history.push(`/search/${e.target.value}`);
        }
    }, [history, setSearch]);

    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title ? `${title} ⚬ Daisy Bell` : "Daisy Bell"}</title>
            <link rel="canonical" href="https://daisy.johnywalves.com.br" />
        </Helmet>
        <S.Main>
            <S.Logo to="/" onClick={goTop}><p>Daisy Bell</p></S.Logo>
            <SearchInput value={search} onChange={changeSearch} onKeyDown={keySearch} />
            <AccessUser />
        </S.Main>
    </>
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;