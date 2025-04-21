import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Collapse, Input, Label } from "reactstrap";

const Sidebar = () => {
  const [toggleFirst, setToggleFirst] = useState(true);
  const [toggleSecond, setToggleSecond] = useState(true);
  const [toggleThird, setToggleThird] = useState(true);
  const [toggleFourth, setToggleFourth] = useState(true);
  const [toggleFifth, setToggleFifth] = useState(true);
  const [value, setValue] = React.useState(50);
  const [isChecked, setIsChecked] = useState(true);
  const handleOnChange = () => setIsChecked(!isChecked);
  const [isDateChecked, setIsDateChecked] = useState(true);
  const handleDateOnChange = () => setIsDateChecked(!isDateChecked);

  return (
    <React.Fragment>
      <Col lg={3}>
        <div className="side-bar mt-5 mt-lg-0">
          <div className="accordion" id="accordionExample">
            {/* Localização */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="locationOne">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleFirst(!toggleFirst);
                  }}
                  role="button"
                >
                  Localização
                </Button>
              </h2>
              <Collapse isOpen={toggleFirst}>
                <div className="accordion-body">
                  <div className="side-title">
                    <div className="mb-3">
                      <form className="position-relative">
                        <Input
                          className="form-control"
                          type="search"
                          placeholder="Pesquisar..."
                        />
                        <button
                          className="bg-transparent border-0 position-absolute top-50 end-0 translate-middle-y me-2"
                          type="submit"
                        >
                          <span className="mdi mdi-magnify text-muted"></span>
                        </button>
                      </form>
                    </div>
                    <div className="area-range slidecontainer">
                      <div className="form-label mb-4">
                        Distância: {value}.00 km
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={value}
                        onChange={({ target: { value } }) => setValue(value)}
                        className={`slider ${
                          value > 50 ? "slider-50" : "slider-0"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            {/* Experiência de Trabalho */}
            <div className="accordion-item mt-4">
              <h2 className="accordion-header" id="experienceOne">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleSecond(!toggleSecond);
                  }}
                  role="button"
                >
                  Experiência de trabalho
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
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="check1"
                      >
                        Sem experiência
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check2"
                        checked={isChecked}
                        onChange={handleOnChange}
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="check2"
                      >
                        0-3 anos
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check3"
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="check3"
                      >
                        3-6 anos
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check4"
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="check4"
                      >
                        Mais de 6 anos
                      </label>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            {/* Tipo de Emprego */}
            <div className="accordion-item mt-3">
              <h2 className="accordion-header" id="jobType">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleThird(!toggleThird);
                  }}
                  role="button"
                >
                  Tipo de emprego
                </Button>
              </h2>
              <Collapse isOpen={toggleThird}>
                <div className="accordion-body">
                  <div className="side-title">
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="radio"
                        name="emprego"
                        id="freelance"
                        defaultChecked
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
                        type="radio"
                        name="emprego"
                        id="fulltime"
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="fulltime"
                      >
                        Tempo integral
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="radio"
                        name="emprego"
                        id="internship"
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="internship"
                      >
                        Estágio
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="radio"
                        name="emprego"
                        id="parttime"
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="parttime"
                      >
                        Meio período
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
                  Data de publicação
                </Button>
              </h2>
              <Collapse isOpen={toggleFourth}>
                <div className="accordion-body">
                  <div className="side-title form-check-all">
                    <div className="form-check">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="allDates"
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="allDates"
                      >
                        Todas
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="lastHour"
                        checked={isDateChecked}
                        onChange={handleDateOnChange}
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="lastHour"
                      >
                        Última hora
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="last24"
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="last24"
                      >
                        Últimas 24 horas
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="last7"
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="last7"
                      >
                        Últimos 7 dias
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="last14"
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="last14"
                      >
                        Últimos 14 dias
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="last30"
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="last30"
                      >
                        Últimos 30 dias
                      </Label>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            {/* Nuvem de Tags */}
            <div className="accordion-item mt-3">
              <h2 className="accordion-header" id="tagCloud">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleFifth(!toggleFifth);
                  }}
                  role="button"
                >
                  Nuvem de tags
                </Button>
              </h2>
              <Collapse isOpen={toggleFifth}>
                <div className="accordion-body">
                  <div className="side-title">
                    <Link to="#" className="badge tag-cloud fs-13 mt-2">
                      design
                    </Link>
                    <Link to="#" className="badge tag-cloud fs-13 mt-2">
                      marketing
                    </Link>
                    <Link to="#" className="badge tag-cloud fs-13 mt-2">
                      negócios
                    </Link>
                    <Link to="#" className="badge tag-cloud fs-13 mt-2">
                      programador
                    </Link>
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
