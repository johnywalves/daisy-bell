import React, { useState } from "react";
import PropTypes from "prop-types";
// style
import * as S from "./SearchItem.styled";

const SearchItem = ({ name }) => {

    const [selected, setSelected] = useState(false);

    const toggleSelected = () => setSelected(!selected);

    return <S.Main selected={selected} onClick={toggleSelected}>
        {name}
    </S.Main>
}

SearchItem.propTypes = {
    name: PropTypes.string.isRequired,
}

export default SearchItem;