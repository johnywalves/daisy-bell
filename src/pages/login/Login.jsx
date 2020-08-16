import React from "react";
import { Link } from "react-router-dom";
// components
import LayoutProduct from "components/layoutProduct/LayoutProduct";
import Badge from "components/badge/Badge";
// style
import * as Layout from "styles/Layout.styled";
// assets
import Icons from "assets/Icons";

const Login = () => {
  return <LayoutProduct>
    <Badge>
      <h1>Log In</h1>
      <p>Morbi ac augue at dui ultrices congue</p>
      <Layout.FieldTextLogin large icon={<Icons.user />} />
      <p>Morbi ac augue at dui ultrices congue</p>
      <Layout.FieldTextLogin large icon={<Icons.key />} />
      <Layout.FieldButtonLogin>Ultrices</Layout.FieldButtonLogin>
      <h5>Morbi ac augue at dui <Link to="/signup">Sign Up</Link></h5>
    </Badge>
  </LayoutProduct>
}

export default Login;
