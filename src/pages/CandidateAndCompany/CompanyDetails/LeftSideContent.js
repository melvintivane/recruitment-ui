import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";

//Importar imagem
import featureImage from "../../../assets/images/featured-job/img-01.png";

const LeftSideContent = () => {
  const {language} = useLanguage;
  return (
    <React.Fragment>
      <Col lg={4}>
        <Card className="side-bar">
          <CardBody className="p-4">
            <div className="candidate-profile text-center">
              <img
                src={featureImage}
                alt=""
                className="avatar-lg rounded-circle"
              />
              <h6 className="fs-18 mb-1 mt-4">Recruitment Technology Pvt.Ltd</h6>
              <p className="text-muted mb-4">Desde julho de 2017</p>
              <ul className="candidate-detail-social-menu list-inline mb-0">
                <li className="list-inline-item">
                  <Link to="#" className="social-link">
                    <i className="uil uil-twitter-alt"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="social-link">
                    <i className="uil uil-whatsapp"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="social-link">
                    <i className="uil uil-phone-alt"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </CardBody>

          <CardBody className="candidate-profile-overview border-top p-4">
            <h6 className="fs-17 fw-semibold mb-3">{language === 'pt' ? "Resumo do Perfil" : "Profile Summary"}</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <div className="d-flex">
                  <label className="text-dark">{language === 'pt' ? "Nome do proprietário" : "Owner's name"}</label>
                  <div>
                    <p className="text-muted mb-0">Charles Dickens</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">{language === 'pt' ? "Funcionários" : "Employees"}</label>
                  <div>
                    <p className="text-muted mb-0">1500 - 1850</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">{language === 'pt' ? "Localização" : "Location"}</label>
                  <div>
                    <p className="text-muted mb-0">Nova Iorque</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Website</label>
                  <div>
                    <p className="text-muted text-break mb-0">
                      www.Recruitmenttecnologypvt.ltd.com
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">{language === 'pt' ? "Fundada em" : "Founded in"}</label>
                  <div>
                    <p className="text-muted mb-0">10 de julho de 2017</p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-3">
              <Link to="#" className="btn btn-danger btn-hover w-100">
                <i className="uil uil-phone"></i> {language === 'pt' ? "Contactar" : "Contact"}
              </Link>
              <Link
              to="/bookmarkjobpost"
              className="btn btn-primary btn-hover w-100 mt-2"
            >
              {language === 'pt' ? "Publicar Vaga" : "Publish Vacancy"} <i className="uil uil-arrow-right"></i>
            </Link>
            </div>
          </CardBody>

          <CardBody className="p-4 border-top">
            <div className="ur-detail-wrap">
              <div className="ur-detail-wrap-header">
                <h6 className="fs-17 fw-semibold mb-3">{language === 'pt' ? "Dias de Trabalho" : "Working Days"}</h6>
              </div>
              <div className="ur-detail-wrap-body">
                <ul className="working-days">
                  <li>
                    {language === 'pt' ? "Segunda-feira" : "Monday"}<span>9h - 17h</span>
                  </li>
                  <li>
                    {language === 'pt' ? "Terça-feira" : "Tuesday"}<span>9h - 17h</span>
                  </li>
                  <li>
                    {language === 'pt' ? "Quarta-feira" : "Wednesday"}<span>9h - 17h</span>
                  </li>
                  <li>
                     {language === 'pt' ? "Quinta-feira" : "Thursday"}<span>9h - 17h</span>
                  </li>
                  <li>
                    {language === 'pt' ? "Sexta-feira" : "Friday"}<span>9h - 17h</span>
                  </li>
                  <li>
                    {language === 'pt' ? "Sábado" : "Saturday"}<span>9h - 17h</span>
                  </li>
                  <li>
                    {language === 'pt' ? "Domingo" : "Sunday"}<span className="text-danger">Fechado</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
          <CardBody className="p-4 border-top">
            <h6 className="fs-17 fw-semibold mb-4">{language === 'pt' ? "Localização da Empresa" : "Company Location"}</h6>
            <iframe
              title="Praça da OMM"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14435.963812325818!2d32.583142!3d-25.968347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee6bcb6286d3971%3A0x21497f5c37e40b66!2sPra%C3%A7a%20da%20OMM!5e0!3m2!1spt-PT!2smz!4v1713262686123!5m2!1spt-PT!2smz"
              style={{ width: `100%`, height: `250` }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default LeftSideContent;
