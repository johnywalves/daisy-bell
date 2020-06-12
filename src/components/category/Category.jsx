import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// styled
import * as S from "./Category.styled";

const Category = ({ name, search }) => {
    return <Link to={search ? "/categories" : "/search"}>
        <S.Main>
            {name}
        </S.Main>
    </Link>
}

Category.defaultProps = {
    search: false,
};

Category.propTypes = {
    name: PropTypes.string.isRequired,
    search: PropTypes.bool
}

export default Category;