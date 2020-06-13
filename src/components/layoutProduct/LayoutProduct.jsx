import React from "react";
import PropTypes from "prop-types";
// components
import Header from "components/header/Header";
// style
import * as Layout from "styles/Layout.styled";

const LayoutProduct = ({ children }) => {
    return <Layout.Main>
        <Header />
        {children}
    </Layout.Main>
}

LayoutProduct.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LayoutProduct;