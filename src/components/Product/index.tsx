import React from "react";

import { Container } from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src="T-Shirt" loading="lazy" alt={tshirtImage} />
          </Gallery>
          <Info></Info>
        </Column>

        <Column>
          {/* <ProductAction></ProductAction> */}
          {/* <SellerInfo></SellerInfo> */}

          <WarrantySection></WarrantySection>
          <WarrantySection></WarrantySection>
          <WarrantySection></WarrantySection>
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que você está esperando, ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantida do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit pariatur
      temporibus perspiciatis vero fugiat, error repellendus quod, saepe
      necessitatibus illum voluptas, alias architecto porro facere! Cumque sed
      ex repudiandae facilis!
      <br />
      <br />
      Items inclusos:
      <br />
      - 1x LED
      <br />
      - 1x LED
      <br />
      - 1x LED
      <br />
      - 1x LED
      <br />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit pariatur
      temporibus perspiciatis vero fugiat, error repellendus quod, saepe
      necessitatibus illum voluptas, alias architecto porro facere! Cumque sed
      ex repudiandae facilis!
    </p>
  </Description>
);

export default Product;
