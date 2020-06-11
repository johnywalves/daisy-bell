import React from "react";
// components
import LayoutProduct from "components/layoutProduct/LayoutProduct";
import SearchInput from "components/searchInput/SearchInput";
import Category from "components/category/Category";
import SearchItem from "components/searchItem/SearchItem";
// styles
import * as S from "./Search.styled";

const Search = () => {
  return <LayoutProduct>
    <S.Main>
      <S.Sidebar>
        <Category name="Disputationi" search={true} />
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
      <S.Results>
        <SearchInput large={true} />
        <S.ListResult>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
          <a href="article"><S.ListItem /></a>
        </S.ListResult>
      </S.Results>
    </S.Main>
  </LayoutProduct>
}

export default Search;
