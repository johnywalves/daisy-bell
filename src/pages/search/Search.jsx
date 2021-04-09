import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// components
import LayoutProduct from "components/layoutProduct/LayoutProduct";
import SearchInput from "components/searchInput/SearchInput";
import Category from "components/category/Category";
import SearchItem from "components/searchItem/SearchItem";
// actons
import getArticle from "actions/getArticle";
import getSearch from "actions/getSearch";
// styles
import * as S from "./Search.styled";
// assets
import categories from "assets/categories.json";

const ResultItem = ({ id, name, thumbnail }) => {
  const [collected, setCollect] = useState(false);

  const mouseOver = useCallback(
    () => (collected ? true : getArticle(id) && setCollect(true)),
    [setCollect, id, collected]
  );

  return (
    <Link to={`/${id}`}>
      <S.ListItem src={thumbnail} onMouseOver={mouseOver}>
        <p>{name}</p>
      </S.ListItem>
    </Link>
  );
};

const Search = () => {
  const { category } = useParams();

  const [object, setObject] = useState();
  const [articles, setArticles] = useState([]);

  useEffect(() => setObject(categories.find((c) => c.id === category)), [
    category,
  ]);

  const createMarkup = useCallback(() => {
    const __html = `No results${
      object && ` for category <strong>${object.name}</strong>`
    }`;
    return { __html };
  }, [object]);

  useEffect(() => {
    const params = { setResult: setArticles };
    if (object && object.id) {
      params.category = object.id;
    }
    getSearch(params);
  }, [setArticles, object]);

  return (
    <LayoutProduct>
      <S.Main category={object}>
        {object && (
          <S.Sidebar>
            <Category selected {...object} />
            <h1>Elementum</h1>
            <SearchItem name="Deprimidis" />
            <SearchItem name="Mé faiz elementum" />
            <SearchItem name="Motivis" />
            <SearchItem name="Interessantis" />
            <SearchItem name="Denguis" />
            <h1>Turmis</h1>
            <SearchItem name="Boa" />
            <SearchItem name="Molestie" />
            <SearchItem name="Molestie" />
            <SearchItem name="Quem" />
          </S.Sidebar>
        )}
        <S.Results>
          <SearchInput large />
          <S.AlertResult
            visible={articles.length === 0}
            dangerouslySetInnerHTML={createMarkup()}
          />
          <S.ListResult>
            {articles.map((a) => (
              <ResultItem key={a.id} {...a} />
            ))}
          </S.ListResult>
        </S.Results>
      </S.Main>
    </LayoutProduct>
  );
};

export default Search;
