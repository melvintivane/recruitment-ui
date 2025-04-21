import React from "react";
import { Link } from "react-router-dom";

//Importar Imagem
import userImage1 from "../../../assets/images/user/img-01.jpg";
import userImage2 from "../../../assets/images/user/img-02.jpg";
import userImage4 from "../../../assets/images/user/img-04.jpg";

const BlogComments = () => {
  return (
    <React.Fragment>
      <h5 className="border-bottom pb-3 mt-5">Comentários</h5>
      <div className="mt-5">
        <div className="d-sm-flex align-items-top">
          <div className="flex-shrink-0">
            <img
              className="rounded-circle avatar-md img-thumbnail"
              src={userImage1}
              alt="img"
            />
          </div>
          <div className="flex-grow-1 ms-sm-3">
            <small className="float-end fs-12 text-muted">
              <i className="uil uil-clock"></i> Há 30 min
            </small>
            <Link to="/candidatedetails" className="primary-link">
              <h6 className="fs-16 mt-sm-0 mt-3 mb-0">Rebecca Swartz</h6>
            </Link>
            <p className="text-muted fs-14 mb-0">10 de ago, 2021</p>
            <div className="my-3 badge bg-light">
              <Link to="#" className="text-primary">
                <i className="mdi mdi-reply"></i> Responder
              </Link>
            </div>
            <p className="text-muted fst-italic mb-0">
              "Existem muitas variações de trechos do Lorem Ipsum disponíveis,
              mas a maioria sofreu alterações de alguma forma, por injeção de
              humor"
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="d-sm-flex align-items-top">
          <div className="flex-shrink-0">
            <img
              className="rounded-circle avatar-md img-thumbnail"
              src={userImage2}
              alt="img"
            />
          </div>
          <div className="flex-grow-1 ms-sm-3">
            <small className="float-end fs-12 text-muted">
              <i className="uil uil-clock"></i> Há 2 hrs
            </small>
            <Link to="/candidatedetails" className="primary-link">
              <h6 className="fs-16 mt-sm-0 mt-3 mb-0">Adam Gibson</h6>
            </Link>
            <p className="text-muted fs-14 mb-0">10 de ago, 2021</p>
            <div className="my-3 badge bg-light">
              <Link to="#" className="text-primary">
                <i className="mdi mdi-reply"></i> Responder
              </Link>
            </div>
            <p className="text-muted fst-italic mb-0">
              "O aspecto mais importante da beleza era, portanto, uma parte
              inerente de um objeto, em vez de algo aplicado superficialmente, e
              baseava-se em verdades universais e reconhecíveis."
            </p>

            <div className="d-sm-flex align-items-top mt-5">
              <div className="flex-shrink-0">
                <img
                  className="rounded-circle avatar-md img-thumbnail"
                  src={userImage4}
                  alt="img"
                />
              </div>
              <div className="flex-grow-1 ms-sm-3">
                <small className="float-end fs-12 text-muted">
                  <i className="uil uil-clock"></i> Há 2 hrs
                </small>
                <Link to="/candidatedetails" className="primary-link">
                  <h6 className="fs-16 mt-sm-0 mt-3 mb-0">Kiera Finch</h6>
                </Link>
                <p className="text-muted fs-14 mb-0">10 de ago, 2021</p>
                <div className="my-3 badge bg-light">
                  <Link to="#" className="text-primary">
                    <i className="mdi mdi-reply"></i> Responder
                  </Link>
                </div>
                <p className="text-muted fst-italic mb-0">
                  "Esta resposta é importante para nossa capacidade de aprender
                  com os erros, mas também dá origem à autocrítica, porque faz
                  parte do sistema de proteção contra ameaças."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogComments;
