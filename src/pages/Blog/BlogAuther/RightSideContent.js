import React from "react";
import { Col } from "reactstrap";

import blogimage12 from "../../../assets/images/blog/img-12.jpg";
import blogimage11 from "../../../assets/images/blog/img-11.jpg";
import blogimage13 from "../../../assets/images/blog/img-13.jpg";
import blogimage14 from "../../../assets/images/blog/img-14.jpg";
import { Link } from "react-router-dom";

const RightSideContent = () => {
  const blogContent = [
    {
      id: 1,
      badgeName: "Negócios",
      blogTitle: "Quais são as aplicações mais inteligentes para os negócios?",
      blogDate: "06 de setembro de 2021",
      blogImage: blogimage12,
      blogContent:
        "Seja o artigo espírito dela coberto apressadamente sentada. Livros engraçados nem filho adiciona. A idade da galinha teve a noite, acreditava, mas prosseguir fingir senhora. Nos conselhos perdidos, minha irmã não. Ela falou e o presunto disse que a senhora sabia.",
    },
    {
      id: 2,
      badgeName: "Moda",
      blogTitle: "Como ser criativo no seu trabalho?",
      blogDate: "24 de agosto de 2021",
      blogImage: blogimage11,
      blogContent:
        "Seja o artigo espírito dela coberto apressadamente sentada. Livros engraçados nem filho adiciona. A idade da galinha teve a noite, acreditava, mas prosseguir fingir senhora. Nos conselhos perdidos, minha irmã não. Ela falou e o presunto disse que a senhora sabia.",
    },
    {
      id: 3,
      badgeName: "Design",
      blogTitle: "Como os aplicativos estão mudando o mundo da TI",
      blogDate: "17 de agosto de 2021",
      blogImage: blogimage13,
      blogContent:
        "Seja o artigo espírito dela coberto apressadamente sentada. Livros engraçados nem filho adiciona. A idade da galinha teve a noite, acreditava, mas prosseguir fingir senhora. Nos conselhos perdidos, minha irmã não. Ela falou e o presunto disse que a senhora sabia.",
    },
    {
      id: 4,
      badgeName: "Moda",
      blogTitle: "Como ser criativo no seu trabalho?",
      blogDate: "22 de julho de 2020",
      blogImage: blogimage14,
      blogContent:
        "Seja o artigo espírito dela coberto apressadamente sentada. Livros engraçados nem filho adiciona. A idade da galinha teve a noite, acreditava, mas prosseguir fingir senhora. Nos conselhos perdidos, minha irmã não. Ela falou e o presunto disse que a senhora sabia.",
    },
  ];

  return (
    <React.Fragment>
      <Col lg={8}>
        <div className="ms-lg-4 mt-4 mt-lg-0">
          {blogContent.map((blogContentDetails, key) => (
            <div className="blog-post mb-5" key={key}>
              <div className="text-center">
                {/* <span className="badge bg-info-subtle text-info mb-2">
                  {blogContentDetails.badgeName}
                </span> */}
                <Link to={`/blogdetails/${blogContentDetails.id}`} className="primary-link">
                  <h5 className="text-center mb-1">
                    {blogContentDetails.blogTitle}
                  </h5>
                </Link>
                <p className="text-muted">{blogContentDetails.blogDate}</p>
              </div>
              <div className="mb-3">
                <Link to={`/blogdetails/${blogContentDetails.id}`}>
                  <img
                    src={blogContentDetails.blogImage}
                    alt=""
                    className="img-fluid rounded-3"
                  />
                </Link>
              </div>
              <p className="text-muted mb-2">
                {blogContentDetails.blogContent}
              </p>
              <Link to={`/blogdetails/${blogContentDetails.id}`} className="text-primary">
                Leia mais <i className="uil uil-angle-right-b"></i>
              </Link>
            </div>
          ))}

          <nav aria-label="Navegação de página" className="mt-5">
            <ul className="pagination job-pagination mb-0 justify-content-center">
              <li className="page-item disabled">
                <Link className="page-link" to="#" tabIndex="-1">
                  <i className="mdi mdi-chevron-double-left fs-15"></i>
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  4
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  <i className="mdi mdi-chevron-double-right fs-15"></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default RightSideContent;
