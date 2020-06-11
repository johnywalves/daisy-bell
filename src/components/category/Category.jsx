import React from "react";
import PropTypes from "prop-types";
// styled
import * as S from "./Category.styled";

const Category = ({ name, search }) => {
    return <a href={search ? "/categories" : "/search"}>
        <S.Main>
            {name}
        </S.Main>
    </a>
}

Category.defaultProps = {
    search: false,
};

Category.propTypes = {
    name: PropTypes.string.isRequired,
    search: PropTypes.bool
}

export default Category;