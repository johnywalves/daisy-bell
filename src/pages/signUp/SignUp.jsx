import React from "react";
// components
import LayoutProduct from "components/layoutProduct/LayoutProduct";
import Badge from "components/badge/Badge";
// style
import * as Layout from "styles/Layout.styled";
// assets
import Icons from "assets/Icons";

const SignUp = () => {
  return <LayoutProduct>
    <Badge>
      <h1>Sign Up</h1>
      <p>Morbi ac augue at dui ultrices congue</p>
      <Layout.FieldTextLogin large icon={<Icons.user />} />
      <p>Morbi ac augue at dui ultrices congue</p>
      <Layout.FieldTextLogin large icon={<Icons.key />} />
      <Layout.FieldButtonLogin>Ultrices</Layout.FieldButtonLogin>
    </Badge>
  </LayoutProduct>
}

export default SignUp;
