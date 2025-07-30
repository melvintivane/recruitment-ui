import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { useLanguage } from "../../../context/LanguageContext";
import { updateProfile } from "../../../services/profileService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import API_ENDPOINTS from "../../../config/api";

//Images Import
import userImage2 from "../../../assets/images/user/user.png";
import { QueryClient, useMutation } from "react-query";

const RightSideContent = ({ data }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("1");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    professionalSummary: "",
    skills: [],
    languages: [],
    educations: [],
    experiences: [],
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(
    data?.user?.imagePath
      ? `${API_ENDPOINTS.API_BASE_URL}${data.user.imagePath}`
      : userImage2
  );
  const [cvFile, setCvFile] = useState(null);

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    if (data) {
      setFormData({
        firstName: data.user?.firstName || "",
        lastName: data.user?.lastName || "",
        email: data.user?.email || "",
        phone: data.phone || "",
        country: data.country || "",
        professionalSummary: data.professionalSummary || "",
        skills: data.skills || [],
        languages: data.languages || [],
        educations: data.educations?.length
          ? [...data.educations]
          : [
              {
                degree: "",
                course: "",
                location: "",
                institution: "",
                description: "",
                startDate: "",
                endDate: "",
              },
            ],
        experiences: data.experiences?.length
          ? [...data.experiences]
          : [
              {
                company: "",
                position: "",
                location: "",
                duties: "",
                startDate: "",
                endDate: "",
              },
            ],
      });
    }
  }, [data]);

  const { mutate: updateProfileMutation, isLoading } = useMutation(
    ({ candidateId, payload, imageFile, cvFile }) =>
      updateProfile(candidateId, payload, imageFile, cvFile),
    {
      onSuccess: () => {
        toast.success(
          language === "pt"
            ? "Perfil atualizado com sucesso!"
            : "Profile updated successfully!"
        );

        QueryClient.invalidateQueries(["candidate", data.id]);

        // Recarregar a página
        navigate(0);
      },
      onError: (error) => {
        console.error("Erro ao atualizar perfil:", error);
        toast.error(
          language === "pt"
            ? "Erro ao atualizar perfil"
            : "Error updating profile"
        );
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Preparar os dados para envio
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      professionalSummary: formData.professionalSummary,
      skills: formData.skills,
      languages: formData.languages,
      educations: formData.educations,
      experiences: formData.experiences,
    };

    // Chamar a mutação
    updateProfileMutation({
      candidateId: data.id,
      payload,
      imageFile,
      cvFile,
    });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      educations: [
        ...formData.educations,
        {
          degree: "",
          course: "",
          location: "",
          institution: "",
          description: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
  };

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        {
          company: "",
          position: "",
          location: "",
          duties: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleCvChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index][field] = value;
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducations = [...formData.educations];
    updatedEducations[index][field] = value;
    setFormData({ ...formData, educations: updatedEducations });
  };

  const handleRemoveExperience = (index) => {
    if (formData.experiences.length > 1) {
      // Garante que pelo menos uma experiência permaneça
      const filteredExperiences = formData.experiences.filter(
        (_, i) => i !== index
      );
      setFormData({ ...formData, experiences: filteredExperiences });
    }
  };

  const handleRemoveEducation = (index) => {
    if (formData.educations.length > 1) {
      // Garante que pelo menos uma educação permaneça
      const filteredEducations = formData.educations.filter(
        (_, i) => i !== index
      );
      setFormData({ ...formData, educations: filteredEducations });
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Presente";
    const date = new Date(dateString);
    return date.getFullYear();
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Col lg={8}>
        <Card className="profile-content-page mt-4 mt-lg-0">
          <Nav
            className="profile-content-nav nav-pills border-bottom mb-4"
            id="pills-tab"
            role="tablist"
          >
            <NavItem role="presentation">
              <NavLink
                to="#"
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  tabChange("1");
                }}
                type="button"
              >
                {language === "pt" ? "Visão geral" : "Overview"}
              </NavLink>
            </NavItem>
            <NavItem role="presentation">
              <NavLink
                to="#"
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  tabChange("2");
                }}
                type="button"
              >
                {language === "pt" ? "Editar Perfil" : "Edit Profile"}
              </NavLink>
            </NavItem>
          </Nav>

          <CardBody className="p-4">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                {data.professionalSummary && (
                  <div>
                    <h5 className="fs-18 fw-bold">
                      {language === "pt" ? "Sobre Mim" : "About Me"}
                    </h5>
                    <p className="text-muted mt-4">
                      {data.professionalSummary}
                    </p>
                  </div>
                )}

                <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">
                    {language === "pt" ? "Educação" : "Education"}
                  </h6>
                  {data.educations?.map((education, index) => (
                    <div
                      className="candidate-education-content mt-4 d-flex"
                      key={index}
                    >
                      <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                        {education.course?.charAt(0).toUpperCase()}
                      </div>

                      <div className="ms-4">
                        <h6 className="fs-16 mb-1">
                          {education.course} - {education.institution}
                        </h6>

                        <p className="mb-2 text-muted">
                          {education.location} •{" "}
                          {formatDate(education.startDate)} -{" "}
                          {formatDate(education.endDate)}
                        </p>

                        {education.description && (
                          <p className="text-muted">{education.description}</p>
                        )}

                        {education.degree &&
                          education.degree !== education.course && (
                            <p className="text-muted small mt-1">
                              <strong>
                                {language === "pt" ? "Grau" : "Degree"}:
                              </strong>{" "}
                              {education.degree}
                            </p>
                          )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">
                    {language === "pt"
                      ? "Experiência Profissional"
                      : "Profissional Experience"}
                  </h6>
                  {data.experiences?.map((experience, index) => (
                    <div
                      className="candidate-education-content mt-4 d-flex"
                      key={index}
                    >
                      <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                        {experience.position?.charAt(0).toUpperCase()}
                      </div>
                      <div className="ms-4">
                        <h6 className="fs-16 mb-1">{experience.position}</h6>
                        <p className="mb-2 text-muted">
                          {experience.company} • {experience.location} • (
                          {new Date(experience.startDate).getFullYear()} -{" "}
                          {experience.endDate
                            ? new Date(experience.endDate).getFullYear()
                            : "Atual"}
                          )
                        </p>
                        {experience.duties && (
                          <div className="text-muted">
                            <h6 className="fs-14 mb-1">
                              {language === "pt"
                                ? "Principais atividades:"
                                : "Main duties"}
                            </h6>
                            <p className="mb-0">{experience.duties}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">
                    {language === "pt"
                      ? "Cursos e Certificações"
                      : "Courses and Certifications"}
                  </h6>
                  {data.trainings?.map((training, index) => (
                    <div
                      className="candidate-education-content mt-4 d-flex"
                      key={index}
                    >
                      <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                        {training.course?.charAt(0).toUpperCase()}
                      </div>
                      <div className="ms-4">
                        <h6 className="fs-16 mb-1">{training.course}</h6>
                        <p className="mb-2 text-muted">
                          {training.institution} • {training.location} • (
                          {new Date(training.startDate).toLocaleDateString(
                            "pt-BR",
                            { month: "short", year: "numeric" }
                          )}{" "}
                          -{" "}
                          {training.endDate
                            ? new Date(training.endDate).toLocaleDateString(
                                "pt-BR",
                                { month: "short", year: "numeric" }
                              )
                            : language === "pt"
                            ? "Atual"
                            : "Current"}
                          )
                        </p>
                        {training.description && (
                          <p className="text-muted mb-0">
                            <strong>
                              {language === "pt" ? "Conteúdo" : "Content"}:
                            </strong>{" "}
                            {training.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <h5 className="fs-18 fw-bold">
                    {language === "pt" ? "Habilidades" : "Skills"}
                  </h5>
                  <ul className="job-detail-list list-unstyled mb-0 text-muted">
                    {data.skills?.map((skill, index) => (
                      <li key={index}>
                        <i className="uil uil-circle"></i> {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h5 className="fs-18 fw-bold">
                    {language === "pt" ? "Idiomas falados" : "Spoken languages"}
                  </h5>
                </div>

                <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
                  {data.languages?.map((language, index) => (
                    <span
                      className="badge fs-13 bg-success-subtle text-success mt-2"
                      key={index}
                    >
                      {language.name}
                    </span>
                  ))}
                </div>
              </TabPane>

              <TabPane tabId="2">
                <Form onSubmit={handleSubmit}>
                  <div>
                    <h5 className="fs-17 fw-semibold mb-3 mb-0">
                      {language === "pt" ? "Minha Conta" : "My Account"}
                    </h5>
                    <div className="text-center">
                      <div className="mb-4 profile-user position-relative">
                        <img
                          src={imagePreview}
                          className="rounded-circle img-thumbnail profile-img"
                          id="profile-img"
                          alt={
                            language === "pt"
                              ? "Imagem do perfil"
                              : "Profile image"
                          }
                          style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "cover",
                          }}
                        />

                        <div className="p-0 rounded-circle profile-photo-edit">
                          <Input
                            id="profile-img-file-input"
                            type="file"
                            className="profile-img-file-input d-none"
                            onChange={handleImageChange}
                            accept="image/*"
                          />
                          <Label
                            htmlFor="profile-img-file-input"
                            className="profile-photo-edit avatar-xs cursor-pointer"
                            title={
                              language === "pt"
                                ? "Alterar imagem"
                                : "Change image"
                            }
                          >
                            <i className="uil uil-edit"></i>
                          </Label>
                        </div>

                        {imageFile && (
                          <button
                            type="button"
                            className="btn btn-sm btn-danger position-absolute top-0 start-0 rounded-circle"
                            onClick={() => {
                              setImageFile(null);
                              setImagePreview(
                                data?.user?.imagePath
                                  ? `${API_ENDPOINTS.API_BASE_URL}${data.user.imagePath}`
                                  : userImage2
                              );
                            }}
                            style={{
                              width: "24px",
                              height: "24px",
                              padding: "0",
                            }}
                            title={
                              language === "pt"
                                ? "Remover imagem"
                                : "Remove image"
                            }
                          >
                            ×
                          </button>
                        )}
                      </div>
                    </div>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <label htmlFor="firstName" className="form-label">
                            {language === "pt" ? "Nome" : "Name"}
                          </label>
                          <Input
                            type="text"
                            className="form-control"
                            id="firstName"
                            defaultValue={formData.firstName || ""}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="lastName" className="form-label">
                            {language === "pt" ? "Sobrenome" : "Last Name"}
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="lastName"
                            defaultValue={data.user.lastName || ""}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">
                            Email
                          </Label>
                          <Input
                            type="email"
                            className="form-control"
                            id="email"
                            defaultValue={data.user.email || ""}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="phone" className="form-label">
                            {language === "pt" ? "Telefone" : "Phone"}
                          </Label>
                          <Input
                            type="tel"
                            className="form-control"
                            id="phone"
                            defaultValue={data.phone || ""}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">
                      {language === "pt"
                        ? "Perfil Profissional"
                        : "Professional Profile"}
                    </h5>
                    <Row>
                      <Col lg={12}>
                        <div className="mb-3">
                          <Label
                            htmlFor="professionalSummary"
                            className="form-label"
                          >
                            {language === "pt"
                              ? "Resumo Profissional"
                              : "Professional Summary"}
                          </Label>
                          <textarea
                            className="form-control"
                            rows="5"
                            id="professionalSummary"
                            defaultValue={data.professionalSummary || ""}
                          />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="mb-3">
                          <Label htmlFor="attachmentscv" className="form-label">
                            {language === "pt" ? "Anexar CV" : "Attach CV"}
                          </Label>
                          <Input
                            className="form-control"
                            type="file"
                            id="attachmentscv"
                            onChange={handleCvChange}
                            accept=".pdf,.doc,.docx"
                          />
                          {cvFile && (
                            <div className="mt-2 small text-primary">
                              {language === "pt"
                                ? "Arquivo selecionado:"
                                : "Selected file:"}{" "}
                              {cvFile.name}
                            </div>
                          )}
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <label htmlFor="country" className="form-label">
                            {language === "pt" ? "Localização" : "Location"}
                          </label>
                          <Input
                            type="text"
                            className="form-control"
                            id="country"
                            defaultValue={data.country || ""}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">
                      {language === "pt" ? "Educação" : "Education"}
                    </h5>
                    {formData.educations?.map((education, index) => (
                      <div
                        key={index}
                        className="mb-4 p-3 border rounded position-relative"
                      >
                        {/* Botão para remover (exceto o primeiro item) */}
                        {index > 0 && (
                          <button
                            type="button"
                            className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2 cursor-pointer"
                            onClick={() => handleRemoveEducation(index)}
                          >
                            ×
                          </button>
                        )}

                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`education-course-${index}`}
                                className="form-label"
                              >
                                {language === "pt" ? "Curso" : "Course"}
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id={`education-course-${index}`}
                                value={education.course || ""}
                                onChange={(e) =>
                                  handleEducationChange(
                                    index,
                                    "course",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`education-institution-${index}`}
                                className="form-label"
                              >
                                {language === "pt"
                                  ? "Instituição"
                                  : "Institution"}
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id={`education-institution-${index}`}
                                value={education.institution || ""}
                                onChange={(e) =>
                                  handleEducationChange(
                                    index,
                                    "institution",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`education-degree-${index}`}
                                className="form-label"
                              >
                                {language === "pt" ? "Grau" : "Degree"}
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id={`education-degree-${index}`}
                                value={education.degree || ""}
                                onChange={(e) =>
                                  handleEducationChange(
                                    index,
                                    "degree",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`education-location-${index}`}
                                className="form-label"
                              >
                                {language === "pt" ? "Localização" : "Location"}
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id={`education-location-${index}`}
                                value={education.location || ""}
                                onChange={(e) =>
                                  handleEducationChange(
                                    index,
                                    "location",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`education-startDate-${index}`}
                                className="form-label"
                              >
                                {language === "pt"
                                  ? "Data de Início"
                                  : "Start Date"}
                              </Label>
                              <Input
                                type="datetime-local"
                                className="form-control"
                                id={`education-startDate-${index}`}
                                value={education.startDate || ""}
                                onChange={(e) =>
                                  handleEducationChange(
                                    index,
                                    "startDate",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`education-endDate-${index}`}
                                className="form-label"
                              >
                                {language === "pt"
                                  ? "Data de Término"
                                  : "End Date"}
                              </Label>
                              <Input
                                type="datetime-local"
                                className="form-control"
                                id={`education-endDate-${index}`}
                                value={education.endDate || ""}
                                onChange={(e) =>
                                  handleEducationChange(
                                    index,
                                    "endDate",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </Col>
                          <Col lg={12}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`education-description-${index}`}
                                className="form-label"
                              >
                                {language === "pt"
                                  ? "Descrição"
                                  : "Description"}
                              </Label>
                              <textarea
                                className="form-control"
                                id={`education-description-${index}`}
                                value={education.description || ""}
                                onChange={(e) =>
                                  handleEducationChange(
                                    index,
                                    "description",
                                    e.target.value
                                  )
                                }
                                rows="3"
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={handleAddEducation}
                    >
                      +{" "}
                      {language === "pt"
                        ? "Adicionar Educação"
                        : "Add Education"}
                    </button>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">
                      {language === "pt"
                        ? "Experiência Profissional"
                        : "Professional Experience"}
                    </h5>
                    {formData.experiences?.map((experience, index) => (
                      <div
                        key={index}
                        className="mb-4 p-3 border rounded position-relative"
                      >
                        {index > 0 && (
                          <button
                            type="button"
                            className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2 cursor-pointer"
                            onClick={() => handleRemoveExperience(index)}
                          >
                            ×
                          </button>
                        )}

                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`experience-position-${index}`}
                                className="form-label"
                              >
                                {language === "pt" ? "Cargo" : "Position"}
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id={`experience-position-${index}`}
                                defaultValue={experience.position || ""}
                                onChange={(e) =>
                                  handleExperienceChange(
                                    index,
                                    "position",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`experience-company-${index}`}
                                className="form-label"
                              >
                                {language === "pt" ? "Empresa" : "Company"}
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id={`experience-company-${index}`}
                                defaultValue={experience.company || ""}
                                onChange={(e) =>
                                  handleExperienceChange(
                                    index,
                                    "company",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`experience-location-${index}`}
                                className="form-label"
                              >
                                {language === "pt" ? "Localização" : "Location"}
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id={`experience-location-${index}`}
                                defaultValue={experience.location || ""}
                                onChange={(e) =>
                                  handleExperienceChange(
                                    index,
                                    "location",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`experience-startDate-${index}`}
                                className="form-label"
                              >
                                {language === "pt"
                                  ? "Data de Início"
                                  : "Start Date"}
                              </Label>
                              <Input
                                type="datetime-local"
                                className="form-control"
                                id={`experience-startDate-${index}`}
                                defaultValue={experience.startDate || ""}
                                onChange={(e) =>
                                  handleExperienceChange(
                                    index,
                                    "startDate",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`experience-endDate-${index}`}
                                className="form-label"
                              >
                                {language === "pt"
                                  ? "Data de Término"
                                  : "End Date"}
                              </Label>
                              <Input
                                type="datetime-local"
                                className="form-control"
                                id={`experience-endDate-${index}`}
                                defaultValue={experience.endDate || ""}
                                onChange={(e) =>
                                  handleExperienceChange(
                                    index,
                                    "endDate",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </Col>
                          <Col lg={12}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`experience-duties-${index}`}
                                className="form-label"
                              >
                                {language === "pt" ? "Atividades" : "Duties"}
                              </Label>
                              <textarea
                                className="form-control"
                                id={`experience-duties-${index}`}
                                defaultValue={experience.duties || ""}
                                onChange={(e) =>
                                  handleExperienceChange(
                                    index,
                                    "duties",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={handleAddExperience}
                    >
                      +{" "}
                      {language === "pt"
                        ? "Adicionar Experiência"
                        : "Add Experience"}
                    </button>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">
                      {language === "pt" ? "Habilidades" : "Skills"}
                    </h5>
                    <div className="mb-3">
                      <Label htmlFor="skills" className="form-label">
                        {language === "pt"
                          ? "Habilidades Profissionais (separadas por vírgula)"
                          : "Professional Skills (comma separated)"}
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="skills"
                        defaultValue={
                          data.skills?.map((skill) => skill.name).join(", ") ||
                          ""
                        }
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">
                      {language === "pt" ? "Idiomas" : "Languages"}
                    </h5>
                    <div className="mb-3">
                      <Label htmlFor="languages" className="form-label">
                        {language === "pt"
                          ? "Idiomas que você fala (separados por vírgula)"
                          : "Languages you speak (comma separated)"}
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="languages"
                        defaultValue={
                          data.languages?.map((lang) => lang.name).join(", ") ||
                          ""
                        }
                      />
                    </div>
                  </div>

                  <div className="mt-4 text-end">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          {language === "pt" ? "Atualizando..." : "Updating..."}
                        </>
                      ) : language === "pt" ? (
                        "Atualizar Perfil"
                      ) : (
                        "Update Profile"
                      )}
                    </button>
                  </div>
                </Form>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default RightSideContent;
