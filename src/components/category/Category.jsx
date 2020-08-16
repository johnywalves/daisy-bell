import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// style
import * as S from "./Category.styled";

const Category = ({ id, name, cover, selected }) => {
    return <Link to={selected ? "/categories" : `/${id}/search`}>
        <S.Main src={cover}>
            <p>{name}</p>
        </S.Main>
    </Link>
}

Category.defaultProps = {
    selected: false,
};

Category.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    selected: PropTypes.bool
}

export default Category;