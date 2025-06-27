import React, { useState, useEffect } from "react";
import { Container, Collapse, NavbarToggler, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { Link } from "react-router-dom";
import classname from "classnames";
import withRouter from "../../components/withRouter";
import { Icon } from "@iconify/react";

import darkLogo from "../../assets/images/dark-logo.png";
import lightLogo from "../../assets/images/light-logo.png";
import profileImage from "../../assets/images/profile.jpg";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [layoutMode, setLayoutMode] = useState(localStorage.getItem("layoutMode") || "light");
  const [company, setCompany] = useState(false);
  const [notification, setNotification] = useState(false);
  const [userProfile, setUserProfile] = useState(false);
  const [navClass, setnavClass] = useState(false);

  const dropDownnotification = () => setNotification((prevState) => !prevState);
  const dropDownuserprofile = () => setUserProfile((prevState) => !prevState);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, []);

  function scrollNavigation() {
    setnavClass(window.pageYOffset > 0 ? "nav-sticky" : "");
  }

  // Menu activation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const pathName = props.router.location.pathname;
    const ul = document.getElementById("navbarCollapse");
    const items = ul.getElementsByTagName("a");

    removeActivation(items);
    const matchingMenuItem = Array.from(items).find(
      (item) => pathName === item.pathname
    );
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [props.router.location.pathname]);

  const removeActivation = (items) => {
    Array.from(items).forEach((item) => {
      item.classList.remove("active");
      if (item.parentElement) {
        item.parentElement.classList.remove("active");
      }
    });
  };

  function activateParentDropdown(item) {
    item.classList.add("active");
    let parent = item.parentElement;
    while (parent) {
      if (parent.tagName === "LI") parent.classList.add("active");
      parent = parent.parentElement;
    }
  }

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", layoutMode);
  }, [layoutMode]);

  const toggleMode = () => {
    const newMode = layoutMode === "dark" ? "light" : "dark";
    document.body.setAttribute("data-bs-theme", newMode);
    setLayoutMode(newMode);
    localStorage.setItem("layoutMode", newMode);
  };

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
            <img src={lightLogo} height="30" alt="" className="logo-dark" />
            <img src={darkLogo} height="30" alt="" className="logo-light" />
            Recruitment.
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
            <li
              className="list-inline-item border rounded-circle p-2 d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
            >
              <Link id="mode" onClick={toggleMode} className="d-inline-block">
                {layoutMode === "dark" ? (
                  <Icon
                    icon="material-symbols:sunny-rounded"
                    className="text-warning fs-5"
                  />
                ) : (
                  <Icon
                    icon="material-symbols:dark-mode-rounded"
                    className="text-secondary fs-5"
                  />
                )}
              </Link>
            </li>

            <Dropdown
              isOpen={notification}
              toggle={dropDownnotification}
              className="list-inline-item me-4"
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
                {/* Notification dropdown content remains the same */}
                <div>Mello Teste</div>
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
                {/* User dropdown content remains the same */}
                <div>Mellos</div>
              </DropdownMenu>
            </Dropdown>
          </ul>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
