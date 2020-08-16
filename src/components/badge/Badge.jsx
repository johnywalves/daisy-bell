import React from "react";
import PropTypes from "prop-types";
// style
import * as S from "./Badge.styled";

const Badge = ({ children }) => {
    return <S.Painel>
        <S.Box>
            {children}
        </S.Box>
    </S.Painel>
}

Badge.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Badge;