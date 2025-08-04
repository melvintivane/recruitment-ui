import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useLanguage } from "../../context/LanguageContext";

import darkLogo from "../../assets/images/dark-logo.png";
import lightLogo from "../../assets/images/light-logo.png";

const Footer = () => {
  const { language } = useLanguage();
  const translatedLinks = {
    pt: {
      footer: [
        {
          id: 1,
          title: "Empresa",
          menu: [
            { id: 1, link: "/about", subTitle: "Sobre Nós" },
            { id: 2, link: "/contact", subTitle: "Fale Conosco" },
            //{ id: 3, link: "/services", subTitle: "Serviços" },
            { id: 4, link: "/blog", subTitle: "Blog" },
          ],
        },
        {
          id: 2,
          title: "Para Candidatos",
          menu: [
            { id: 1, link: "/jobscategories", subTitle: "Categorias de Vagas" },
            { id: 2, link: "/joblist", subTitle: "Listagem de Vagas" },
            { id: 4, link: "/bookmarkjobs", subTitle: "Vagas Salvas" },
          ],
        },
        {
          id: 3,
          title: "Para Recrutadores",
          menu: [
            { id: 1, link: "/candidatelist", subTitle: "Lista de Candidatos" },
            /*{
              id: 3,
              link: "/candidatedetails",
              subTitle: "Detalhes do Candidato",
            },*/
          ],
        },
        {
          id: 4,
          title: "Suporte",
          menu: [
            { id: 1, link: "/contact", subTitle: "Central de Ajuda" },
            { id: 2, link: "/faqs", subTitle: "Perguntas Frequentes" },
            {
              id: 3,
              link: "/privacyandpolicy",
              subTitle: "Política de Privacidade",
            },
          ],
        },
      ],
    },
    en: {
      footer: [
        {
          id: 1,
          title: "Company",
          menu: [
            { id: 1, link: "/aboutus", subTitle: "About Us" },
            { id: 2, link: "/contact", subTitle: "Contact Us" },
            //{ id: 3, link: "/services", subTitle: "Services" },
            { id: 4, link: "/blog", subTitle: "Blog" },
          ],
        },
        {
          id: 2,
          title: "For Candidates",
          menu: [
            { id: 1, link: "/jobscategories", subTitle: "Job Categories" },
            { id: 2, link: "/joblist", subTitle: "Job Listings" },
            { id: 4, link: "/bookmarkjobs", subTitle: "Saved Jobs" },
          ],
        },
        {
          id: 3,
          title: "For Recruiters",
          menu: [
            { id: 1, link: "/candidatelist", subTitle: "Candidate List" },
            //{ id: 3, link: "/candidatedetails", subTitle: "Candidate Details" },
          ],
        },
        {
          id: 4,
          title: "Support",
          menu: [
            { id: 1, link: "/contact", subTitle: "Help Center" },
            { id: 2, link: "/faqs", subTitle: "Frequently Asked Questions" },
            {
              id: 3,
              link: "/privacyandpolicy",
              subTitle: "Privacy Policy",
            },
          ],
        },
      ],
    },
  };

  const footerIcons = [
    {
      id: 1,
      socialIcon: "uil uil-facebook-f",
    },
    {
      id: 2,
      socialIcon: "uil uil-linkedin-alt",
    },
    {
      id: 3,
      socialIcon: "uil uil-google",
    },
    {
      id: 4,
      socialIcon: "uil uil-twitter",
    },
  ];

  const t = translatedLinks[language] || translatedLinks["pt"];
  return (
    <React.Fragment>
      <section className="bg-footer">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="footer-item mt-4 mt-lg-0 me-lg-5">
                <Link
                  className="navbar-brand text-dark fw-bold d-flex align-items-center gap-2 mb-4"
                  to="/"
                  aria-label="Página inicial"
                >
                  <img
                    src={lightLogo}
                    height="30"
                    alt="Logo"
                    className="logo-dark"
                  />
                  <img
                    src={darkLogo}
                    height="30"
                    alt="Logo"
                    className="logo-light"
                  />
                  <h5 className="d-none d-md-inline">Recruitment</h5>
                </Link>
                <p className="text-white-50">
                  {language === "pt"
                    ? "É um fato estabelecido que um leitor se distrairá com o conteúdo de uma página ao observar seu layout."
                    : "It's an established fact that a reader will be distracted by the content of a page when looking at its layout."}
                </p>
                <p className="text-white mt-3">
                  {language === "pt" ? "Siga-nos em" : "Follow us"}:
                </p>
                <ul className="footer-social-menu list-inline mb-0">
                  {footerIcons.map((footerIcondetails, key) => (
                    <li className="list-inline-item" key={key}>
                      <Link
                        target="_blank"
                        to="https://www.linkedin.com/company/ep-management-consultancy-services/posts/?feedView=all"
                      >
                        <i className={footerIcondetails.socialIcon}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            {t.footer.map((footerdetails, key) => (
              <Col lg={2} xs={6} key={key}>
                <div className="footer-item mt-4 mt-lg-0">
                  <p className="fs-16 text-white mb-4">{footerdetails.title}</p>
                  {(footerdetails.menu || []).map((menuInner, key) => (
                    <ul className="list-unstyled footer-list mb-0" key={key}>
                      <li>
                        <Link to={menuInner.link}>
                          <i className="mdi mdi-chevron-right ml-6"></i>{" "}
                          {menuInner.subTitle}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <div className="footer-alt">
        <Container>
          <Row>
            <Col lg={12}>
              <p className="text-white-50 text-center mb-0">
                {new Date().getFullYear()} &copy; EP Recruitment developed by{" "}
                <Link
                  to="https://mymobisolutions.com/"
                  target="_blank"
                  className="text-reset text-decoration-underline"
                >
                  MyMobiSolutions
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Footer;
