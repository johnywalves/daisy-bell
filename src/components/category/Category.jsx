import React from "react";
import PropTypes from "prop-types";
// styled
import * as S from "./Category.styled";

const Category = ({ name }) => {
    return <S.Main>
        {name}
    </S.Main>
}

Category.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Category;