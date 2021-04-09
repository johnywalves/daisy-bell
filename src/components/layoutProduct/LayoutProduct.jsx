import React from "react";
import PropTypes from "prop-types";
// components
import Header from "components/header/Header";
// style
import * as Layout from "styles/Layout.styled";

const LayoutProduct = ({ children, ...rest }) => {
  return (
    <Layout.Main>
      <Header {...rest} />
      {children}
    </Layout.Main>
  );
};

LayoutProduct.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutProduct;
