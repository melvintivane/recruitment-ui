import React, { useState, useEffect } from "react";
import {
  Container,
  Collapse,
  NavbarToggler,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

import { Link } from "react-router-dom";
import classname from "classnames";
import withRouter from "../../components/withRouter";

import darkLogo from "../../assets/images/dark-logo.png";
import lightLogo from "../../assets/images/light-logo.png";
import userImage2 from "../../assets/images/user/img-02.jpg";
import jobImage4 from "../../assets/images/featured-job/img-04.png";
import userImage1 from "../../assets/images/user/img-01.jpg";
import jobImage from "../../assets/images/featured-job/img-01.png";
import profileImage from "../../assets/images/profile.jpg";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [company, setCompany] = useState(false);

  //Notification Dropdown
  const [notification, setNotification] = useState(false);
  const dropDownnotification = () => setNotification((prevState) => !prevState);

  //user Profile Dropdown
  const [userProfile, setUserProfile] = useState(false);
  const dropDownuserprofile = () => setUserProfile((prevState) => !prevState);

  //scroll navbar
  const [navClass, setnavClass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = window.pageYOffset;
    if (scrollup > 0) {
      setnavClass("nav-sticky");
    } else {
      setnavClass("");
    }
  }
  //menu activation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const pathName = props.router.location.pathname;
    var matchingMenuItem = null;
    var ul = document.getElementById("navbarCollapse");
    var items = ul.getElementsByTagName("a");
    removeActivation(items);
    for (var i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [props.router.location.pathname]);

  const removeActivation = (items) => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;
      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        }
      }
    }
  };

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement.parentElement.parentElement;

    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <nav
        className={"navbar navbar-expand-lg fixed-top sticky p-0 " + navClass}
        id="navigation"
      >
        <Container fluid className="custom-container">
          <Link
            className="navbar-brand text-dark fw-bold mx-auto d-flex align-items-center gap-2"
            to="/"
          >
            <img src={lightLogo} height="22" alt="" className="logo-dark" />
            <img src={darkLogo} height="22" alt="" className="logo-light" />
            Hireway
          </Link>
          <div>
            <NavbarToggler
              className="me-3"
              type="button"
              onClick={() => toggle()}
            >
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>
          </div>
          <Collapse
            isOpen={isOpen}
            className="navbar-collapse"
            id="navbarCollapse"
          >
            <ul className="navbar-nav mx-auto navbar-center">
              <NavItem>
                <Link className="nav-link" to="/">
                  Início
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/joblist">
                  Vagas
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/companylist">
                  Empresas
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contact">
                  Contacto
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </NavItem>
              <NavItem className="dropdown dropdown-hover">
                <NavLink
                  to="/#"
                  id="jobsdropdown"
                  role="button"
                  onClick={() => setCompany(!company)}
                >
                  Sobre Nós <div className="arrow-down"></div>
                </NavLink>
                <ul
                  className={classname(
                    "dropdown-menu dropdown-menu-sm dropdown-menu-center",
                    {
                      show: company,
                    }
                  )}
                  aria-labelledby="jobsdropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/aboutus">
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/services">
                      Serviços
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/team">
                      Equipe
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/pricing">
                      Preços
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/privacyandpolicy">
                      Privacidade & Política
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faqs">
                      Perguntas Frequentes
                    </Link>
                  </li>
                </ul>
              </NavItem>
            </ul>
          </Collapse>

          <ul className="header-menu list-inline d-flex align-items-center mb-0">
            <Dropdown
              isOpen={notification}
              toggle={dropDownnotification}
              className="list-inline-item  me-4"
            >
              <DropdownToggle
                href="#"
                className="header-item noti-icon position-relative"
                id="notification"
                type="button"
                tag="a"
              >
                <i className="mdi mdi-bell fs-22"></i>
                <div className="count position-absolute">3</div>
              </DropdownToggle>
              <DropdownMenu
                className="dropdown-menu-md dropdown-menu-end p-0"
                aria-labelledby="notification"
                end
              >
                <div className="notification-header border-bottom bg-light">
                  <h6 className="mb-1">Notificações</h6>
                  <p className="text-muted fs-13 mb-0">
                    Você tem 4 notificações não lidas
                  </p>
                </div>
                <div className="notification-wrapper dropdown-scroll">
                  <Link
                    to="#"
                    className="text-dark notification-item d-block active"
                  >
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar-xs bg-primary text-white rounded-circle text-center">
                          <i className="uil uil-user-check"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-14">
                          22 registros verificados
                        </h6>
                        <p className="mb-0 fs-12 text-muted">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>3 min atrás</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-dark notification-item d-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <img
                          src={userImage2}
                          className="rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-14">Jeremias Lemire</h6>
                        <p className="text-muted fs-12 mb-0">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>15 min atrás</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-dark notification-item d-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <img
                          src={jobImage4}
                          className="rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-14">
                          Candidaturas aprovadas
                        </h6>
                        <p className="text-muted mb-0 fs-12">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>45 min atrás</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-dark notification-item d-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <img
                          src={userImage1}
                          className="rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-14">Vanessa Tivane</h6>
                        <p className="text-muted mb-0 fs-12">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>1 hora atrás</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-dark notification-item d-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <img
                          src={jobImage}
                          className="rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-15">Agência Criativa</h6>
                        <p className="text-muted mb-0 fs-12">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>2 horas atrás</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="notification-footer border-top text-center">
                  <Link className="primary-link fs-13" to="#">
                    <i className="mdi mdi-arrow-right-circle me-1"></i>{" "}
                    <span>Ver Mais..</span>
                  </Link>
                </div>
              </DropdownMenu>
            </Dropdown>
            <Dropdown
              onClick={() => setUserProfile(!userProfile)}
              isOpen={userProfile}
              toggle={dropDownuserprofile}
              className="list-inline-item"
            >
              <DropdownToggle
                to="#"
                className="header-item"
                id="userdropdown"
                type="button"
                tag="a"
                aria-expanded="false"
              >
                <img
                  src={profileImage}
                  alt="mdo"
                  width="35"
                  height="35"
                  className="rounded-circle me-1"
                />{" "}
                <span className="d-none d-md-inline-block fw-medium">
                  Olá, Jassmin!
                </span>
              </DropdownToggle>
              <DropdownMenu
                className="dropdown-menu-end"
                aria-labelledby="userdropdown"
                end
              >
                <li>
                  <Link className="dropdown-item" to="/managejobs">
                    Gerenciar Vagas
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/bookmarkjobs">
                    Vagas Salvas
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/myprofile">
                    Meu Perfil
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/signout">
                    Sair
                  </Link>
                </li>
              </DropdownMenu>
            </Dropdown>
          </ul>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
