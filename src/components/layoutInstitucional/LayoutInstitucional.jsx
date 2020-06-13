import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// components
import Header from "components/header/Header";
// style
import * as Layout from "styles/Layout.styled";
import * as S from "./LayoutInstitucional.styled";

const LayoutInstitucional = ({ children }) => {

    const goTop = useCallback(() => window.scrollTo(0, 0), []);

    return <Layout.Main>
        <S.Wrapper>
            <Header />
            {children}
            <S.Institucional>
                <S.Column>
                    <h1>Company</h1>
                    <Link to="/aboutus"><p>About Us</p></Link>
                </S.Column>
            </S.Institucional>
        </S.Wrapper>
        <S.Footer>
            <S.FooterLogo>
                <Link to="/" onClick={goTop}><p>Daisy Bell</p></Link>
            </S.FooterLogo>
            <S.FooterLegal>
                <Link to="/terms"><p>Terms of Use</p></Link>
                <Link to="/privacy"><p>Policy Privacy</p></Link>
            </S.FooterLegal>
        </S.Footer>
    </Layout.Main>
}

LayoutInstitucional.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LayoutInstitucional;