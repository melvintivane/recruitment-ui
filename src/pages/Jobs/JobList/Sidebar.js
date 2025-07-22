import React, { useState } from "react";
import { Button, Col, Collapse, Input, Label } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";

const Sidebar = ({ filters, onFilterChange }) => {
  const [toggleSecond, setToggleSecond] = useState(true);
  const [toggleThird, setToggleThird] = useState(true);
  const [toggleFourth, setToggleFourth] = useState(true);
  const { language } = useLanguage();

  const handleExperienceChange = (range) => {
    onFilterChange(
      "experienceRange",
      range === filters.experienceRange ? null : range
    );
  };

  const handleJobTypeChange = (type) => {
    onFilterChange("type", type === filters.type ? null : type);
  };

  const handleTimePeriodChange = (period) => {
    onFilterChange("createdAt", period === filters.createdAt ? null : period);
  };

  return (
    <React.Fragment>
      <Col lg={3}>
        <div className="side-bar mt-5 mt-lg-0">
          <div className="accordion" id="accordionExample">
            {/* Experiência de Trabalho */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="experienceOne">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleSecond(!toggleSecond);
                  }}
                  role="button"
                >
                  {language === "pt"
                    ? "Experiência de trabalho"
                    : "Work experience"}
                </Button>
              </h2>
              <Collapse isOpen={toggleSecond}>
                <div className="accordion-body">
                  <div className="side-title">
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check1"
                        checked={filters.experienceRange === "NO_EXPERIENCE"}
                        onChange={() => handleExperienceChange("NO_EXPERIENCE")}
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="check1"
                      >
                        {language === "pt"
                          ? "Sem experiência"
                          : "No experience"}
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check2"
                        checked={filters.experienceRange === "ENTRY_LEVEL"}
                        onChange={() => handleExperienceChange("ENTRY_LEVEL")}
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="check2"
                      >
                        0-3 {language === "pt" ? "anos" : "years"}
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check3"
                        checked={filters.experienceRange === "MID_LEVEL"}
                        onChange={() => handleExperienceChange("MID_LEVEL")}
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="check3"
                      >
                        3-6 {language === "pt" ? "anos" : "years"}
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check4"
                        checked={filters.experienceRange === "SENIOR"}
                        onChange={() => handleExperienceChange("SENIOR")}
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="check4"
                      >
                        {language === "pt" ? "Mais de" : "More than"} 6{" "}
                        {language === "pt" ? "anos" : "years"}
                      </label>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            {/* Tipo de Emprego */}
            <div className="accordion-item mt-3">
              <h2 className="accordion-header" id="type">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleThird(!toggleThird);
                  }}
                  role="button"
                >
                  {language === "pt" ? "Tipo de emprego" : "Job type"}
                </Button>
              </h2>
              <Collapse isOpen={toggleThird}>
                <div className="accordion-body">
                  <div className="side-title">
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="type"
                        id="fulltime"
                        checked={filters.type === "FULL_TIME"}
                        onChange={() => handleJobTypeChange("FULL_TIME")}
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="fulltime"
                      >
                        {language === "pt" ? "Tempo integral" : "Full time"}
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="type"
                        id="parttime"
                        checked={filters.type === "PART_TIME"}
                        onChange={() => handleJobTypeChange("PART_TIME")}
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="parttime"
                      >
                        {language === "pt" ? "Meio período" : "Part time"}
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="type"
                        id="freelance"
                        checked={filters.type === "FREELANCE"}
                        onChange={() => handleJobTypeChange("FREELANCE")}
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="freelance"
                      >
                        Freelancer
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="type"
                        id="internship"
                        checked={filters.type === "INTERNSHIP"}
                        onChange={() => handleJobTypeChange("INTERNSHIP")}
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="internship"
                      >
                        {language === "pt" ? "Estágio" : "Internship"}
                      </label>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            {/* Data de Publicação */}
            <div className="accordion-item mt-3">
              <h2 className="accordion-header" id="datePosted">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleFourth(!toggleFourth);
                  }}
                  role="button"
                >
                  {language === "pt"
                    ? "Data de publicação"
                    : "Publication date"}
                </Button>
              </h2>
              <Collapse isOpen={toggleFourth}>
                <div className="accordion-body">
                  <div className="side-title form-check-all">
                    <div className="form-check">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="createdAt"
                        id="allDates"
                        checked={!filters.createdAt}
                        onChange={() => handleTimePeriodChange(null)}
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="allDates"
                      >
                        {language === "pt" ? "Todas" : "All"}
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="createdAt"
                        id="lastHour"
                        checked={filters.createdAt === "LAST_HOUR"}
                        onChange={() => handleTimePeriodChange("LAST_HOUR")}
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="lastHour"
                      >
                        {language === "pt" ? "Última hora" : "Last hour"}
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="createdAt"
                        id="last24"
                        checked={filters.createdAt === "LAST_24_HOURS"}
                        onChange={() => handleTimePeriodChange("LAST_24_HOURS")}
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="last24"
                      >
                        {language === "pt"
                          ? "Últimas 24 horas"
                          : "Last 24 hours"}
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="createdAt"
                        id="last7"
                        checked={filters.createdAt === "LAST_7_DAYS"}
                        onChange={() => handleTimePeriodChange("LAST_7_DAYS")}
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="last7"
                      >
                        {language === "pt" ? "Últimos 7 dias" : "Last 7 days"}
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="createdAt"
                        id="last14"
                        checked={filters.createdAt === "LAST_14_DAYS"}
                        onChange={() => handleTimePeriodChange("LAST_14_DAYS")}
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="last14"
                      >
                        {language === "pt" ? "Últimos 14 dias" : "Last 14 days"}
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="createdAt"
                        id="last30"
                        checked={filters.createdAt === "LAST_30_DAYS"}
                        onChange={() => handleTimePeriodChange("LAST_30_DAYS")}
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="last30"
                      >
                        {language === "pt" ? "Últimos 30 dias" : "Last 30 days"}
                      </Label>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Sidebar;
