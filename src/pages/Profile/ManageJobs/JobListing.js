import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Modal, ModalBody, Row } from "reactstrap";

import Pagination from "../../../components/Pagination";

//Import Images
import jobImage1 from "../../../assets/images/featured-job/img-01.png";
import jobImage2 from "../../../assets/images/featured-job/img-02.png";
import jobImage3 from "../../../assets/images/featured-job/img-03.png";
import jobImage4 from "../../../assets/images/featured-job/img-04.png";
import jobImage5 from "../../../assets/images/featured-job/img-05.png";
import jobImage6 from "../../../assets/images/featured-job/img-06.png";

const JobListing = () => {
  //Delete Modal
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  const jobListing = [
    {
      id: 1,
      companyImg: jobImage1,
      jobDescription: "Associado de Negócios",
      experience: "",
      companyName: "Recruitment Technology Pvt.Ltd",
      location: "Califórnia",
      salary: "$250 - $800 / mês",
      partTime: true,
      timing: "Meio Período",
      badges: [
        {
          id: 1,
          badgeclassName: "bg-warning-subtle text-warning",
          badgeName: "Urgente",
        },
      ],
    },
    {
      id: 2,
      companyImg: jobImage2,
      jobDescription: "Diretor de Marketing",
      experience: "2-4 anos de experiência",
      companyName: "Agência Criativa",
      location: "Nova Iorque",
      salary: "$250 - $800 / mês",
      partTime: true,
      timing: "Meio Período",
      badges: [
        {
          id: 1,
          badgeclassName: "bg-info-subtle text-info",
          badgeName: "Privado",
        },
      ],
    },
    {
      id: 3,
      companyImg: jobImage3,
      jobDescription: "Desenvolvedor HTML",
      experience: "2-4 anos de experiência",
      companyName: "Recruitment Technology Pvt.Ltd",
      location: "Califórnia",
      salary: "$250 - $800 / mês",
      freeLance: true,
      timing: "Freelancer",
      badges: [
        {
          id: 1,
          badgeclassName: "bg-blue-subtle text-blue",
          badgeName: "Estágio",
        },
      ],
    },
    {
      id: 4,
      companyImg: jobImage4,
      jobDescription: "Especialista em Vendas de Produtos",
      experience: "5+ anos de experiência",
      companyName: "Recruitment Technology Pvt.Ltd",
      location: "Califórnia",
      salary: "$250 - $800 / mês",
      fullTime: true,
      timing: "Freelancer",
      badges: [
        {
          id: 1,
          badgeclassName: "bg-info-subtle text-info",
          badgeName: "Privado",
        },
      ],
    },
    {
      id: 5,
      companyImg: jobImage5,
      jobDescription: "Designer de Produtos",
      experience: "0-5 anos de experiência",
      companyName: "Agência Criativa",
      location: "Califórnia",
      salary: "$250 - $800 / mês",
      internship: true,
      timing: "Estágio",
      badges: [],
    },
    {
      id: 6,
      companyImg: jobImage6,
      jobDescription: "Gerente de Projetos",
      experience: "0-2 anos de experiência",
      companyName: "Recruitment Technology Pvt.Ltd",
      location: "Califórnia",
      salary: "$250 - $800 / mês",
      fullTime: true,
      timing: "Freelancer",
      badges: [
        {
          id: 1,
          badgeclassName: "bg-warning-subtle text-warning",
          badgeName: "Urgente",
        },
        {
          id: 2,
          badgeclassName: "bg-info-subtle text-info",
          badgeName: "Privado",
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          {jobListing.map((jobListingDetails, key) => (
            <Card className="job-box card mt-4" key={key}>
              <CardBody className="p-4">
                <Row>
                  <Col lg={1}>
                    <Link to="/companydetails">
                      <img
                        src={jobListingDetails.companyImg}
                        alt=""
                        className="img-fluid rounded-3"
                      />
                    </Link>
                  </Col>

                  <Col lg={9}>
                    <div className="mt-3 mt-lg-0">
                      <h5 className="fs-17 mb-1">
                        <Link to="/jobdetails" className="text-dark">
                          {jobListingDetails.jobDescription}
                        </Link>
                      </h5>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0">
                            {jobListingDetails.companyName}
                          </p>
                        </li>
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0">
                            <i className="mdi mdi-map-marker"></i>{" "}
                            {jobListingDetails.location}
                          </p>
                        </li>
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0">
                            <i className="uil uil-wallet"></i>{" "}
                            {jobListingDetails.salary}
                          </p>
                        </li>
                      </ul>
                      <div className="mt-2">
                        <span
                          className={
                            jobListingDetails.fullTime === true
                              ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                              : jobListingDetails.partTime === true
                              ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                              : jobListingDetails.freeLance === true
                              ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                              : jobListingDetails.internship === true
                              ? "badge bg-info-subtle text-info fs-13 mt-1"
                              : ""
                          }
                        >
                          {jobListingDetails.timing}
                        </span>
                        {(jobListingDetails.badges || []).map(
                          (badgeInner, key) => (
                            <span
                              className={`badge ${badgeInner.badgeclassName} fs-13 mt-1`}
                              key={key}
                            >
                              {badgeInner.badgeName}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </Col>

                  <Col lg={2} className="align-self-center">
                    <ul className="list-inline mt-3 mb-0">
                      <li
                        className="list-inline-item"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                      >
                        <Link
                          to="/bookmarkjobpost"
                          className="avatar-sm bg-success-subtle text-success d-inline-block text-center rounded-circle fs-18"
                        >
                          <i className="uil uil-edit"></i>
                        </Link>
                      </li>
                      <li
                        className="list-inline-item"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <Link
                          onClick={openModal}
                          to="#"
                          className="avatar-sm bg-danger-subtle text-danger d-inline-block text-center rounded-circle fs-18"
                        >
                          <i className="uil uil-trash-alt"></i>
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ))}
        </Col>
        <Pagination />
      </Row>

      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={modal} toggle={openModal} centered>
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Excluir Vaga?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              ></button>
            </div>
            <ModalBody>
              <div>
                <h6 className="text-danger">
                  <i className="uil uil-exclamation-triangle"></i> Aviso: Tem
                  certeza que deseja excluir esta vaga?
                </h6>
                <p className="text-muted">
                  Sua vaga será permanentemente removida e você não poderá vê-la
                  novamente, incluindo as que foram compartilhadas com seus
                  amigos.
                </p>
              </div>
            </ModalBody>
            <div className="modal-footer">
              <button
                type="button"
                onClick={openModal}
                className="btn btn-primary btn-sm"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-danger btn-sm">
                Sim, excluir
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobListing;
