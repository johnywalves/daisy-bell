import React, { useState } from "react";
import PropTypes from "prop-types";
// styled
import * as S from "./SearchItem.styled";

const SearchItem = ({ name }) => {

    const [selected, setSelected] = useState(false);

    return <S.Main selected={selected} onClick={() => setSelected(!selected)}>
        {name}
    </S.Main>
}

SearchItem.propTypes = {
    name: PropTypes.string.isRequired,
}

export default SearchItem;