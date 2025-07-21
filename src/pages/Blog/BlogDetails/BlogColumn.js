import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";

// Importar imagem do usuário
import userImage3 from "../../../assets/images/user/img-03.jpg";

const BlogColumn = ({data}) => {
  const {language} = useLanguage();
  return (
    <React.Fragment>
      <ul className="list-inline mb-0 mt-3 text-muted">
        <li className="list-inline-item">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img
                src={userImage3}
                alt=""
                className="avatar-sm rounded-circle"
              />
            </div>
            <div className="ms-3">
              <Link to="/blogauther" className="primary-link">
                <h6 className="mb-0">{language === 'pt' ? `Por ${data.author}` : `By ${data.author}`}</h6>
              </Link>
            </div>
          </div>
        </li>
        <li className="list-inline-item">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <i className="uil uil-calendar-alt"></i>
            </div>
            <div className="ms-2">
              <p className="mb-0">
                {new Date(data.createdAt.split('.')[0]).toLocaleString(language === 'pt' ? "pt-PT" : "en-US", {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </li>
        <li className="list-inline-item">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <i className="uil uil-comments-alt"></i>
            </div>
            <div className="ms-2 flex-grow-1">
              <p className="mb-0">{language === 'pt' ? `${data.commentsCount} os` : `${data.commentsCount} Comments`}</p>
            </div>
          </div>
        </li>
      </ul>
      <div className="mt-4">
        <h5>{data.title}</h5>
        <p className="text-muted mb-4">
          {data.body}
        </p>
        <figure className="blog-blockquote text-center">
          <blockquote className="blockquote">
            <p className="fs-17">
              {data.quote}
            </p>
          </blockquote>
          <figcaption className="blockquote-footer fs-15 mb-4">
            Agência Criativa
            <cite title="Source Title" className="text-primary fw-semibold">
              {" "}
              {data.author}
            </cite>
          </figcaption>
        </figure>
        
        <div className="d-flex align-items-center mb-4">
          <div className="flex-shrink-0">
            <b>Tags:</b>
          </div>
          <div className="flex-grow-1 ms-2 d-flex flex-wrap align-items-start gap-1">
            <Link
              to="#"
              className="badge bg-success-subtle text-success mt-1 fs-14"
            >
              Negócios
            </Link>
            <Link
              to="#"
              className="badge bg-success-subtle text-success mt-1 fs-14"
            >
              Design
            </Link>
            <Link
              to="#"
              className="badge bg-success-subtle text-success mt-1 fs-14"
            >
              Criatividade
            </Link>
            <Link
              to="#"
              className="badge bg-success-subtle text-success mt-1 fs-14"
            >
              Evento
            </Link>
          </div>
        </div>
        <ul className="blog-social-menu list-inline mb-0 text-end">
          <li className="list-inline-item">
            <b>{language === 'pt' ? "Compartilhar post" : "Share post"}:</b>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-link bg-primary-subtle text-primary">
              <i className="uil uil-facebook-f"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-link bg-success-subtle text-success">
              <i className="uil uil-whatsapp"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-link bg-blue-subtle text-blue">
              <i className="uil uil-linkedin-alt"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-link bg-danger-subtle text-danger">
              <i className="uil uil-envelope"></i>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default BlogColumn;
