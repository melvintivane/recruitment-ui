import React from "react";
import { Card, CardBody, CardImg, Col, Container, Row } from "reactstrap";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

//swiper css
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/virtual";

//Importação de imagens
import Instagram from "../../assets/images/logo/Instagram.svg";
import MailChimp from "../../assets/images/logo/mailchimp.svg";
import WordPress from "../../assets/images/logo/wordpress.svg";
import { useLanguage } from "../../context/LanguageContext";

const Testimonal = () => {
  const { language } = useLanguage();

  const translatedTestimonials = {
    pt: {
      testimonal: [
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
      ]
    },
    en: {
      testimonal: [
        {
          id: 1,
          image: MailChimp,
          content:
            "Very well-thought-out and articulated communication. Clear milestones, defined deadlines, and fast work. Patience. Infinite patience. No shortcuts. Even when the client is being careless.",
          name: "Jeffrey Montgomery",
          occupation: "Product Manager",
        },
        {
          id: 2,
          image: WordPress,
          content:
            "Very well-thought-out and articulated communication. Clear milestones, defined deadlines, and fast work. Patience. Infinite patience. No shortcuts. Even when the client is being careless.",
          name: "Rebecca Swartz",
          occupation: "Creative Designer",
        },
        {
          id: 3,
          image: Instagram,
          content:
            "Very well-thought-out and articulated communication. Clear milestones, defined deadlines, and fast work. Patience. Infinite patience. No shortcuts. Even when the client is being careless.",
          name: "Charles Dickens",
          occupation: "Store Assistant",
        },
      ]
    }
  };

  const t = translatedTestimonials[language] || translatedTestimonials['pt']

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center mb-4 pb-2">
                <h3 className="title mb-3">{language === 'pt' ? "Candidatos Satisfeitos" : "Satisfied Candidates"}</h3>
                
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
                  {(t.testimonal || []).map((testimonalDetails, key) => (
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
