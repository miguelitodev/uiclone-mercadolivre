import React from "react";

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
} from "./styles";

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon></LocationIcon>
        <div>
          <p>Localização</p>
          <strong>São Paulo, São Paulo</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className="active"></li>
        </ReputationThermometer>
        <ReputationRow>
          <div>
            <strong>561</strong>
            <p> vendas nos últimos 4 meses</p>
          </div>
          <div>
            <strong>
              <SupportIcon />
            </strong>
            <p> vendas nos últimos 4 meses</p>
          </div>
          <div>
            <strong>
              <ClockIcon />
            </strong>
            <p> vendas nos últimos 4 meses</p>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais dados do vendedor</More>
    </Container>
  );
};

export default SellerInfo;
