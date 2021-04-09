import React from "react";
import PropTypes from "prop-types";
// style
import * as S from "./InputText.styled";

const InputText = ({ large, icon, placeholder, className, ...rest }) => {
  return (
    <S.Box large={large} className={className}>
      <S.Icon large={large} children={icon} />
      <S.Input large={large} type="text" placeholder={placeholder} {...rest} />
    </S.Box>
  );
};

InputText.defaultProps = {
  large: false,
};

InputText.propTypes = {
  large: PropTypes.bool,
  icon: PropTypes.node,
  placeholder: PropTypes.string,
};

export default InputText;
