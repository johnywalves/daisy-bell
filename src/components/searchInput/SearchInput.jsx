import React from "react";
import PropTypes from "prop-types";
// components
import InputText from "components/inputText/InputText";
// assets
import Icons from "assets/Icons";

const SearchInput = ({ large, ...rest }) => {
  return (
    <InputText
      large={large}
      icon={<Icons.Search />}
      placeholder="Suco de cevadiss deixa as pessoas mais interessantis"
      {...rest}
    />
  );
};

SearchInput.defaultProps = {
  large: false,
};

SearchInput.propTypes = {
  large: PropTypes.bool,
};

export default SearchInput;
