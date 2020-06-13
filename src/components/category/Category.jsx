import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// style
import * as S from "./Category.styled";

const Category = ({ name, selected }) => {
    return <Link to={selected ? "/categories" : `/search/${name}`}>
        <S.Main>
            {name}
        </S.Main>
    </Link>
}

Category.defaultProps = {
    selected: false,
};

Category.propTypes = {
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool
}

export default Category;