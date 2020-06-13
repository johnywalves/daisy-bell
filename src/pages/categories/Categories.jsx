import React from "react";
// components
import LayoutProduct from "components/layoutProduct/LayoutProduct";
import Category from "components/category/Category";
import Content from "components/content/Content";
// style
import * as S from "./Categories.styled";
// assets
import Icons from "assets/Icons";
import categories from "assets/categories.json";

const Categories = () => {
  return <LayoutProduct title="Categories">
    <Content title="Categories" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis nisi dui, ut finibus tellus imperdiet eu. Aliquam erat volutpat. Mauris sed congue elit">
      <S.SearchText large icon={<Icons.search />} />
      <S.Categories>
        {categories.map(c => <Category key={c.name} {...c} />)}
      </S.Categories>
    </Content>
  </LayoutProduct>
}

export default Categories;
