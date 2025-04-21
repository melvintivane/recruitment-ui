import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const ServicePage = () => {
  const servicePage = [
    {
      id: 1,
      serviceIcon: "uim-object-ungroup",
      serviceName: "Gerenciar Anúncios de Emprego",
      serviceText:
        "Aprendemos rapidamente a temer e, assim, evitamos automaticamente situações potencialmente estressantes de todos os tipos.",
    },
    {
      id: 2,
      serviceIcon: "uim-telegram-alt",
      serviceName: "Pesquisa Temporária",
      serviceText:
        "Parece que apenas fragmentos do texto original permanecem nos textos Lorem Ipsum usados hoje.",
    },
    {
      id: 3,
      serviceIcon: "uim-airplay",
      serviceName: "Exibir Vagas",
      serviceText:
        "Incubar oportunidades intuitivas e potencialidades em tempo real. Comunicar de forma apropriada a tecnologia de maneira individualizada.",
    },
    {
      id: 4,
      serviceIcon: "uim-rocket",
      serviceName: "Para Agências",
      serviceText:
        "Na falta de conselhos, minha irmã não sabia. Ela disse que não sabia, viu onde estava e pode ter entendido.",
    },
    {
      id: 5,
      serviceIcon: "uim-history",
      serviceName: "Suporte Rápido",
      serviceText:
        "Designers têm muitas ferramentas para tornar uma história mais interessante. Você pode alinhar sua imagem à esquerda ou ao centro com uma legenda.",
    },
    {
      id: 6,
      serviceIcon: "uim-bookmark",
      serviceName: "Favoritar Vagas",
      serviceText:
        "Transforma-se em uma história interativa que pode engajar os usuários. Designers têm muitas ferramentas para tornar uma história mais interessante.",
    },
    {
      id: 7,
      serviceIcon: "uim-layers-alt",
      serviceName: "Design Criativo",
      serviceText:
        "Uma agência de consultoria empresarial está envolvida no planejamento, implementação e educação de empresas. Trabalhamos diretamente.",
    },
    {
      id: 8,
      serviceIcon: "uim-anchor",
      serviceName: "Estratégia & Pesquisa",
      serviceText:
        "O aspecto mais importante da beleza era, portanto, uma parte inerente de um objeto, e não algo externo.",
    },
    {
      id: 9,
      serviceIcon: "uim-graph-bar",
      serviceName: "Análise em Tempo Real",
      serviceText:
        "Essa resposta é importante para nossa capacidade de aprender com os erros, mas também dá origem à autocrítica.",
    },
  ];

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center">
                <h3 className="title mb-3">
                  Fornecendo nossos{" "}
                  <span className="text-warning">Serviços</span>
                </h3>
                <p className="text-muted">
                  É um fato amplamente estabelecido que um leitor ficará em uma
                  página quando olhar para o seu layout.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {servicePage.map((servicePageDetails, key) => (
              <Col lg={4} md={6} key={key}>
                <Card className="service-box mt-4 border-0">
                  <CardBody className="p-4">
                    <div className="service-icon icons-md">
                      <Icon
                        icon={servicePageDetails.serviceIcon}
                        color="#766df4"
                      />
                    </div>
                    <div className="mt-4">
                      <h5>{servicePageDetails.serviceName}</h5>
                      <p className="text-muted">
                        {servicePageDetails.serviceText}
                      </p>
                    </div>
                    <div className="learn-more">
                      <Link to="#" className="form-text text-primary">
                        Saiba Mais <i className="uil uil-angle-right-b"></i>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ServicePage;
