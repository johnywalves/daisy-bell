import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// components
import LayoutProduct from "components/layoutProduct/LayoutProduct";
// actions
import getArticle from "actions/getArticle";
// style
import * as S from "./Article.styled";

const articleClean = { name: "...", content: "..." };

const Article = () => {
  const { slug } = useParams();

  const [article, setArticle] = useState(articleClean);

  useEffect(
    () => (slug ? getArticle(slug, setArticle) : setArticle(articleClean)),
    [slug, setArticle]
  );

  const createMarkup = useCallback(
    (a) => (a.content ? { __html: a.content } : {}),
    []
  );

  return (
    <LayoutProduct title={article.name}>
      <S.Article className="right">
        <S.ArticleText>
          <h1>{article.name}</h1>
          <div dangerouslySetInnerHTML={createMarkup(article)} />
        </S.ArticleText>
        <S.ArticleFigure src={article.cover} />
      </S.Article>
    </LayoutProduct>
  );
};

export default Article;
