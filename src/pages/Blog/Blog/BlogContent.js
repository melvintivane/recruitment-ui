import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";

// Imagens dos usuários
import userImage1 from "../../../assets/images/user/user.png";
import blogImage from "../../../assets/images/blog/img-10.jpg";
import blogImage2 from "../../../assets/images/blog/img-06.jpg"

import { useLanguage } from "../../../context/LanguageContext";
import { getAllBlogs } from "../../../services/blogService";

const BlogContent = () => {
  const { language } = useLanguage();

  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
  });

  // Fetch blogs query
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs", pagination.page, pagination.size],
    queryFn: () =>
      getAllBlogs({
        page: pagination.page,
        size: pagination.size,
      }),
    keepPreviousData: true,
  });

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < (data?.totalPages || 0)) {
      setPagination((prev) => ({ ...prev, page: newPage }));
    }
  };

  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setPagination((prev) => ({ ...prev, size: newSize, page: 0 }));
  };

  const extractText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  if (isLoading) {
    return (
      <>
        <section className="section">
          <Container>
            <div className="text-center py-5">
              <div
                className="spinner-grow text-primary"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="visually-hidden">{language === "pt" ? "Carregando..." : "Loading..."}</span>
              </div>
              <p className="mt-3">{language === "pt" ? "Carregando lista dos blogs..." : "Loading blog list..."}</p>
            </div>
          </Container>
        </section>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <section className="section">
          <Container>
            <div className="text-center py-5">
              <p className="mt-3 text-danger">
                {language === "pt" ? "Erro ao carregar lista de blogs" : "Error loading blog list"}
              </p>
            </div>
          </Container>
        </section>
      </>
    );
  }

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          {/* <Row className="align-items-center">
            <Col lg={12}>
              <div className="mb-4">
                <h4>
                  {language === "pt"
                    ? "Últimos & Posts de Blog em Alta"
                    : "Latest & Trending Blog Posts"}
                </h4>
              </div>
            </Col>
            <Col lg={7}>
              <div className="post-preview overflow-hidden rounded-3 mb-3 mb-lg-0">
                <Link to="/blogdetails">
                  <img
                    src={blogImage}
                    alt="Blog"
                    className="img-fluid blog-img"
                  />
                </Link>
              </div>
            </Col>
            <Col lg={5}>
              <article className="post position-relative">
                <div className="post ms-lg-4">
                  <p className="text-muted mb-2">
                    <b>Produto</b> - 01 de Agosto, 2021
                  </p>
                  <h5 className="mb-3">
                    <Link to="/blogdetails" className="primary-link">
                      As páginas de aterrissagem tradicionais funcionam para
                      startups de Saas?
                    </Link>
                  </h5>
                  <p className="text-muted">
                    Busque diversos catalisadores para mudanças em metas
                    interoperáveis. Reprojetar de forma distinta meta-serviços
                    revolucionários e arquiteturas premium. Incubar de forma
                    intrínseca oportunidades intuitivas e potencialidades em
                    tempo real. Comunicar adequadamente a tecnologia um a um.
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <div className="flex-shrink-0">
                      <img
                        src={userImage1}
                        alt=""
                        className="avatar-sm rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <Link to="/blogauther" className="primary-link">
                        <h6 className="fs-16 mb-0">James Lemire </h6>
                      </Link>
                      <p className="text-muted mb-0">Gerente de Produto</p>
                    </div>
                  </div>
                </div>
              </article>
            </Col>
          </Row> */}

          <Col lg={12} className="mt-5">
            <div>
              <h4>
                {language === "pt"
                  ? "Posts de Blog"
                  : "Blog Posts"}
              </h4>
            </div>
          </Col>

          <Row>
            {data?.content?.map((blogContentDetails, key) => (
              <Col lg={6} key={key}>
                <article className="post position-relative mt-4" key={key}>
                  <div className="post-preview overflow-hidden mb-3 rounded-3">
                    <Link to={`/blogdetails/${blogContentDetails.id}`}>
                      <img
                        src={blogImage2}
                        alt=""
                        className="img-fluid blog-img"
                      />
                    </Link>
                  </div>
                  <p className="text-muted mb-2">
                    <b>{blogContentDetails.category || "Category"}</b> -{" "}
                    {new Date(
                      blogContentDetails.createdAt.split(".")[0]
                    ).toLocaleString(language === "pt" ? "pt-PT" : "en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h5 className="mb-3">
                    <Link
                      to={`/blogdetails/${blogContentDetails.id}`}
                      className="primary-link"
                    >
                      {blogContentDetails.title}
                    </Link>
                  </h5>
                  <p className="text-muted">
                    {extractText(blogContentDetails.body).slice(0, 200)}...
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <div className="flex-shrink-0">
                      <img
                        src={userImage1 || blogContentDetails.image}
                        alt=""
                        className="avatar-sm rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <Link to="/blogauther" className="primary-link">
                        <h6 className="fs-16 mb-0">
                          {blogContentDetails.author}
                        </h6>
                      </Link>
                      <p className="text-muted mb-0">
                        {blogContentDetails.role || "Blogger"}
                      </p>
                    </div>
                  </div>
                </article>
              </Col>
            ))}
          </Row>

          <Row>    
            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div className="text-muted">
                {language === "pt" ? "Mostrando" : "Showing"}{" "}
                <span className="fw-bold">{data?.content?.length || 0}</span>{" "}
                {language === "pt" ? "de" : "of"}{" "}
                <span className="fw-bold">{data?.totalElements || 0}</span>{" "}
                {"blogs"}
                <select
                  className="form-select form-select-sm ms-2 d-inline-block w-auto"
                  value={pagination.size}
                  onChange={handlePageSizeChange}
                >
                  {[5, 10, 20, 50].map((size) => (
                    <option key={size} value={size}>
                      {size} {language === "pt" ? "por página" : "per page"}
                    </option>
                  ))}
                </select>
              </div>

              <nav aria-label="Page navigation">
                <Pagination className="mb-0">
                  <PaginationItem disabled={pagination.page === 0}>
                    <PaginationLink
                      previous
                      onClick={() => handlePageChange(pagination.page - 1)}
                    />
                  </PaginationItem>

                  {Array.from(
                    { length: Math.min(5, data?.totalPages || 0) },
                    (_, i) => {
                      let pageNum;
                      if ((data?.totalPages || 0) <= 5) {
                        pageNum = i;
                      } else if (pagination.page <= 2) {
                        pageNum = i;
                      } else if (
                        pagination.page >=
                        (data?.totalPages || 0) - 3
                      ) {
                        pageNum = (data?.totalPages || 0) - 5 + i;
                      } else {
                        pageNum = pagination.page - 2 + i;
                      }

                      return (
                        <PaginationItem
                          key={pageNum}
                          active={pageNum === pagination.page}
                        >
                          <PaginationLink
                            onClick={() => handlePageChange(pageNum)}
                          >
                            {pageNum + 1}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    }
                  )}

                  <PaginationItem
                    disabled={pagination.page === (data?.totalPages || 0) - 1}
                  >
                    <PaginationLink
                      next
                      onClick={() => handlePageChange(pagination.page + 1)}
                    />
                  </PaginationItem>
                </Pagination>
              </nav>
            </div>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BlogContent;
