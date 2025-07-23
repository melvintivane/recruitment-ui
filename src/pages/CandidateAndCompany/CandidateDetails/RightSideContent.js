import React, { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";

//Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

//Import Blog Imgaes
import blogImage1 from "../../../assets/images/blog/img-01.jpg";
import blogImage3 from "../../../assets/images/blog/img-03.jpg";

//Import user Images

import { useLanguage } from "../../../context/LanguageContext";

const images = [blogImage1, blogImage1, blogImage3];

const RightSideContent = ({ data }) => {
  const [photoIndex, setphotoIndex] = useState(0);
  const [isGallery, setisGallery] = useState(false);
  const { language } = useLanguage();
  return (
    <React.Fragment>
      {isGallery ? (
        <Lightbox
          open={isGallery}
          close={() => setisGallery(false)}
          index={photoIndex}
          slides={images.map((image) => ({ src: image }))}
        />
      ) : null}
      <Col lg={8}>
        <Card className="candidate-details ms-lg-4 mt-4 mt-lg-0">
          <CardBody className="p-4 candidate-personal-detail">
            <div>
              <h6 className="fs-17 fw-semibold mb-3">{language === 'pt' ? "Sobre Mim" : "About Me"}</h6>
              <p className="text-muted mb-2">
                {data.professionalSummary}
              </p>

            </div>

            <div className="candidate-education-details mt-4 pt-3">
              <h6 className="fs-17 fw-bold mb-0">{language === 'pt' ? "Educação" : "Education"}</h6>
              {data.educations?.map((education, index) => (
                <div key={index} className="candidate-education-content mt-4 d-flex">
                  <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                    {education.course?.charAt(0).toUpperCase()}
                  </div>
                  <div className="ms-4">
                    <h6 className="fs-16 mb-1">
                      {education.course}
                    </h6>
                    <p className="mb-2 text-muted">
                      {education.location} • {new Date(education.startDate).getFullYear()} {" - "}
                      {education.endDate ? new Date(education.endDate).getFullYear() : ""}
                    </p>
                    <p className="text-muted">
                      {education.description}
                    </p>

                    <p className="text-muted small mt-1">
                      <strong>{language === 'pt' ? "Grau" : "Degree"}:</strong> {education.degree}
                    </p>

                  </div>
                </div>
              ))}
            </div>
            <div className="candidate-education-details mt-4 pt-3">
              <h6 className="fs-17 fw-bold mb-0">{language === 'pt' ? "Experiência" : "Experience"}</h6>
              {data.experiences?.map((experience, index) => (
                <div key={index} className="candidate-education-content mt-4 d-flex">
                  <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                    {experience.company?.charAt(0).toUpperCase()}
                  </div>
                  <div className="ms-4">
                    <h6 className="fs-16 mb-1">
                      {experience.company}
                    </h6>
                    <p className="mb-2 text-muted">
                      {experience.position} • {experience.location} • {new Date(experience.startDate).getFullYear()} {" - "}
                      {experience.endDate ? new Date(experience.endDate).getFullYear() : language === 'pt' ? "Atual" : "Current"}
                    </p>
                    <p className="text-muted">
                      {experience.duties}
                    </p>
                  </div>
                </div>
              ))}
            </div>



            {/*<form action="#" className="mt-4 pt-3">
              <h6 className="fs-17 fw-semibold mb-2">
                {language === 'pt' ? "Adicionar uma avaliação" : "Add a review"}
              </h6>
              <p className="text-muted mb-3">
                {language === 'pt' ? "Sua avaliação para esta listagem" : "Your rating for this listing"}
              </p>
              <Row>
                <Col lg={12}>
                  <div className="mb-3">
                    <label htmlFor="inputname" className="form-label">
                      {language === 'pt' ? "Seu Nome" : "Your Name"}
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="inputname"
                      placeholder={language === 'pt' ? "Digite seu nome" : "Enter your name"}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-3">
                    <label htmlFor="inputemail" className="form-label">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      className="form-control"
                      id="inputemail"
                      placeholder={language === 'pt' ? "Digite seu e-mail" : "Enter your e-mail"}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-3">
                    <label htmlFor="inputsubject" className="form-label">
                      {language === 'pt' ? "Assunto" : "Subject"}
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="inputsubject"
                      placeholder={language === 'pt' ? "Assunto" : "Subject"}
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-3">
                    <label htmlFor="inputcoment" className="form-label">
                      {language === 'pt' ? "Avaliação" : "Evaluation"}
                    </label>
                    <textarea
                      className="form-control"
                      id="inputcoment"
                      rows="3"
                      placeholder={language === 'pt' ? "Adicione sua avaliação" : "Add your review"}
                    ></textarea>
                  </div>
                </Col>
              </Row>
              <div className="text-end">
                <button type="submit" className="btn btn-primary btn-hover">
                  {language === 'pt' ? "Enviar Avaliação" : "Send Review"} <i className="uil uil-angle-right-b"></i>
                </button>
              </div>
            </form>*/}
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default RightSideContent;
