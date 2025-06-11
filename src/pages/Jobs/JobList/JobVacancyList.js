import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllVacancies } from "../../../services/vacancyService";
import { Col, Input, Label, Row, Modal, ModalBody, PaginationItem, PaginationLink, Pagination } from "reactstrap";

//Images Import
import jobImage1 from "../../../assets/images/light-logo.png";

const JobVacancyList = () => {
  const [modal, setModal] = useState(false);
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
    totalPages: 0,
    totalElements: 0
  });

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        setLoading(true);
        const data = await getAllVacancies(pagination.page, pagination.size);
        console.log("Fetched vacancies:", data);
        
        setVacancies(data.content);
        setPagination(prev => ({
          ...prev,
          totalPages: data.totalPages,
          totalElements: data.totalElements
        }));
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch vacancies");
        setLoading(false);
        console.error("Error fetching vacancies:", err);
      }
    };

    fetchVacancies();
  }, [pagination.page, pagination.size]);

  const openModal = () => setModal(!modal);

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < pagination.totalPages) {
      setPagination(prev => ({ ...prev, page: newPage }));
    }
  };

  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setPagination(prev => ({ ...prev, size: newSize, page: 0 }));
  };

  if (loading) {
    return <div>Loading vacancies...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <React.Fragment>
      <div>
        {vacancies?.map((vacancy, key) => (
          <div key={key} className="job-box card mt-4">
            <div className="bookmark-label text-center">
              <Link to="#" className="align-middle text-white">
                <i className="mdi mdi-star"></i>
              </Link>
            </div>
            <div className="p-4">
              <Row className="align-items-center">
                <Col md={2}>
                  <div className="text-center mb-4 mb-md-0">
                    <Link to={`/companydetails/${vacancy.company.id}`}>
                      <img
                        src={jobImage1} // Você pode usar vacancy.company.picture se existir
                        alt={vacancy.company.name}
                        className="img-fluid rounded-3"
                      />
                    </Link>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="mb-2 mb-md-0">
                    <h5 className="fs-18 mb-0">
                      <Link to={`/jobdetails/${vacancy.id}`} className="text-dark">
                        {vacancy.title}
                      </Link>
                    </h5>
                    <p className="text-muted fs-14 mb-0">
                      {vacancy.company.name}
                    </p>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="d-flex mb-2">
                    <div className="flex-shrink-0">
                      <i className="mdi mdi-map-marker text-primary me-1"></i>
                    </div>
                    <p className="text-muted mb-0">
                      {`${vacancy.city.name}, ${vacancy.city.state.name}`}
                    </p>
                  </div>
                </Col>

                <Col md={2}>
                  <div className="d-flex mb-0">
                    <div className="flex-shrink-0">
                      <i className="uil uil-clock-three text-primary me-1"></i>
                    </div>
                    <p className="text-muted mb-0">
                      {new Date(vacancy.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </Col>

                <Col md={2}>
                  <div>
                    <span
                      className={
                        vacancy.type === "FULL_TIME"
                          ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                          : vacancy.type === "PART_TIME"
                          ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                          : vacancy.type === "CONTRACT"
                          ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                          : "badge bg-info-subtle text-info mt-1"
                      }
                    >
                      {vacancy.type === "FULL_TIME" ? "Tempo Integral" : 
                       vacancy.type === "PART_TIME" ? "Meio Período" : 
                       vacancy.type === "CONTRACT" ? "Contrato" : "Estágio"}
                    </span>
                    {vacancy.status === "ACTIVE" && (
                      <span className="badge bg-warning-subtle text-warning fs-13 mt-1">
                        Ativo
                      </span>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
            <div className="p-3 bg-light">
              <Row className="justify-content-between">
                <Col md={4}>
                  <div>
                    <p className="text-muted mb-0">
                      <span className="text-dark">Experiência: </span>
                      {vacancy.yearsOfExperience} anos
                    </p>
                  </div>
                </Col>
                <Col lg={2} md={3}>
                  <div>
                    <Link
                      to="#applyNow"
                      onClick={openModal}
                      className="primary-link"
                    >
                      Inscreva-se{" "}
                      <i className="mdi mdi-chevron-double-right"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        ))}


        {/* Adicione a paginação no final */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="text-muted">
            Mostrando <span className="fw-bold">{vacancies.length}</span> de{' '}
            <span className="fw-bold">{pagination.totalElements}</span> vagas
            <select
              className="form-select form-select-sm ms-2 d-inline-block w-auto"
              value={pagination.size}
              onChange={handlePageSizeChange}
            >
              {[5, 10, 20, 50].map(size => (
                <option key={size} value={size}>{size} por página</option>
              ))}
            </select>
          </div>

          <nav aria-label="Page navigation">
            <Pagination className="mb-0">
              <PaginationItem disabled={pagination.page === 0}>
                <PaginationLink
                  previous
                  onClick={() => handlePageChange(pagination.page - 1)}
                />
              </PaginationItem>
              
              {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                let pageNum;
                if (pagination.totalPages <= 5) {
                  pageNum = i;
                } else if (pagination.page <= 2) {
                  pageNum = i;
                } else if (pagination.page >= pagination.totalPages - 3) {
                  pageNum = pagination.totalPages - 5 + i;
                } else {
                  pageNum = pagination.page - 2 + i;
                }

                return (
                  <PaginationItem key={pageNum} active={pageNum === pagination.page}>
                    <PaginationLink onClick={() => handlePageChange(pageNum)}>
                      {pageNum + 1}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem disabled={pagination.page === pagination.totalPages - 1}>
                <PaginationLink
                  next
                  onClick={() => handlePageChange(pagination.page + 1)}
                />
              </PaginationItem>
            </Pagination>
          </nav>
          </div>

        {/* Modal de Inscrição (mantido igual) */}
        <div
          className="modal fade"
          id="applyNow"
          tabIndex="-1"
          aria-labelledby="applyNow"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <Modal isOpen={modal} toggle={openModal} centered>
              <ModalBody className="modal-body p-5">
                <div className="text-center mb-4">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Aplicar Para Esta Vaga
                  </h5>
                </div>
                <div className="position-absolute end-0 top-0 p-3">
                  <button
                    type="button"
                    onClick={openModal}
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Fechar"
                  ></button>
                </div>
                <div className="mb-3">
                  <Label for="nameControlInput" className="form-label">
                    Nome
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="nameControlInput"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div className="mb-3">
                  <Label for="emailControlInput2" className="form-label">
                    Endereço de E-mail
                  </Label>
                  <Input
                    type="email"
                    className="form-control"
                    id="emailControlInput2"
                    placeholder="Digite seu e-mail"
                  />
                </div>
                <div className="mb-3">
                  <Label for="messageControlTextarea" className="form-label">
                    Mensagem
                  </Label>
                  <textarea
                    className="form-control"
                    id="messageControlTextarea"
                    rows="4"
                    placeholder="Digite sua mensagem"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <Label className="form-label" for="inputGroupFile01">
                    Enviar Currículo
                  </Label>
                  <Input
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Enviar Inscrição
                </button>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobVacancyList;
