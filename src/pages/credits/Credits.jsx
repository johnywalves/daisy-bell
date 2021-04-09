import React from "react";
// components
import Content from "components/content/Content";
import LayoutInstitucional from "components/layoutInstitucional/LayoutInstitucional";
// styles
import * as S from "./Credits.styled";

const Credits = () => {
  return (
    <LayoutInstitucional>
      <Content
        title="Credits"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis nisi dui, ut finibus tellus imperdiet eu. Aliquam erat volutpat. Mauris sed congue elit"
      >
        <S.ContentContainer>
          <p>
            Desenvolvimento por{" "}
            <a
              href="https://johnywalves.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Johny W. Alves</strong>
            </a>
          </p>
          <p>
            Icones{" "}
            <a
              href="https://fontawesome.com/license"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Font Awesome</strong>
            </a>
          </p>
          <p>
            FavIcon{" "}
            <a
              href="https://www.iconfinder.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Iconfinder</strong>
            </a>
          </p>
          <p>
            Layout inspirado em{" "}
            <a
              href="https://web.500px.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>500px</strong>
            </a>
          </p>
        </S.ContentContainer>
      </Content>
    </LayoutInstitucional>
  );
};

export default Credits;
