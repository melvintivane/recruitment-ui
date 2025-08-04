import { Icon } from "@iconify/react";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";

const Features = () => {
  const {language} = useLanguage();
  const translatedFeatures = {
    pt : {
      features : [
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
      featureIcon: "uim-airplay",
      featureName: "Exibir Vagas",
    },
    {
      id: 5,
      featureIcon: "uim-rocket",
      featureName: "Para Agências",
    },
    {
      id: 6,
      featureIcon: "uim-history",
      featureName: "Suporte Rápido",
    },
    {
      id: 7,
      featureIcon: "uim-bookmark",
      featureName: "Favoritar Vagas",
    },
    {
      id: 8,
      featureIcon: "uim-graph-bar",
      featureName: "Análise em Tempo Real",
    },
  ]
    },
  en : {
    features: [
  {
    id: 1,
    featureIcon: "uim-object-ungroup",
    featureName: "Manage Job Listings",
  },
  {
    id: 2,
    featureIcon: "uim-telegram-alt",
    featureName: "Create CV",
  },
  {
    id: 3,
    featureIcon: "uim-lock-access",
    featureName: "Privacy Policy",
  },
  {
    id: 4,
    featureIcon: "uim-airplay",
    featureName: "Display Jobs",
  },
  {
    id: 5,
    featureIcon: "uim-rocket",
    featureName: "For Agencies",
  },
  {
    id: 6,
    featureIcon: "uim-history",
    featureName: "Fast Support",
  },
  {
    id: 7,
    featureIcon: "uim-bookmark",
    featureName: "Bookmark Jobs",
  },
  {
    id: 8,
    featureIcon: "uim-graph-bar",
    featureName: "Real-Time Analytics",
  },
]
  }
};

const t = translatedFeatures[language] || translatedFeatures['pt'];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="section-title text-center mb-5">
                <h3 className="title mb-4">{language === 'pt' ? "Principais Funcionalidades" : "Main Features"}</h3>
                <p className="para-desc text-muted mx-auto">
                  {language === 'pt' ? "Comece a trabalhar com a Recruitment, que pode fornecer tudo o que você precisa para gerar reconhecimento, atrair tráfego e conectar." : "Get started with Recruitment, which can provide everything you need togenerate awareness, attract traffic, and connect."}
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {t.features.map((featuresDetails, key) => (
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
