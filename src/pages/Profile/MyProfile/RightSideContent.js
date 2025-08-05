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
import { QueryClient, useMutation, useQuery } from "react-query";
import { getAllJobCategories } from "../../../services/jobCategorieService";

const RightSideContent = ({ data }) => {
  const countries = [
    { value: "0", label: "Afghanistan" },
    { value: "1", label: "Åland Islands" },
    { value: "2", label: "Albania" },
    { value: "3", label: "Algeria" },
    { value: "4", label: "American Samoa" },
    { value: "5", label: "Andorra" },
    { value: "6", label: "Angola" },
    { value: "7", label: "Anguilla" },
    { value: "8", label: "Antarctica" },
    { value: "9", label: "Antigua and Barbuda" },
    { value: "10", label: "Argentina" },
    { value: "11", label: "Armenia" },
    { value: "12", label: "Aruba" },
    { value: "13", label: "Australia" },
    { value: "14", label: "Austria" },
    { value: "15", label: "Azerbaijan" },
    { value: "16", label: "Bahamas" },
    { value: "17", label: "Bahrain" },
    { value: "18", label: "Bangladesh" },
    { value: "19", label: "Barbados" },
    { value: "20", label: "Belarus" },
    { value: "21", label: "Belgium" },
    { value: "22", label: "Belize" },
    { value: "23", label: "Benin" },
    { value: "24", label: "Bermuda" },
    { value: "25", label: "Bhutan" },
    { value: "26", label: "Bolivia" },
    { value: "27", label: "Bosnia and Herzegovina" },
    { value: "28", label: "Botswana" },
    { value: "29", label: "Bouvet Island" },
    { value: "30", label: "Brazil" },
    { value: "31", label: "British Indian Ocean Territory" },
    { value: "32", label: "Brunei" },
    { value: "33", label: "Bulgaria" },
    { value: "34", label: "Burkina Faso" },
    { value: "35", label: "Burundi" },
    { value: "36", label: "Cambodia" },
    { value: "37", label: "Cameroon" },
    { value: "38", label: "Canada" },
    { value: "39", label: "Cape Verde" },
    { value: "40", label: "Cayman Islands" },
    { value: "41", label: "Central African Republic" },
    { value: "42", label: "Chad" },
    { value: "43", label: "Chile" },
    { value: "44", label: "China" },
    { value: "45", label: "Christmas Island" },
    { value: "46", label: "Cocos (Keeling) Islands" },
    { value: "47", label: "Colombia" },
    { value: "48", label: "Comoros" },
    { value: "49", label: "Congo" },
    { value: "50", label: "Democratic Republic of the Congo" },
    { value: "51", label: "Cook Islands" },
    { value: "52", label: "Costa Rica" },
    { value: "53", label: "Ivory Coast" },
    { value: "54", label: "Croatia" },
    { value: "55", label: "Cuba" },
    { value: "56", label: "Cyprus" },
    { value: "57", label: "Czech Republic" },
    { value: "58", label: "Denmark" },
    { value: "59", label: "Djibouti" },
    { value: "60", label: "Dominica" },
    { value: "61", label: "Dominican Republic" },
    { value: "62", label: "Ecuador" },
    { value: "63", label: "Egypt" },
    { value: "64", label: "El Salvador" },
    { value: "65", label: "Equatorial Guinea" },
    { value: "66", label: "Eritrea" },
    { value: "67", label: "Estonia" },
    { value: "68", label: "Ethiopia" },
    { value: "69", label: "Falkland Islands" },
    { value: "70", label: "Faroe Islands" },
    { value: "71", label: "Fiji" },
    { value: "72", label: "Finland" },
    { value: "73", label: "France" },
    { value: "74", label: "French Guiana" },
    { value: "75", label: "French Polynesia" },
    { value: "76", label: "French Southern Territories" },
    { value: "77", label: "Gabon" },
    { value: "78", label: "Gambia" },
    { value: "79", label: "Georgia" },
    { value: "80", label: "Germany" },
    { value: "81", label: "Ghana" },
    { value: "82", label: "Gibraltar" },
    { value: "83", label: "Greece" },
    { value: "84", label: "Greenland" },
    { value: "85", label: "Grenada" },
    { value: "86", label: "Guadeloupe" },
    { value: "87", label: "Guam" },
    { value: "88", label: "Guatemala" },
    { value: "89", label: "Guernsey" },
    { value: "90", label: "Guinea" },
    { value: "91", label: "Guinea-Bissau" },
    { value: "92", label: "Guyana" },
    { value: "93", label: "Haiti" },
    { value: "94", label: "Heard Island and McDonald Islands" },
    { value: "95", label: "Vatican City" },
    { value: "96", label: "Honduras" },
    { value: "97", label: "Hong Kong" },
    { value: "98", label: "Hungary" },
    { value: "99", label: "Iceland" },
    { value: "100", label: "India" },
    { value: "1.1", label: "Indonesia" },
    { value: "1.2", label: "Iran" },
    { value: "1.3", label: "Iraq" },
    { value: "1.4", label: "Ireland" },
    { value: "1.5", label: "Isle of Man" },
    { value: "1.6", label: "Israel" },
    { value: "1.7", label: "Italy" },
    { value: "1.8", label: "Jamaica" },
    { value: "1.9", label: "Japan" },
    { value: "2.0", label: "Jersey" },
    { value: "2.1", label: "Jordan" },
    { value: "2.2", label: "Kazakhstan" },
    { value: "2.3", label: "Kenya" },
    { value: "2.4", label: "Kiribati" },
    { value: "2.5", label: "North Korea" },
    { value: "2.6", label: "South Korea" },
    { value: "2.7", label: "Kuwait" },
    { value: "2.8", label: "Kyrgyzstan" },
    { value: "2.9", label: "Laos" },
    { value: "3.0", label: "Latvia" },
    { value: "3.1", label: "Lebanon" },
    { value: "3.2", label: "Lesotho" },
    { value: "3.3", label: "Liberia" },
    { value: "3.4", label: "Libya" },
    { value: "3.5", label: "Liechtenstein" },
    { value: "3.6", label: "Lithuania" },
    { value: "3.7", label: "Luxembourg" },
    { value: "3.8", label: "Macau" },
    { value: "3.9", label: "North Macedonia" },
    { value: "4.0", label: "Madagascar" },
    { value: "4.1", label: "Malawi" },
    { value: "4.2", label: "Malaysia" },
    { value: "4.3", label: "Maldives" },
    { value: "4.4", label: "Mali" },
    { value: "4.5", label: "Malta" },
    { value: "4.6", label: "Marshall Islands" },
    { value: "4.7", label: "Martinique" },
    { value: "4.8", label: "Mauritania" },
    { value: "4.9", label: "Mauritius" },
    { value: "5.0", label: "Mayotte" },
    { value: "5.1", label: "Mexico" },
    { value: "5.2", label: "Micronesia" },
    { value: "5.3", label: "Moldova" },
    { value: "5.4", label: "Monaco" },
    { value: "5.5", label: "Mongolia" },
    { value: "5.6", label: "Montenegro" },
    { value: "5.7", label: "Montserrat" },
    { value: "5.8", label: "Morocco" },
    { value: "5.9", label: "Mozambique" },
    { value: "6.0", label: "Myanmar (Burma)" },
    { value: "6.1", label: "Namibia" },
    { value: "6.2", label: "Nauru" },
    { value: "6.3", label: "Nepal" },
    { value: "6.4", label: "Netherlands" },
    { value: "6.5", label: "New Caledonia" },
    { value: "6.6", label: "New Zealand" },
    { value: "6.7", label: "Nicaragua" },
    { value: "6.8", label: "Niger" },
    { value: "6.9", label: "Nigeria" },
    { value: "7.0", label: "Niue" },
    { value: "7.1", label: "Norfolk Island" },
    { value: "7.2", label: "Northern Mariana Islands" },
    { value: "7.3", label: "Norway" },
    { value: "7.4", label: "Oman" },
    { value: "7.5", label: "Pakistan" },
    { value: "7.6", label: "Palau" },
    { value: "7.7", label: "Palestinian Territories" },
    { value: "7.8", label: "Panama" },
    { value: "7.9", label: "Papua New Guinea" },
    { value: "8.0", label: "Paraguay" },
    { value: "8.1", label: "Peru" },
    { value: "8.2", label: "Philippines" },
    { value: "8.3", label: "Pitcairn Islands" },
    { value: "8.4", label: "Poland" },
    { value: "8.5", label: "Portugal" },
    { value: "8.6", label: "Puerto Rico" },
    { value: "8.7", label: "Qatar" },
    { value: "8.8", label: "Réunion" },
    { value: "8.9", label: "Romania" },
    { value: "9.0", label: "Russia" },
    { value: "9.1", label: "Rwanda" },
    { value: "9.2", label: "Saint Barthélemy" },
    { value: "9.3", label: "Saint Helena, Ascension and Tristan da Cunha" },
    { value: "9.4", label: "Saint Kitts and Nevis" },
    { value: "9.5", label: "Saint Lucia" },
    { value: "9.6", label: "Saint Martin (French part)" },
    { value: "9.7", label: "Saint Pierre and Miquelon" },
    { value: "9.8", label: "Saint Vincent and the Grenadines" },
    { value: "9.9", label: "Samoa" },
    { value: "10.0", label: "San Marino" },
    { value: "10.1", label: "São Tomé and Príncipe" },
    { value: "10.2", label: "Saudi Arabia" },
    { value: "10.3", label: "Senegal" },
    { value: "10.4", label: "Serbia" },
    { value: "10.5", label: "Seychelles" },
    { value: "10.6", label: "Sierra Leone" },
    { value: "10.7", label: "Singapore" },
    { value: "10.8", label: "Slovakia" },
    { value: "10.9", label: "Slovenia" },
    { value: "11.0", label: "Solomon Islands" },
    { value: "11.1", label: "Somalia" },
    { value: "11.2", label: "South Africa" },
    { value: "11.3", label: "South Georgia and the South Sandwich Islands" },
    { value: "11.4", label: "South Sudan" },
    { value: "11.5", label: "Spain" },
    { value: "11.6", label: "Sri Lanka" },
    { value: "11.7", label: "Sudan" },
    { value: "11.8", label: "Suriname" },
    { value: "11.9", label: "Svalbard and Jan Mayen" },
    { value: "12.0", label: "Eswatini (Swaziland)" },
    { value: "12.1", label: "Sweden" },
    { value: "12.2", label: "Switzerland" },
    { value: "12.3", label: "Syria" },
    { value: "12.4", label: "Taiwan" },
    { value: "12.5", label: "Tajikistan" },
    { value: "12.6", label: "Tanzania" },
    { value: "12.7", label: "Thailand" },
    { value: "12.8", label: "Timor-Leste" },
    { value: "12.9", label: "Togo" },
    { value: "13.0", label: "Tokelau" },
    { value: "13.1", label: "Tonga" },
    { value: "13.2", label: "Trinidad and Tobago" },
    { value: "13.3", label: "Tunisia" },
    { value: "13.4", label: "Turkey" },
    { value: "13.5", label: "Turkmenistan" },
    { value: "13.6", label: "Turks and Caicos Islands" },
    { value: "13.7", label: "Tuvalu" },
    { value: "13.8", label: "Uganda" },
    { value: "13.9", label: "Ukraine" },
    { value: "14.0", label: "United Arab Emirates" },
    { value: "14.1", label: "United Kingdom" },
    { value: "14.2", label: "United States" },
    { value: "14.3", label: "Uruguay" },
    { value: "14.4", label: "Uzbekistan" },
    { value: "14.5", label: "Vanuatu" },
    { value: "14.6", label: "Venezuela" },
    { value: "14.7", label: "Vietnam" },
    { value: "14.8", label: "Wallis and Futuna" },
    { value: "14.9", label: "Western Sahara" },
    { value: "15.0", label: "Yemen" },
    { value: "15.1", label: "Zambia" },
    { value: "15.2", label: "Zimbabwe" },
  ];
  const genders = [
    {
      value: "MALE",
      label: "Male",
      labelPt: "Masculino",
    },
    {
      value: "FEMALE",
      label: "Female",
      labelPt: "Feminino",
    },
  ];

  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("1");
  const [skillsInput, setSkillsInput] = useState("");
  const [languagesInput, setLanguagesInput] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    gender: "",
    birthDate: "",
    linkedin: "",
    address: "",
    yearsOfExperience: 0,
    desiredJobCategory: "",
    professionalSummary: "",
    skills: [],
    languages: [],
    educations: [],
    experiences: [],
  });
  const [cvFile, setCvFile] = useState(null);

  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(savedTab);
    }

    if (data) {
      setFormData({
        firstName: data.user?.firstName || "",
        lastName: data.user?.lastName || "",
        email: data.user?.email || "",
        phone: data.phone || "",
        linkedin: data.linkedin || "",
        gender: data.user?.gender || "",
        birthDate: data.birthDate || "",
        address: data.address || "",
        yearsOfExperience: data.yearsOfExperience || 0,
        desiredJobCategory: data.desiredJobCategory || "",
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
        trainings: data.trainings?.length
          ? [...data.trainings]
          : [
              {
                course: "",
                institution: "",
                description: "",
                location: "",
                startDate: "",
                endDate: "",
              },
            ],
      });
    }
  }, [data]);

  const { mutate: updateProfileMutation, isLoading } = useMutation(
    ({ candidateId, payload, cvFile }) =>
      updateProfile(candidateId, payload, cvFile),
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
    }
  );

  const { data: categoriesData, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllJobCategories({}),
    keepPreviousData: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const skillsArray = convertStringToArray(skillsInput);
    const languagesArray = convertStringToArray(languagesInput);

    // Preparar os dados para envio
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      gender: formData.gender,
      yearsOfExperience: formData.yearsOfExperience,
      birthDate: formData.birthDate,
      professionalSummary: formData.professionalSummary,
      linkedin: formData.linkedin,
      address: formData.address,
      desiredJobCategory: formData.desiredJobCategory,
      nationality: formData.nationality,
      skills: skillsArray,
      languages: languagesArray,
      educations: formData.educations,
      experiences: formData.experiences,
      trainings: formData.trainings,
    };

    // Chamar a mutação
    updateProfileMutation({
      candidateId: data.id,
      payload,
      cvFile,
    });
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    localStorage.setItem("activeTab", tabId);
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

  const handleAddTraining = () => {
    setFormData({
      ...formData,
      trainings: [
        ...formData.trainings,
        {
          course: "",
          institution: "",
          description: "",
          location: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
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

  const handleTrainingChange = (index, field, value) => {
    const updatedTrainings = [...formData.trainings];
    updatedTrainings[index][field] = value;
    setFormData({ ...formData, trainings: updatedTrainings });
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

  const handleRemoveTraining = (index) => {
    if (formData.trainings.length > 1) {
      // Garante que pelo menos um treinamento permaneça
      const filteredTrainings = formData.trainings.filter(
        (_, i) => i !== index
      );
      setFormData({ ...formData, trainings: filteredTrainings });
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Presente";
    const date = new Date(dateString);
    return date.getFullYear();
  };

  const convertStringToArray = (itemString) => {
    return itemString
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "")
      .map((item) => ({
        name: item,
      }));
  };

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
                onClick={() => handleTabChange("1")}
                type="button"
              >
                {language === "pt" ? "Visão geral" : "Overview"}
              </NavLink>
            </NavItem>
            <NavItem role="presentation">
              <NavLink
                to="#"
                className={classnames({ active: activeTab === "2" })}
                onClick={() => handleTabChange("2")}
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
                      {/* <div className="mb-4 profile-user position-relative">
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
                      </div> */}
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
                            value={formData.firstName || ""}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                firstName: e.target.value,
                              })
                            }
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
                            value={formData.lastName || ""}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                lastName: e.target.value,
                              })
                            }
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
                            defaultValue={formData.phone || ""}
                            value={formData.phone || ""}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="birthDate" className="form-label">
                            {language === "pt"
                              ? "Data de Nascimento"
                              : "Birthdate"}
                          </Label>
                          <Input
                            type="date"
                            className="form-control"
                            id="birthDate"
                            defaultValue={formData.birthDate || ""}
                            value={formData.birthDate || ""}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                birthDate: e.target.value,
                              })
                            }
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="address" className="form-label">
                            {language === "pt" ? "Endereço" : "Address"}
                          </Label>
                          <Input
                            type="tel"
                            className="form-control"
                            id="address"
                            defaultValue={formData.address || ""}
                            value={formData.address || ""}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                address: e.target.value,
                              })
                            }
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label
                            htmlFor="yearsOfExperience"
                            className="form-label"
                          >
                            {language === "pt"
                              ? "Anos de Experiência"
                              : "Years of Experience"}
                          </Label>
                          <Input
                            type="number"
                            className="form-control"
                            id="yearsOfExperience"
                            defaultValue={formData.yearsOfExperience || ""}
                            value={formData.yearsOfExperience || ""}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                yearsOfExperience: e.target.value,
                              })
                            }
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <label htmlFor="country" className="form-label">
                            {language === "pt" ? "Localização" : "Location"}
                          </label>
                          <Input
                            type="select"
                            className="form-control"
                            id="country"
                            defaultValue={data.country || ""}
                            value={formData.country || ""}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                country: e.target.value,
                              })
                            }
                          >
                            <option value="">
                              {language === "pt"
                                ? "Selecione um país"
                                : "Select a country"}
                            </option>
                            {countries.map((country) => (
                              <option key={country.value} value={country.label}>
                                {country.label}
                              </option>
                            ))}
                          </Input>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <label htmlFor="gender" className="form-label">
                            {language === "pt" ? "Gênero" : "Gender"}
                          </label>
                          <Input
                            type="select"
                            className="form-control"
                            id="gender"
                            value={formData.gender || ""}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                gender: e.target.value,
                              })
                            }
                            aria-label={
                              language === "pt"
                                ? "Selecione um gênero"
                                : "Select gender"
                            }
                          >
                            <option value="">
                              {language === "pt"
                                ? "Selecione um gênero"
                                : "Select a gender"}
                            </option>
                            {genders.map((gender) => (
                              <option key={gender.value} value={gender.value}>
                                {language === "pt"
                                  ? gender.value === "MALE"
                                    ? "Masculino"
                                    : "Feminino"
                                  : gender.label}
                              </option>
                            ))}
                          </Input>
                        </div>
                      </Col>
                    </Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          htmlFor="desiredJobCategory"
                          className="form-label"
                        >
                          {language === "pt"
                            ? "Categoria do Trabalho Desejado"
                            : "Desired Job Category"}
                        </label>

                        {isLoading ? (
                          <div className="text-muted">
                            {language === "pt"
                              ? "Carregando categorias..."
                              : "Loading categories..."}
                          </div>
                        ) : isError ? (
                          <div className="text-danger">
                            {language === "pt"
                              ? "Erro ao carregar categorias"
                              : "Error loading categories"}
                          </div>
                        ) : (
                          <Input
                            type="select"
                            className="form-control"
                            id="desiredJobCategory"
                            value={formData.desiredJobCategory || ""}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                desiredJobCategory: e.target.value,
                              })
                            }
                          >
                            <option value="">
                              {language === "pt"
                                ? "Selecione uma categoria"
                                : "Select a category"}
                            </option>
                            {categoriesData?.content?.map((category) => (
                              <option key={category.code} value={category.name}>
                                {category.name}
                              </option>
                            ))}
                          </Input>
                        )}
                      </div>
                    </Col>
                    <Col>
                      <div className="mb-3">
                        <Label htmlFor="linkedin" className="form-label">
                          LinkedIn
                        </Label>
                        <div className="input-group">
                          <span
                            className="input-group-text"
                            id="linkedin-prefix"
                          >
                            https://www.linkedin.com/in/
                          </span>
                          <Input
                            type="text"
                            className="form-control"
                            id="linkedin"
                            placeholder="seu-username"
                            value={
                              formData.linkedin?.replace(
                                "https://www.linkedin.com/in/",
                                ""
                              ) || ""
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                linkedin: `https://www.linkedin.com/in/${e.target.value.replace(
                                  /^https:\/\/www\.linkedin\.com\/in\//,
                                  ""
                                )}`,
                              })
                            }
                          />
                        </div>
                        <small className="text-muted">
                          {language === "pt"
                            ? 'Apenas o nome de usuário após "linkedin.com/in/".'
                            : 'Only the username after "linkedin.com/in/".'}
                        </small>
                      </div>
                    </Col>
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
                            value={formData.professionalSummary || ""}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                professionalSummary: e.target.value,
                              })
                            }
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
                                type="date"
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
                                type="date"
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
                                type="date"
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
                                type="date"
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
                      {language === "pt"
                        ? "Cursos e Certificações"
                        : "Courses and Certifications"}
                    </h5>
                    {formData.trainings?.map((training, index) => (
                      <div
                        key={index}
                        className="mb-4 p-3 border rounded position-relative"
                      >
                        {index > 0 && (
                          <button
                            type="button"
                            className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2 cursor-pointer"
                            onClick={() => handleRemoveTraining(index)}
                          >
                            ×
                          </button>
                        )}

                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`training-institution-${index}`}
                                className="form-label"
                              >
                                {language === "pt"
                                  ? "Instituição"
                                  : "Institution"}
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id={`training-institution-${index}`}
                                defaultValue={training.institution || ""}
                                onChange={(e) =>
                                  handleTrainingChange(
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
                                htmlFor={`training-course-${index}`}
                                className="form-label"
                              >
                                {language === "pt" ? "Curso" : "Course"}
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id={`training-course-${index}`}
                                defaultValue={training.course || ""}
                                onChange={(e) =>
                                  handleTrainingChange(
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
                                htmlFor={`training-location-${index}`}
                                className="form-label"
                              >
                                {language === "pt" ? "Localização" : "Location"}
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id={`training-location-${index}`}
                                defaultValue={training.location || ""}
                                onChange={(e) =>
                                  handleTrainingChange(
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
                                htmlFor={`training-startDate-${index}`}
                                className="form-label"
                              >
                                {language === "pt"
                                  ? "Data de Início"
                                  : "Start Date"}
                              </Label>
                              <Input
                                type="date"
                                className="form-control"
                                id={`training-startDate-${index}`}
                                defaultValue={training.startDate || ""}
                                onChange={(e) =>
                                  handleTrainingChange(
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
                                htmlFor={`training-endDate-${index}`}
                                className="form-label"
                              >
                                {language === "pt"
                                  ? "Data de Término"
                                  : "End Date"}
                              </Label>
                              <Input
                                type="date"
                                className="form-control"
                                id={`training-endDate-${index}`}
                                defaultValue={training.endDate || ""}
                                onChange={(e) =>
                                  handleTrainingChange(
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
                                htmlFor={`training-description-${index}`}
                                className="form-label"
                              >
                                {language === "pt"
                                  ? "Descrição"
                                  : "Description"}
                              </Label>
                              <textarea
                                className="form-control"
                                id={`training-description-${index}`}
                                defaultValue={training.description || ""}
                                onChange={(e) =>
                                  handleTrainingChange(
                                    index,
                                    "description",
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
                      onClick={handleAddTraining}
                    >
                      +{" "}
                      {language === "pt"
                        ? "Adicionar Formação"
                        : "Add Training"}
                    </button>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">
                      {language === "pt" ? "Habilidades" : "Skills"}
                    </h5>
                    <div className="mb-3">
                      <Label htmlFor="skills" className="form-label">
                        {language === "pt"
                          ? "Habilidades Profissionais"
                          : "Professional Skills"}
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="skills"
                        value={skillsInput}
                        onChange={(e) => setSkillsInput(e.target.value)}
                        placeholder={
                          language === "pt"
                            ? "Ex: Spring Boot, Cybersecurity, Node.js"
                            : "Eg: Spring Boot, Cybersecurity, Node.js"
                        }
                        onBlur={() => {
                          setSkillsInput((prev) =>
                            prev
                              .split(",")
                              .map((skill) => skill.trim())
                              .filter((skill) => skill !== "")
                              .join(", ")
                          );
                        }}
                      />
                      <small className="text-muted">
                        {language === "pt"
                          ? "Separe as habilidades por vírgula"
                          : "Separate skills with commas"}
                      </small>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">
                      {language === "pt" ? "Idiomas" : "Languages"}
                    </h5>
                    <div className="mb-3">
                      <Label htmlFor="languages" className="form-label">
                        {language === "pt"
                          ? "Idiomas que você fala"
                          : "Languages you speak"}
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="languages"
                        value={languagesInput}
                        onChange={(e) => setLanguagesInput(e.target.value)}
                        placeholder={
                          language === "pt"
                            ? "Ex: Português, Inglês"
                            : "Ex: English, French"
                        }
                        onBlur={() => {
                          setLanguagesInput((prev) =>
                            prev
                              .split(",")
                              .map((lang) => lang.trim())
                              .filter((lang) => lang !== "")
                              .join(", ")
                          );
                        }}
                      />
                      <small className="text-muted">
                        {language === "pt"
                          ? "Separe os idiomas por vírgula"
                          : "Separate languages with commas"}
                      </small>
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
