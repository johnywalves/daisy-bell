import React from "react";
// components
import LayoutProduct from "components/layoutProduct/LayoutProduct";
import Category from "components/category/Category";
import Content from "components/content/Content";
// styled
import * as S from "./Categories.styled";

const Categories = () => {
  return <LayoutProduct>
    <Content title="Categories" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis nisi dui, ut finibus tellus imperdiet eu. Aliquam erat volutpat. Mauris sed congue elit">
      <S.Categories>
        <Category name="Disputationi" />
        <Category name="Admodum" />
        <Category name="Deprimidis" />
        <Category name="Electram" />
        <Category name="Sadipscing" />
        <Category name="Tratores" />
        <Category name="Disputationi" />
        <Category name="Admodum" />
        <Category name="Deprimidis" />
        <Category name="Electram" />
        <Category name="Sadipscing" />
        <Category name="Tratores" />
      </S.Categories>
    </Content>
  </LayoutProduct>
}

export default Categories;
