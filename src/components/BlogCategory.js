import React, { useState } from "react";
import { Input, Form } from "reactstrap";

const CategoriaBlog = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <React.Fragment>
      <aside className="widget widget_search">
        <Form className="position-relative">
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
        </Form>
      </aside>
      <div className="mt-4 pt-2">
        <div className="sd-title">
          <h6 className="fs-16 mb-3">Categorias</h6>
        </div>
        <div className="my-3">
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="educacao"
            />
            <label className="form-check-label ms-2" htmlFor="educacao">
              Educação
            </label>
          </div>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked1"
              checked={isChecked}
              onChange={handleOnChange}
            />
            <label
              className="form-check-label ms-2"
              htmlFor="flexCheckChecked1"
            >
              Negócios
            </label>
          </div>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked2"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="flexCheckChecked2"
            >
              Informação
            </label>
          </div>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked3"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="flexCheckChecked3"
            >
              Entrevista
            </label>
          </div>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked4"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="flexCheckChecked4"
            >
              Viagem
            </label>
          </div>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked5"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="flexCheckChecked5"
            >
              Empregos
            </label>
          </div>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked6"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="flexCheckChecked6"
            >
              Moda
            </label>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategoriaBlog;
