import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// style
import * as S from "./InputButton.styled";

const InputButton = ({ children, to, ...rest }) => {
  if (to) {
    return (
      <Link to={to}>
        <S.Button {...rest}>{children}</S.Button>
      </Link>
    );
  }
  return <S.Button {...rest}>{children}</S.Button>;
};

InputButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

export default InputButton;
