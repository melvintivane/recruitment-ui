import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const PricingPage = () => {
  const pricingpage = [
    {
      id: 1,
      pricingIcon: "uim-telegram-alt",
      pricingName: "Inicial",
      pricingPrice: "35,99 USD",
      pricingsuccessclass: "btn-soft-primary",
      pricingDetails: [
        {
          id: 1,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon:
            "mdi mdi-check-bold bg-success-subtle text-success me-2",
          pricingInnerText: "Recuperação de arquivos ilimitada",
        },
        {
          id: 2,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon:
            "mdi mdi-check-bold bg-success-subtle text-success me-2",
          pricingInnerText: "Relatórios profissionais",
        },
        {
          id: 3,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon:
            "mdi mdi-check-bold bg-success-subtle text-success me-2",
          pricingInnerText: "Venda em marketplaces",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item text-decoration-line-through",
          pricingInnerIcon:
            "mdi mdi-close-thick bg-muted-subtle text-muted me-2",
          pricingInnerText: "Compilações ilimitadas",
        },
        {
          id: 5,
          pricingInnerClassName: "pricing-item text-decoration-line-through",
          pricingInnerIcon:
            "mdi mdi-close-thick bg-muted-subtle text-muted me-2",
          pricingInnerText: "Vaga exibida por 30 dias",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item text-decoration-line-through",
          pricingInnerIcon:
            "mdi mdi-close-thick bg-muted-subtle text-muted me-2",
          pricingInnerText: "Suporte Premium 24/7",
        },
      ],
    },
    {
      id: 2,
      pricingIcon: "uim-rocket",
      pricingName: "Profissional",
      pricingPrice: "49,99 USD",
      pricingsuccessclass: "btn-primary",
      pricingDetails: [
        {
          id: 1,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon:
            "mdi mdi-check-bold bg-success-subtle text-success me-2",
          pricingInnerText: "Recuperação de arquivos ilimitada",
        },
        {
          id: 2,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon:
            "mdi mdi-check-bold bg-success-subtle text-success me-2",
          pricingInnerText: "Relatórios profissionais",
        },
        {
          id: 3,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon:
            "mdi mdi-check-bold bg-success-subtle text-success me-2",
          pricingInnerText: "Venda em marketplaces",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon:
            "mdi mdi-check-bold bg-success-subtle text-success me-2",
          pricingInnerText: "Compilações ilimitadas",
        },
        {
          id: 5,
          pricingInnerClassName: "pricing-item text-decoration-line-through",
          pricingInnerIcon:
            "mdi mdi-close-thick bg-muted-subtle text-muted me-2",
          pricingInnerText: "Vaga exibida por 30 dias",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item text-decoration-line-through",
          pricingInnerIcon:
            "mdi mdi-close-thick bg-muted-subtle text-muted me-2",
          pricingInnerText: "Suporte Premium 24/7",
        },
      ],
    },
    {
      id: 3,
      pricingIcon: "uim-bag",
      pricingName: "Empresarial",
      pricingPrice: "59,99 USD",
      pricingsuccessclass: "btn-soft-primary",
      pricingDetails: [
        {
          id: 1,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon:
            "mdi mdi-check-bold bg-success-subtle text-success me-2",
          pricingInnerText: "Recuperação de arquivos ilimitada",
        },
        {
          id: 2,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon:
            "mdi mdi-check-bold bg-success-subtle text-success me-2",
          pricingInnerText: "Relatórios profissionais",
        },
        {
          id: 3,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon:
            "mdi mdi-check-bold bg-success-subtle text-success me-2",
          pricingInnerText: "Venda em marketplaces",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon:
            "mdi mdi-check-bold bg-success-subtle text-success me-2",
          pricingInnerText: "Compilações ilimitadas",
        },
        {
          id: 5,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon:
            "mdi mdi-check-bold bg-success-subtle text-success me-2",
          pricingInnerText: "Vaga exibida por 30 dias",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon:
            "mdi mdi-check-bold bg-success-subtle text-success me-2",
          pricingInnerText: "Suporte Premium 24/7",
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center">
                <span className="badge warning-bg-subtle fs-15 mb-2">
                  Escolha o Seu Plano
                </span>
                <h3>Economize até 15%</h3>
                <p className="text-muted">
                  A integração contínua e o desenvolvimento mais rápidos e
                  simples que você encontrará.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {pricingpage.map((pricingpageDetails, key) => (
              <Col lg={4} md={6} className="mt-5 pt-2" key={key}>
                <Card className="pricing-box bg-light">
                  <CardBody className="p-4 px-lg-5">
                    <div className="pricing-icon bg-light rounded-circle icons-md">
                      <Icon
                        icon={pricingpageDetails.pricingIcon}
                        className="text-primary"
                      />
                    </div>
                    <div className="pricing-name text-center mt-4 pt-2">
                      <h4 className="fs-18">
                        {pricingpageDetails.pricingName}
                      </h4>
                    </div>
                    <div className="pricing-price text-center mt-4">
                      <h2 className="fw-semibold">
                        {pricingpageDetails.pricingPrice}
                        <small className="fs-16">/mo</small>
                      </h2>
                    </div>
                    <ul className="list-unstyled pricing-details text-muted mt-4">
                      {(pricingpageDetails.pricingDetails || []).map(
                        (pricingpageInnerDetails, key) => (
                          <li
                            key={key}
                            className={
                              pricingpageInnerDetails.pricingInnerClassName
                            }
                          >
                            <i
                              className={
                                pricingpageInnerDetails.pricingInnerIcon
                              }
                            ></i>{" "}
                            {pricingpageInnerDetails.pricingInnerText}
                          </li>
                        )
                      )}
                    </ul>
                    <div className="text-center mt-4 mb-2">
                      <Link
                        to="#"
                        className={`btn ${pricingpageDetails.pricingsuccessclass} rounded-pill`}
                      >
                        Comprar Agora <i className="uil uil-arrow-right"></i>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="section bg-light">
        <Container>
          <Row className="justify-content-center">
            <div className="section-title text-center">
              <h3 className="title mb-4 pb-2">
                Veja tudo sobre seu funcionário em um só lugar.
              </h3>
              <p className="para-desc text-muted mx-auto">
                Comece a trabalhar com a Recruitment, que pode fornecer tudo o que
                você precisa para gerar conscientização, direcionar tráfego e
                conectar.
              </p>
              <div className="mt-4">
                <Link to="/contact" className="btn btn-primary btn-hover mt-2">
                  <i className="uil uil-phone me-1"></i> Contato
                </Link>
                <Link
                  to="/faqs"
                  className="btn btn-outline-primary btn-hover ms-sm-1 mt-2"
                >
                  <i className="uil uil-file-question me-1"></i> Perguntas
                  Frequentes
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PricingPage;
