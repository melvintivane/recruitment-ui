import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";
import { toast } from "react-toastify";
import { downloadCv } from "../../../services/profileService";

//Import images
import profileImage from "../../../assets/images/user/user.png";

const LeftSideContent = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const handleDownloadCv = async (cvPath) => {
    try {
      const filename = cvPath.split("/").pop() || "CV.pdf";
      const blob = await downloadCv(filename);

      // Create temporary download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();

      // Cleanup
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast.success(`Download do CV iniciado`);
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Erro ao baixar o CV");
    }
  };

  return (
    <React.Fragment>
      <Col lg={4}>
        <Card className="profile-sidebar me-lg-4">
          <CardBody className="p-4">
            <div className="text-center pb-4 border-bottom">
              <img
                src={profileImage}
                alt=""
                className="avatar-lg img-thumbnail rounded-circle mb-4"
              />
              <h5 className="mb-0">
                {data.user.firstName} {data.user.lastName}
              </h5>
              <p className="text-muted">{data.desiredJobTitle}</p>
              <ul className="candidate-detail-social-menu list-inline mb-0">
                <li className="list-inline-item">
                  <Link
                    to={data.linkedin}
                    className="social-link rounded-3 btn-soft-info"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="uil uil-linkedin"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to={`https://wa.me/${data.phone}`}
                    className="social-link rounded-3 btn-soft-success"
                  >
                    <i className="uil uil-whatsapp"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to={`tel:${data.phone}`}
                    className="social-link rounded-3 btn-soft-danger"
                  >
                    <i className="uil uil-phone-alt"></i>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-4 border-bottom pb-4">
              <h5 className="fs-17 fw-bold mb-3">Documentos</h5>
              <ul className="profile-document list-unstyled mb-0">
                <li>
                  <div className="profile-document-list d-flex align-items-center mt-4 ">
                    <div className="icon flex-shrink-0">
                      <i className="uil uil-file"></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="fs-16 mb-0">Curriculo.pdf</h6>
                      <p className="text-muted mb-0">1.25 MB</p>
                    </div>
                    <div className="ms-auto">
                      <Link to="#" download className="fs-20 text-muted">
                        <i className="uil uil-import"></i>
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="profile-document-list d-flex align-items-center mt-4 ">
                    <div className="icon flex-shrink-0">
                      <i className="uil uil-file"></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="fs-16 mb-0">Carta.pdf</h6>
                      <p className="text-muted mb-0">1.25 MB</p>
                    </div>
                    <div className="ms-auto">
                      <button
                        onClick={() => handleDownloadCv(data.cvPath)}
                        className="fs-20 text-muted"
                      >
                        <i className="uil uil-import"></i>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h5 className="fs-17 fw-bold mb-3">Contatos</h5>
              <div className="profile-contact">
                <ul className="list-unstyled mb-0">
                  <li>
                    <div className="d-flex">
                      <label>Email</label>
                      <div>
                        <p className="text-muted text-break mb-0">
                          {data.user.email}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <label>Telefone</label>
                      <div>
                        <p className="text-muted mb-0">{data.phone}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <label>Localização</label>
                      <div>
                        <p className="text-muted mb-0">
                          {data.city}, {data.state}, {data.country}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default LeftSideContent;
