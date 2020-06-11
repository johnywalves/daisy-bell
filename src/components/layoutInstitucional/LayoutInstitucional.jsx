import React from "react";
import PropTypes from "prop-types";
// components
import Header from "components/header/Header";
// styled
import * as S from "./LayoutInstitucional.styled";

const LayoutInstitucional = ({ children }) => {
    return <S.Main>
        <S.Wrapper>
            <Header />
            {children}
            <S.Institucional>
                <S.Column>
                    <h1>Product</h1>
                    <a href="/aboutus"><p>About Us</p></a>
                </S.Column>
            </S.Institucional>
        </S.Wrapper>
        <S.Footer>
            <S.FooterLogo>
                <a href="/"><p>Daisy Bell</p></a>
            </S.FooterLogo>
            <S.FooterLegal>
                <a href="/terms"><p>Terms of Use</p></a>
                <a href="/privacy"><p>Policy Privacy</p></a>
            </S.FooterLegal>
        </S.Footer>
    </S.Main>
}

LayoutInstitucional.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LayoutInstitucional;