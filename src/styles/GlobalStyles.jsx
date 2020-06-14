import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        --text: #2e2e2e;
        --textClean: #ffffff;
        --textLink: #d23669;
        --textSelected: #108fe3;
        --textVisited: #ffa7c4;

        --boxShadow: #3b3b3b55;

        --bgDefault: #ffffff;
        --bgContent: #e3e3e3;
        --bgDetail: #d3d3d3;
        --bgInput: #f3f3f3;
        --bgInfoStart: #00000000;
        --bgInfoEnd: #000000;
        --bgInfoFade: #00000055;

        color: var(--text);
        line-height: 1;
        font-family: 'Open Sans', sans-serif;
        background-color: var(--bgDefault);
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    a {
        color: var(--text);
        cursor: pointer;
        text-decoration: none;
    }

    a:hover {
        color: var(--textLink);
    }

    strong {
        font-weight: 700;        
    }
`

export default GlobalStyles;