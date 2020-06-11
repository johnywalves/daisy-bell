import React from "react";
import PropTypes from "prop-types";
// styled
import * as S from "./SearchInput.styled";
// assets
import Icons from "assets/Icons";

const SearchInput = ({ large }) => {
    return <S.Search large={large}>
        <S.SearchIcon large={large} children={<Icons.search />} />
        <S.SearchText large={large} type="text" placeholder="Suco de cevadiss deixa as pessoas mais interessantis" />
    </S.Search>
}

SearchInput.defaultProps = {
    large: false,
};

SearchInput.propTypes = {
    large: PropTypes.bool,
}

export default SearchInput;