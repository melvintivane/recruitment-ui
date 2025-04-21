import React from "react";
import { Container, Row, Col, Card, CardImg, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

//swiper css
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";
import "swiper/css/autoplay";

//Importação de imagens
import MailChimp from "../../assets/images/logo/mailchimp.svg";
import WordPress from "../../assets/images/logo/wordpress.svg";
import Instagram from "../../assets/images/logo/Instagram.svg";

const Testimonal = () => {
  const testimonal = [
    {
      id: 1,
      image: MailChimp,
      content:
        "Comunicação muito bem pensada e articulada. Marcos claros, prazos definidos e trabalho rápido. Paciência. Paciência infinita. Nada de atalhos. Mesmo que o cliente esteja sendo descuidado.",
      name: "Jeffrey Montgomery",
      occupation: "Gerente de Produto",
    },
    {
      id: 2,
      image: WordPress,
      content:
        "Comunicação muito bem pensada e articulada. Marcos claros, prazos definidos e trabalho rápido. Paciência. Paciência infinita. Nada de atalhos. Mesmo que o cliente esteja sendo descuidado.",
      name: "Rebecca Swartz",
      occupation: "Designer Criativa",
    },
    {
      id: 3,
      image: Instagram,
      content:
        "Comunicação muito bem pensada e articulada. Marcos claros, prazos definidos e trabalho rápido. Paciência. Paciência infinita. Nada de atalhos. Mesmo que o cliente esteja sendo descuidado.",
      name: "Charles Dickens",
      occupation: "Assistente de Loja",
    },
  ];

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center mb-4 pb-2">
                <h3 className="title mb-3">Candidatos Satisfeitos</h3>
                <p className="text-muted">
                  Publique uma vaga e nos conte sobre o seu projeto. Nós o
                  conectaremos rapidamente com os candidatos certos.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Swiper
                className="pb-5"
                loop={true}
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
              >
                <div className="swiper-wrapper">
                  {(testimonal || []).map((testimonalDetails, key) => (
                    <SwiperSlide key={key}>
                      <Card className="testi-box">
                        <CardBody>
                          <div className="mb-4">
                            <CardImg
                              src={testimonalDetails.image}
                              height="50"
                              alt=""
                            />
                          </div>
                          <p className="testi-content lead text-muted mb-4">
                            {testimonalDetails.content}
                          </p>
                          <h5 className="mb-0">{testimonalDetails.name}</h5>
                          <p className="text-muted mb-0">
                            {testimonalDetails.occupation}
                          </p>
                        </CardBody>
                      </Card>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Testimonal;
