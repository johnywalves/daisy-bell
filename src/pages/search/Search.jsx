import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
          <Link to="article"><S.ListItem /></Link>
        </S.ListResult>
      </S.Results>
    </S.Main>
  </LayoutProduct>
}

export default Search;
