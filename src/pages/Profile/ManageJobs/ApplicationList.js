import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";

//Import Images
import jobImage from "../../../assets/images/light-logo.png";

const ApplicationList = ({
  jobList,
  pagination,
  totalElements,
  totalPages,
  onPageChange,
  onPageSizeChange,
  language,
}) => {
  // const [modal, setModal] = useState(false);
  // const openModal = () => setModal(!modal);

  return (
    <React.Fragment>
      {jobList?.length === 0 ? (
        <div className="text-center py-5">
          <i className="uil uil-exclamation-triangle fs-1 text-warning"></i>
          <h5 className="mt-3">
            {language === "pt"
              ? "Nenhuma candidatura encontrada"
              : "No applications found"}
          </h5>
          <p className="text-muted">
            {language === "pt"
              ? "Candidaturas aparecerão assim que se candidatar a vagas"
              : "Applications will appear as soon as you apply to jobs"}
          </p>
        </div>
      ) : (
        jobList?.map((job, key) => (
          <Row>
            <Col lg={12}>
              <Card className="job-box card mt-4" key={key}>
                <CardBody className="p-4">
                  <Row>
                    <Col lg={1}>
                      <Link to={`/jobdetails/${job.id}`}>
                        <img
                          src={jobImage}
                          alt=""
                          className="img-fluid rounded-3"
                        />
                      </Link>
                    </Col>

                    <Col lg={9}>
                      <div className="mt-3 mt-lg-0">
                        <h5 className="fs-17 mb-1">
                          <Link
                            to={`/jobdetails/${job.id}`}
                            className="text-dark"
                          >
                            {job.title}
                          </Link>
                        </h5>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <p
                              className="text-muted fs-14 mb-0"
                              dangerouslySetInnerHTML={{
                                __html:
                                  job.description ||
                                  "Nenhuma descrição fornecida.",
                              }}
                            ></p>
                          </li>
                        </ul>
                        <p className="text-muted fs-14 mb-0">
                          <i className="mdi mdi-map-marker"></i> {job.country}
                        </p>
                        <div className="mt-2">
                          <span
                            className={
                              job.type === "FULL_TIME"
                                ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                                : job.type === "PART_TIME"
                                ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                                : job.type === "FIXED_TERM"
                                ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                                : "badge bg-info-subtle text-info mt-1"
                            }
                          >
                            {job.type === "FULL_TIME"
                              ? "Tempo Integral"
                              : job.type === "PART_TIME"
                              ? "Meio Período"
                              : job.type === "FIXED_TERM"
                              ? "Contrato"
                              : job.type === "INTERNSHIP"
                              ? "Estágio"
                              : "Freelance"}
                          </span>
                          <span
                            className={
                              job.status === "ACTIVE"
                                ? "badge bg-success-subtle text-success fs-13 mt-1"
                                : job.status === "CLOSED"
                                ? "badge bg-danger-subtle text-danger fs-13 mt-1"
                                : "badge bg-warning-subtle text-warning fs-13 mt-1"
                            }
                          >
                            {job.status === "ACTIVE"
                              ? "Activa"
                              : job.status === "CLOSED"
                              ? "Fechada"
                              : "Pendente"}
                          </span>
                        </div>
                      </div>
                    </Col>

                    {/* <Col lg={2} className="align-self-center">
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
                  </Col> */}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        ))
      )}

      {/* Pagination */}
      {jobList?.length > 0 && (
        <Row>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="text-muted">
              {language === "pt" ? "Mostrando" : "Showing"}{" "}
              <span className="fw-bold">{jobList?.content?.length || 0}</span>{" "}
              {language === "pt" ? "de" : "of"}{" "}
              <span className="fw-bold">{totalElements || 0}</span>{" "}
              {language === "pt" ? "empresas" : "companies"}
              <select
                className="form-select form-select-sm ms-2 d-inline-block w-auto"
                value={pagination.size}
                onChange={onPageSizeChange}
              >
                {[5, 10, 20, 50].map((size) => (
                  <option key={size} value={size}>
                    {size} {language === "pt" ? "por página" : "per page"}
                  </option>
                ))}
              </select>
            </div>

            <nav aria-label="Page navigation">
              <Pagination className="mb-0">
                <PaginationItem disabled={pagination.page === 0}>
                  <PaginationLink
                    previous
                    onClick={() => onPageChange(pagination.page - 1)}
                  />
                </PaginationItem>

                {Array.from(
                  { length: Math.min(5, totalPages || 0) },
                  (_, i) => {
                    let pageNum;
                    if ((totalPages || 0) <= 5) {
                      pageNum = i;
                    } else if (pagination.page <= 2) {
                      pageNum = i;
                    } else if (pagination.page >= (totalPages || 0) - 3) {
                      pageNum = (totalPages || 0) - 5 + i;
                    } else {
                      pageNum = pagination.page - 2 + i;
                    }

                    return (
                      <PaginationItem
                        key={pageNum}
                        active={pageNum === pagination.page}
                      >
                        <PaginationLink onClick={() => onPageChange(pageNum)}>
                          {pageNum + 1}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }
                )}

                <PaginationItem
                  disabled={pagination.page === (totalPages || 0) - 1}
                >
                  <PaginationLink
                    next
                    onClick={() => onPageChange(pagination.page + 1)}
                  />
                </PaginationItem>
              </Pagination>
            </nav>
          </div>
        </Row>
      )}

      {/* <div
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
      </div> */}
    </React.Fragment>
  );
};

export default ApplicationList;
