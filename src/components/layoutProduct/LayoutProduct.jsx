import React from "react";
import PropTypes from "prop-types";
// components
import Header from "components/header/Header";
// styled
import * as S from "./LayoutProduct.styled";

const LayoutProduct = ({ children }) => {
    return <S.Main>
        <Header />
        {children}
    </S.Main>
}

LayoutProduct.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LayoutProduct;