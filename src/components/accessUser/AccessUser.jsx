import React from "react";
import { Link } from "react-router-dom";
// styles
import * as S from "./AccessUser.styled";

const AccessUser = () => {
  return (
    <S.Main>
      <Link to="/login">
        <p>Log In</p>
      </Link>
      <Link to="/signup">
        <p>Sign up</p>
      </Link>
    </S.Main>
  );
};

export default AccessUser;
