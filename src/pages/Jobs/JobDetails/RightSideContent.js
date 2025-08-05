import { Card, CardBody, Badge } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import jobImages2 from "../../../assets/images/featured-job/img-02.png";
import {
  translateCareerLevel,
  translateJobType,
} from "../../../utils/jobTranslations";
import { applyToVacancy } from "../../../services/applicationService";
import { useAuth } from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useLanguage } from "../../../context/LanguageContext";

const RightSideContent = ({ job }) => {
  const { user } = useAuth();
  const { language } = useLanguage();
  document.title = language === "pt" ? "Detalhes da Vaga" : "Job Details";

  if (!job) return null;

  // Format salary
  const formatSalary = (min, max) => {
    return `$${(min / 1000).toFixed(0)}k - $${(max / 1000).toFixed(0)}k / ano`;
  };

  // Calculate time since posting
  const getTimeSincePosting = (dateString) => {
    const postedDate = new Date(dateString);
    const now = new Date();
    const diffHours = Math.floor((now - postedDate) / (1000 * 60 * 60));

    if (diffHours < 24)
      return `Publicado há ${diffHours} hora${diffHours !== 1 ? "s" : ""}`;
    const diffDays = Math.floor(diffHours / 24);
    return `Publicado há ${diffDays} dia${diffDays !== 1 ? "s" : ""}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.candidateId) {
      toast.info(language === "pt" ? "Usuário não autenticado!" : "User not authenticated!");
      return;
    }

    try {
      const applicationDto = {
        candidateId: user.candidateId,
      };

      await applyToVacancy(job.id, applicationDto);

      toast.success(language === "pt" ? "Candidatura enviada com sucesso!" : "Application submitted successfully!");
    } catch (err) {
      toast.error(err.message || (language === "pt" ? "Erro ao enviar candidatura" : "Error submitting application"));
    }
  };

  return (
    <div className="side-bar ms-lg-4">
      <Card className="job-overview">
        <CardBody className="p-4">
          <h6 className="fs-17">{language === "pt" ? "Visão Geral da Vaga" : "Job Overview"}</h6>
          <ul className="list-unstyled mt-4 mb-0">
            <li>
              <div className="d-flex mt-4">
                <i className="uil uil-user icon bg-primary-subtle text-primary"></i>
                <div className="ms-3">
                  <h6 className="fs-14 mb-2">{language === "pt" ? "Título da Vaga" : "Job Title"}</h6>
                  <p className="text-muted mb-0">{job.title}</p>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex mt-4">
                <i className="uil uil-star-half-alt icon bg-primary-subtle text-primary"></i>
                <div className="ms-3">
                  <h6 className="fs-14 mb-2">{language === "pt" ? "Experiência" : "Experience"}</h6>
                  <p className="text-muted mb-0">
                    {job.yearsOfExperience || "0"}-
                    {job.yearsOfExperience ? job.yearsOfExperience + 2 : "3"}{" "}
                    {language === "pt" ? "Anos" : "Years"}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex mt-4">
                <i className="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                <div className="ms-3">
                  <h6 className="fs-14 mb-2">{language === "pt" ? "Localização" : "Location"}</h6>
                  <p className="text-muted mb-0">
                    {job.city || job.state || job.country || "Remoto"}
                    {job.remoteAllowed && (
                      <Badge color="success" className="ms-2">
                        {language === "pt" ? "Remoto" : "Remote"}
                      </Badge>
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex mt-4">
                <i className="uil uil-usd-circle icon bg-primary-subtle text-primary"></i>
                <div className="ms-3">
                  <h6 className="fs-14 mb-2">{language === "pt" ? "Salário Oferecido" : "Offered Salary"}</h6>
                  <p className="text-muted mb-0">
                    {job.minSalary && job.maxSalary
                      ? formatSalary(job.minSalary, job.maxSalary)
                      : "A combinar"}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex mt-4">
                <i className="uil uil-graduation-cap icon bg-primary-subtle text-primary"></i>
                <div className="ms-3">
                  <h6 className="fs-14 mb-2">{language === "pt" ? "Qualificação" : "Qualification"}</h6>
                  <p className="text-muted mb-0">
                    {job.degreeRequired || (language === "pt" ? "Não especificado" : "Not specified")}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex mt-4">
                <i className="uil uil-briefcase-alt icon bg-primary-subtle text-primary"></i>
                <div className="ms-3">
                  <h6 className="fs-14 mb-2">{language === "pt" ? "Tipo de Emprego" : "Job Type"}</h6>
                  <p className="text-muted mb-0">
                    {translateJobType(job.type)}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex mt-4">
                <i className="uil uil-chart-line icon bg-primary-subtle text-primary"></i>
                <div className="ms-3">
                  <h6 className="fs-14 mb-2">{language === "pt" ? "Nível de Carreira" : "Career Level"}</h6>
                  <p className="text-muted mb-0">
                    {translateCareerLevel(job.careerLevel)}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex mt-4">
                <i className="uil uil-history icon bg-primary-subtle text-primary"></i>
                <div className="ms-3">
                  <h6 className="fs-14 mb-2">{language === "pt" ? "Data da Publicação" : "Date Posted"}</h6>
                  <p className="text-muted mb-0">
                    {getTimeSincePosting(job.createdAt)}
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div className="mt-3">
            <Link
              to="#"
              onClick={handleSubmit}
              className="btn btn-primary btn-hover w-100 mt-2"
            >
              Candidatar-se <i className="uil uil-arrow-right"></i>
            </Link>
            {/* <Link
              to="/candidatelist"
              className="btn btn-primary btn-hover w-100 mt-2"
            >
              Ver Candidatos <i className="uil uil-arrow-right"></i>
            </Link> */}
            {/* <Link
              to="/bookmarkjobs"
              className="btn btn-soft-warning btn-hover w-100 mt-2"
            >
              <i className="uil uil-bookmark"></i> Adicionar aos Favoritos
            </Link> */}
          </div>
        </CardBody>
      </Card>

      {job.company && (
        <Card className="company-profile mt-4">
          <CardBody className="p-4">
            <div className="text-center">
              <img
                src={job.company.logo || jobImages2}
                alt={job.company.name}
                className="img-fluid rounded-3"
                style={{ maxHeight: "80px" }}
              />

              <div className="mt-4">
                <h6 className="fs-17 mb-1">{job.company.name}</h6>
                <p className="text-muted">
                  {language === "pt" ? "Desde" : "Since"} {job.company.foundedYear || "N/A"}
                </p>
              </div>
            </div>
            <ul className="list-unstyled mt-4">
              <li>
                <div className="d-flex">
                  <i className="uil uil-phone-volume text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">{language === "pt" ? "Telefone" : "Phone"}</h6>
                    <p className="text-muted fs-14 mb-0">
                      {job.company.mobileNumber || "N/A"}
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-envelope text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Email</h6>
                    <p className="text-muted fs-14 mb-0">
                      {job.company.email || "N/A"}
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-globe text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">{language === "pt" ? "Website" : "Website"}</h6>
                    <p className="text-muted fs-14 text-break mb-0">
                      {job.company.website ? (
                        <a
                          href={job.company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {job.company.website.replace(/^https?:\/\//, "")}
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-map-marker text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">{language === "pt" ? "Localização" : "Location"}</h6>
                    <p className="text-muted fs-14 mb-0">
                      {[
                        job.company.city,
                        job.company.state,
                        job.company.country,
                      ]
                        .filter(Boolean)
                        .join(", ")}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            {/* <div className="mt-4">
              <Link
                to={`/companydetails/${job.company.id}`}
                className="btn btn-primary btn-hover w-100 rounded"
              >
                <i className="mdi mdi-eye"></i> Ver Perfil
              </Link>
            </div> */}
          </CardBody>
        </Card>
      )}

      <div className="mt-4">
        <h6 className="fs-16 mb-3">{language === "pt" ? "Localização da Vaga" : "Job Location"}</h6>
        <iframe
          title={job.title}
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7179.076962023161!2d32.583142!3d-25.968347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee6bcb6286d3971%3A0x21497f5c37e40b66!2sPra%C3%A7a%20da%20OMM!5e0!3m2!1spt-PT!2smz!4v1713262686123!5m2!1spt-PT!2smz&q=${encodeURIComponent(
            job.city || job.state || job.country || ""
          )}`}
          style={{ width: `100%`, height: `250px` }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default RightSideContent;
