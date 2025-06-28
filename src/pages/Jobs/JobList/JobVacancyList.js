import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllVacancies } from "../../../services/vacancyService";
import {
  Col,
  Input,
  Label,
  Row,
  Modal,
  ModalBody,
  PaginationItem,
  PaginationLink,
  Pagination,
} from "reactstrap";

//Images Import
import jobImage1 from "../../../assets/images/light-logo.png";

const JobVacancyList = ({ filters }) => {
  const [modal, setModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    resume: null,
  });
  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
  });

  // Fetch vacancies query
  const { data, isLoading, error } = useQuery({
    queryKey: ["vacancies", pagination.page, pagination.size, filters],
    queryFn: () =>
      getAllVacancies({
        page: pagination.page,
        size: pagination.size,
        search: filters.searchQuery,
        location: filters.location,
        category: filters.jobCategoryId,
      }),
    keepPreviousData: true,
  });

  // Apply for job mutation
  // const applyMutation = useMutation({
  //   mutationFn: (applicationData) =>
  //     applyForJob(selectedJob.id, applicationData),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["vacancies"]);
  //     setModal(false);
  //     setFormData({
  //       name: "",
  //       email: "",
  //       message: "",
  //       resume: null,
  //     });
  //     // Show success notification
  //     alert("Application submitted successfully!");
  //   },
  //   onError: (error) => {
  //     alert(`Error submitting application: ${error.message}`);
  //   },
  // });

  const openModal = (vacancy) => {
    setSelectedJob(vacancy);
    setModal(true);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < (data?.totalPages || 0)) {
      setPagination((prev) => ({ ...prev, page: newPage }));
    }
  };

  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setPagination((prev) => ({ ...prev, size: newSize, page: 0 }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    if (formData.resume) {
      formDataToSend.append("resume", formData.resume);
    }
    // applyMutation.mutate(formDataToSend);
  };

  if (isLoading) {
    return <div>Loading vacancies...</div>;
  }

  if (error) {
    return <div className="text-danger">Error: {error.message}</div>;
  }

  return (
    <>
      <div>
        {data?.content?.map((vacancy, key) => (
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
                        src={vacancy.company.logo || jobImage1}
                        alt={vacancy.company.name}
                        className="img-fluid rounded-3"
                      />
                    </Link>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="mb-2 mb-md-0">
                    <h5 className="fs-18 mb-0">
                      <Link
                        to={`/jobdetails/${vacancy.id}`}
                        className="text-dark"
                      >
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
                    {(vacancy.city || vacancy.state || vacancy.country) && (
                      <p className="text-muted mb-0">
                        {[vacancy.city, vacancy.state, vacancy.country]
                          .filter(Boolean)
                          .join(", ")}
                      </p>
                    )}
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
                      {vacancy.type === "FULL_TIME"
                        ? "Tempo Integral"
                        : vacancy.type === "PART_TIME"
                        ? "Meio Período"
                        : vacancy.type === "CONTRACT"
                        ? "Contrato"
                        : "Estágio"}
                    </span>
                    {
                      <span
                        className={
                          vacancy.status === "ACTIVE"
                            ? "badge bg-success-subtle text-success fs-13 mt-1"
                            : vacancy.status === "CLOSED"
                            ? "badge bg-danger-subtle text-danger fs-13 mt-1"
                            : "badge bg-warning-subtle text-warning fs-13 mt-1"
                        }
                      >
                        {vacancy.status === "ACTIVE"
                          ? "Activa"
                          : vacancy.status === "CLOSED"
                          ? "Fechada"
                          : "Pendente"}
                      </span>
                    }
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
                      onClick={() => openModal(vacancy)}
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

        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="text-muted">
            Mostrando{" "}
            <span className="fw-bold">{data?.content?.length || 0}</span> de{" "}
            <span className="fw-bold">{data?.totalElements || 0}</span> vagas
            <select
              className="form-select form-select-sm ms-2 d-inline-block w-auto"
              value={pagination.size}
              onChange={handlePageSizeChange}
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size} por página
                </option>
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

              {Array.from(
                { length: Math.min(5, data?.totalPages || 0) },
                (_, i) => {
                  let pageNum;
                  if ((data?.totalPages || 0) <= 5) {
                    pageNum = i;
                  } else if (pagination.page <= 2) {
                    pageNum = i;
                  } else if (pagination.page >= (data?.totalPages || 0) - 3) {
                    pageNum = (data?.totalPages || 0) - 5 + i;
                  } else {
                    pageNum = pagination.page - 2 + i;
                  }

                  return (
                    <PaginationItem
                      key={pageNum}
                      active={pageNum === pagination.page}
                    >
                      <PaginationLink onClick={() => handlePageChange(pageNum)}>
                        {pageNum + 1}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
              )}

              <PaginationItem
                disabled={pagination.page === (data?.totalPages || 0) - 1}
              >
                <PaginationLink
                  next
                  onClick={() => handlePageChange(pagination.page + 1)}
                />
              </PaginationItem>
            </Pagination>
          </nav>
        </div>

        {/* Application Modal */}
        <Modal isOpen={modal} toggle={() => setModal(false)} centered>
          <ModalBody className="modal-body p-5">
            <div className="text-center mb-4">
              <h5 className="modal-title" id="staticBackdropLabel">
                Aplicar Para: {selectedJob?.title}
              </h5>
            </div>
            <div className="position-absolute end-0 top-0 p-3">
              <button
                type="button"
                onClick={() => setModal(false)}
                className="btn-close"
                aria-label="Fechar"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <Label for="name" className="form-label">
                  Nome
                </Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-control"
                  id="name"
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              <div className="mb-3">
                <Label for="email" className="form-label">
                  Endereço de E-mail
                </Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control"
                  id="email"
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>
              <div className="mb-3">
                <Label for="message" className="form-label">
                  Mensagem
                </Label>
                <textarea
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  id="message"
                  rows="4"
                  placeholder="Digite sua mensagem"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <Label className="form-label" for="resume">
                  Enviar Currículo
                </Label>
                <Input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  className="form-control"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                // disabled={applyMutation.isLoading}
              >
                {/* {applyMutation.isLoading ? "Enviando..." : "Enviar Inscrição"} */}
              </button>
            </form>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default JobVacancyList;
