import React from "react";
import PropTypes from "prop-types";
// styled
import * as S from "./Content.styled";

const Content = ({ title, subtitle, children }) => {
    return <S.Main>
        <S.Forehead>
            <h1>{title}</h1>
            {subtitle && <h5>{subtitle}</h5>}
        </S.Forehead>
        <S.Body>
            {children}
        </S.Body>
    </S.Main>
}

Content.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Content;