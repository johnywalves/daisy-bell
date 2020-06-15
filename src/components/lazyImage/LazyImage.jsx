import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// style
import * as S from "./LazyImage.styled";

const LazyImage = ({ children, src, ...rest }) => {

    const [style, setStyle] = useState({});

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = src;
        imageLoader.onload = () => { setStyle({ backgroundImage: `url(${src})` }) };
    }, [setStyle, src])

    return <S.Main style={style} {...rest}>
        {children}
    </S.Main>
}

LazyImage.propTypes = {
    children: PropTypes.node,
    src: PropTypes.string,
};

export default LazyImage;