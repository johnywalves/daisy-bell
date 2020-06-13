import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// components
import LayoutProduct from "components/layoutProduct/LayoutProduct";
// actons
import getArticle from "actions/getArticle";
// style
import * as S from "./Article.styled";

const articleClean = { name: "...", content: "..." };

const Article = () => {

    const { slug } = useParams();

    const [article, setArticle] = useState(articleClean);

    useEffect(() => slug ? getArticle(slug, setArticle) : setArticle(articleClean), [slug, setArticle]);

    const createMarkup = useCallback(a => a.content ? { __html: a.content } : {}, []);
    const styleFigure = useCallback(a => a.cover ? { backgroundImage: `url(${a.cover})` } : {}, []);

    return <LayoutProduct title={article.name}>
        <S.Article className="right">
            <S.ArticleText>
                <h1>{article.name}</h1>
                <div dangerouslySetInnerHTML={createMarkup(article)} />
            </S.ArticleText>
            <S.ArticleFigure style={styleFigure(article)} />
        </S.Article>
    </LayoutProduct>
}

export default Article;