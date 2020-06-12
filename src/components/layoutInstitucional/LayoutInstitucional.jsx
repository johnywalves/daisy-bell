import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
                    <Link to="/aboutus"><p>About Us</p></Link>
                </S.Column>
            </S.Institucional>
        </S.Wrapper>
        <S.Footer>
            <S.FooterLogo>
                <Link to="/"><p>Daisy Bell</p></Link>
            </S.FooterLogo>
            <S.FooterLegal>
                <Link to="/terms"><p>Terms of Use</p></Link>
                <Link to="/privacy"><p>Policy Privacy</p></Link>
            </S.FooterLegal>
        </S.Footer>
    </S.Main>
}

LayoutInstitucional.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LayoutInstitucional;