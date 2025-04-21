import React from "react";
import { Link } from "react-router-dom";

// Importar imagem do usuário
import userImage3 from "../../../assets/images/user/img-03.jpg";

const BlogColumn = () => {
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
                <h6 className="mb-0">Por Alice Mellor</h6>
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
              <p className="mb-0">02 de Agosto de 2021</p>
            </div>
          </div>
        </li>
        <li className="list-inline-item">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <i className="uil uil-comments-alt"></i>
            </div>
            <div className="ms-2 flex-grow-1">
              <p className="mb-0">2 Comentários</p>
            </div>
          </div>
        </li>
      </ul>
      <div className="mt-4">
        <h5>O que torna um espaço de coworking ideal?</h5>
        <p className="text-muted">
          Persiga objetivamente catalisadores diversos de mudança para serviços
          interconectáveis. Reprojetar distintamente serviços revolucionários e
          arquiteturas premium. Incube de forma intrínseca oportunidades
          intuitivas e potencialidades em tempo real. Comunique-se de forma
          apropriada com tecnologia individualizada.
        </p>
        <p className="text-muted mb-4">
          Reformas residenciais, especialmente aquelas com muita demolição,
          podem ser extremamente empoeiradas. O mesmo acontece quando
          experimentamos a sensação emocional de estresse desde nossas primeiras
          experiências de rejeição ou ridicularização social. Aprendemos
          rapidamente a temer e, assim, evitar automaticamente situações
          potencialmente estressantes de todos os tipos, incluindo o mais comum
          de todos: cometer erros.
        </p>
        <figure className="blog-blockquote text-center">
          <blockquote className="blockquote">
            <p className="fs-17">
              "Uma agência de consultoria empresarial está envolvida no
              planejamento, implementação e educação de negócios."
            </p>
          </blockquote>
          <figcaption className="blockquote-footer fs-15 mb-4">
            Agência Criativa
            <cite title="Source Title" className="text-primary fw-semibold">
              {" "}
              Alice Mellor
            </cite>
          </figcaption>
        </figure>
        <p className="text-muted">
          Seja um artigo novo coberto apressadamente por ela. Dinheiro, livros
          espirituosos nem o filho acrescentam. Galinha acreditava na idade da
          noite, mas continuava fingindo. No conselho perdido, minha irmã não.
          Senhorita disse que o presunto era sem graça, sabia que ela podia ver
          de perto. Espírito dela completamente chamado.
        </p>
        <p className="text-muted">
          A vantagem de sua origem latina e do relativo vazio de sentido do
          Lorum Ipsum é que o texto não chama atenção para si nem distrai a
          atenção do espectador em relação ao layout.
        </p>
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
            <b>Compartilhar post:</b>
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
