import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import jobImages2 from "../../../assets/images/featured-job/img-02.png";
import JobApplicationModal from "../../../components/JobApplicationModal";

const RightSideContent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <React.Fragment>
      <div className="side-bar ms-lg-4">
        <Card className="job-overview">
          <CardBody className="p-4">
            <h6 className="fs-17">Visão Geral da Vaga</h6>
            <ul className="list-unstyled mt-4 mb-0">
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-user icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Título da Vaga</h6>
                    <p className="text-muted mb-0">Designer de Produto</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-star-half-alt icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Experiência</h6>
                    <p className="text-muted mb-0">0-3 Anos</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Localização</h6>
                    <p className="text-muted mb-0">Matola</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-usd-circle icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Salário Oferecido</h6>
                    <p className="text-muted mb-0">$35mil - $45mil</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-graduation-cap icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Qualificação</h6>
                    <p className="text-muted mb-0">Licenciatura</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-building icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Setor</h6>
                    <p className="text-muted mb-0">Privado</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-history icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Data da Publicação</h6>
                    <p className="text-muted mb-0">Publicado há 2 horas</p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-3">
              <Link
                to="#applyNow"
                onClick={toggleModal}
                className="btn btn-primary btn-hover w-100 mt-2"
              >
                Candidatar-se <i className="uil uil-arrow-right"></i>
              </Link>
              <Link
                to="/candidatelist"
                onClick={toggleModal}
                className="btn btn-primary btn-hover w-100 mt-2"
              >
                Ver Candidatos <i className="uil uil-arrow-right"></i>
              </Link>
              <Link
                to="/bookmarkjobs"
                className="btn btn-soft-warning btn-hover w-100 mt-2"
              >
                <i className="uil uil-bookmark"></i> Adicionar aos Favoritos
              </Link>
            </div>
          </CardBody>
        </Card>

        <Card className="company-profile mt-4">
          <CardBody className="p-4">
            <div className="text-center">
              <img src={jobImages2} alt="" className="img-fluid rounded-3" />

              <div className="mt-4">
                <h6 className="fs-17 mb-1">Recruitment Technology Pvt.Ltd</h6>
                <p className="text-muted">Desde julho de 2017</p>
              </div>
            </div>
            <ul className="list-unstyled mt-4">
              <li>
                <div className="d-flex">
                  <i className="uil uil-phone-volume text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Telefone</h6>
                    <p className="text-muted fs-14 mb-0">+258 84 207 4393</p>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-envelope text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Email</h6>
                    <p className="text-muted fs-14 mb-0">
                      melvintivane@gmail.com
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-globe text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Website</h6>
                    <p className="text-muted fs-14 text-break mb-0">
                      www.Recruitmenttechnology.com
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-map-marker text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Localização</h6>
                    <p className="text-muted fs-14 mb-0">
                      Maputo
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                to="/companydetails"
                className="btn btn-primary btn-hover w-100 rounded"
              >
                <i className="mdi mdi-eye"></i> Ver Perfil
              </Link>
            </div>
          </CardBody>
        </Card>

        <div className="mt-4">
          <h6 className="fs-16 mb-3">Localização da Vaga</h6>
          <iframe
            title="Praça da OMM"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14435.963812325818!2d32.583142!3d-25.968347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee6bcb6286d3971%3A0x21497f5c37e40b66!2sPra%C3%A7a%20da%20OMM!5e0!3m2!1spt-PT!2smz!4v1713262686123!5m2!1spt-PT!2smz"
            style={{ width: `100%`, height: `250` }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div
          className="modal fade"
          id="applyNow"
          tabIndex="-1"
          aria-labelledby="applyNow"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <JobApplicationModal isOpen={modalOpen} toggle={toggleModal} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RightSideContent;
