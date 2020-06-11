import React from "react";
// components
import LayoutInstitucional from "components/layoutInstitucional/LayoutInstitucional";
import Category from "components/category/Category";
// styled
import * as S from "./Home.styled";
// assets
import Icons from "assets/Icons";

const Home = () => {
  return (
    <LayoutInstitucional>
      <S.Fronthead />
      <S.Content>
        <h1>Admodum accumsan</h1>
      </S.Content>
      <S.Content className="pieces">
        <S.ContentPiece>
          <Icons.gems />
          <h3>Vai caçá sua turmis</h3>
          <p>Quem num gosta di mé, boa gentis num é. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem num gosta di mim que vai caçá sua turmis!</p>
        </S.ContentPiece>
        <S.ContentPiece>
          <Icons.gems />
          <h3>Mé faiz elementum girarzis</h3>
          <p>Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Mé faiz elementum girarzis, nisi eros vermeio. Suco de cevadiss deixa as pessoas mais interessantis. In elementis mé pra quem é amistosis quis leo.</p>
        </S.ContentPiece>
        <S.ContentPiece>
          <Icons.gems />
          <h3>Diuretics paradis num copo</h3>
          <p>Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. A ordem dos tratores não altera o pão duris. Diuretics paradis num copo é motivis de denguis.</p>
        </S.ContentPiece>
      </S.Content>
      <S.Content>
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
      </S.Content>
      <S.Section className="left">
        <S.SectionText>
          <h1>Diuretics paradis num copo</h1>
          <p>Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem num gosta di mim que vai caçá sua turmis!</p>
          <p>Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. A ordem dos tratores não altera o pão duris. Diuretics paradis num copo é motivis de denguis.</p>
          <p>Quem num gosta di mé, boa gentis num é. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem num gosta di mim que vai caçá sua turmis!</p>
        </S.SectionText>
        <S.SectionFigure>
        </S.SectionFigure>
      </S.Section>
      <S.Section className="right">
        <S.SectionText>
          <h1>Diuretics paradis num copo</h1>
          <p>Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem num gosta di mim que vai caçá sua turmis!</p>
          <p>Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. A ordem dos tratores não altera o pão duris. Diuretics paradis num copo é motivis de denguis.</p>
          <p>Quem num gosta di mé, boa gentis num é. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem num gosta di mim que vai caçá sua turmis!</p>
        </S.SectionText>
        <S.SectionFigure>
        </S.SectionFigure>
      </S.Section>
      <S.Fronthead />
    </LayoutInstitucional>
  );
}

export default Home;
