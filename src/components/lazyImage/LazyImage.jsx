import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// style
import * as S from "./LazyImage.styled";

const LazyImage = ({ children, src, full, ...rest }) => {

    const [style, setStyle] = useState({});

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = src;
        imageLoader.onload = () => { setStyle({ backgroundImage: `url(${src})` }) };
    }, [setStyle, src])

    return <S.Main style={style} {...rest}>
        {full && <S.Painel children={children} />}
        {!full && children}
    </S.Main>
}

LazyImage.defaultProps = {
    full: false,
};

LazyImage.propTypes = {
    children: PropTypes.node,
    full: PropTypes.bool,
    src: PropTypes.string,
};

export default LazyImage;