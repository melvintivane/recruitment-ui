import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Icon } from "@iconify/react";

const Features = () => {
  const features = [
    {
      id: 1,
      featureIcon: "uim-object-ungroup",
      featureName: "Gerenciar Anúncios de Vagas",
    },
    {
      id: 2,
      featureIcon: "uim-telegram-alt",
      featureName: "Criar CV",
    },
    {
      id: 3,
      featureIcon: "uim-lock-access",
      featureName: "Política de Privacidade",
    },
    {
      id: 4,
      featureIcon: "uim-user-md",
      featureName: "Perfis de Recrutadores",
    },
    {
      id: 5,
      featureIcon: "uim-airplay",
      featureName: "Exibir Vagas",
    },
    {
      id: 6,
      featureIcon: "uim-rocket",
      featureName: "Para Agências",
    },
    {
      id: 7,
      featureIcon: "uim-history",
      featureName: "Suporte Rápido",
    },
    {
      id: 8,
      featureIcon: "uim-bookmark",
      featureName: "Favoritar Vagas",
    },
    {
      id: 9,
      featureIcon: "uim-graph-bar",
      featureName: "Análise em Tempo Real",
    },
  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="section-title text-center mb-5">
                <h3 className="title mb-4">Principais Funcionalidades</h3>
                <p className="para-desc text-muted mx-auto">
                  Comece a trabalhar com a Hireway, que pode fornecer tudo o que
                  você precisa para gerar reconhecimento, atrair tráfego e
                  conectar.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {features.map((featuresDetails, key) => (
              <Col lg={4} md={6} className="mt-4 pt-2" key={key}>
                <div className="about-feature p-3 d-flex align-items-center rounded-3">
                  <div className="featrue-icon flex-shrink-0">
                    <Icon
                      icon={featuresDetails.featureIcon}
                      className="text-primary"
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="fs-18 mb-0">
                      {featuresDetails.featureName}
                    </h6>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Features;
