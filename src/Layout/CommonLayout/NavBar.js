import { useState, useEffect, useContext, useCallback } from "react";
import {
  Container,
  Collapse,
  NavbarToggler,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import { Icon } from "@iconify/react";
import { Button } from "react-bootstrap";

import darkLogo from "../../assets/images/dark-logo.png";
import lightLogo from "../../assets/images/light-logo.png";
import profileImage from "../../assets/images/user/user.png";
import { ThemeContext } from "../../context/ThemeContext";
import { useAuth } from "../../hooks/useAuth";

const NavBar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  // State management
  const [isOpen, setIsOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [navSticky, setNavSticky] = useState(false);

  // Toggle functions
  const toggleNavbar = () => setIsOpen((prev) => !prev);
  const toggleCompanyDropdown = () => setCompanyDropdownOpen((prev) => !prev);
  const toggleNotificationDropdown = () =>
    setNotificationDropdownOpen((prev) => !prev);
  const toggleProfileDropdown = () => setProfileDropdownOpen((prev) => !prev);

  // Scroll effect
  const handleScroll = useCallback(() => {
    setNavSticky(window.pageYOffset > 0);
  }, []);

  // Menu activation
  const activateMenu = useCallback(() => {
    const navbar = document.getElementById("navbarCollapse");
    if (!navbar) return;

    const menuItems = navbar.getElementsByTagName("a");

    // Remove active class from all items
    Array.from(menuItems).forEach((item) => {
      item.classList.remove("active");
      if (item.parentElement) {
        item.parentElement.classList.remove("active");
      }
    });

    // Find and activate current route
    const currentItem = Array.from(menuItems).find(
      (item) => location.pathname === item.pathname
    );

    if (currentItem) {
      currentItem.classList.add("active");
      let parent = currentItem.parentElement;
      while (parent && parent.tagName !== "UL") {
        if (parent.tagName === "LI") parent.classList.add("active");
        parent = parent.parentElement;
      }
    }
  }, [location.pathname]);

  // Effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    // Scroll suave apenas para navegações internas (não no carregamento inicial)
    if (location.pathname !== "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    activateMenu();
  }, [location.pathname, activateMenu]);

  // Navigation items
  const navItems = [
    { path: "/", label: "Início" },
    { path: "/joblist", label: "Vagas" },
    { path: "/companylist", label: "Empresas" },
    { path: "/contact", label: "Contacto" },
    { path: "/blog", label: "Blog" },
  ];

  const companyDropdownItems = [
    { path: "/aboutus", label: "Sobre Nós", icon: "mdi-information-outline" },
    {
      path: "/privacyandpolicy",
      label: "Privacidade & Política",
      icon: "mdi-shield-account-outline",
    },
    {
      path: "/faqs",
      label: "Perguntas Frequentes",
      icon: "mdi-help-circle-outline",
    },
  ];

  const profileDropdownItems = [
    { path: "/myprofile", label: "Meu Perfil", icon: "mdi-account-outline" },
    {
      path: "/bookmarkjobs",
      label: "Vagas Favoritas",
      icon: "mdi-bookmark-multiple-outline",
    },
    {
      path: "/managejobs",
      label: "Minhas Candidaturas",
      icon: "mdi-briefcase-outline",
    },
  ];

  return (
    <nav
      className={classnames(
        "navbar navbar-expand-lg fixed-top nav-sticky p-0",
        {
          "nav-sticky": navSticky,
        }
      )}
      id="navigation"
    >
      <Container fluid className="custom-container">
        <div className="d-flex align-items-center">
          <NavbarToggler
            className="me-3"
            onClick={toggleNavbar}
            aria-label="Alternar navegação"
          >
            <i className="mdi mdi-menu"></i>
          </NavbarToggler>
          <Link
            className="navbar-brand text-dark fw-bold d-flex align-items-center gap-2"
            to="/"
            aria-label="Página inicial"
          >
            <img src={lightLogo} height="30" alt="Logo" className="logo-dark" />
            <img src={darkLogo} height="30" alt="Logo" className="logo-light" />
            <span className="d-none d-md-inline">Recruitment.</span>
          </Link>
        </div>

        <Collapse
          isOpen={isOpen}
          className="navbar-collapse"
          id="navbarCollapse"
        >
          <ul className="navbar-nav mx-auto navbar-center">
            {navItems.map((item) => (
              <NavItem key={item.path}>
                <Link className="nav-link" to={item.path}>
                  {item.label}
                </Link>
              </NavItem>
            ))}

            <NavItem className="dropdown dropdown-hover">
              <NavLink
                id="aboutDropdown"
                role="button"
                onClick={toggleCompanyDropdown}
                aria-expanded={companyDropdownOpen}
              >
                Sobre Nós <div className="arrow-down"></div>
              </NavLink>
              <ul
                className={classnames(
                  "dropdown-menu dropdown-menu-sm dropdown-menu-center",
                  { show: companyDropdownOpen }
                )}
                aria-labelledby="aboutDropdown"
              >
                {companyDropdownItems.map((item) => (
                  <li key={item.path}>
                    <Link className="dropdown-item" to={item.path}>
                      <i className={`mdi ${item.icon} me-2`}></i>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </NavItem>
          </ul>
        </Collapse>

        <ul className="header-menu list-inline d-flex align-items-center mb-0">
          <li className="list-inline-item">
            <button
              onClick={toggleTheme}
              className="border-0 bg-transparent p-2 rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
              aria-label={`Alternar para modo ${
                theme === "dark" ? "claro" : "escuro"
              }`}
            >
              <Icon
                icon={
                  theme === "dark"
                    ? "material-symbols:sunny-rounded"
                    : "material-symbols:dark-mode-rounded"
                }
                className={
                  theme === "dark" ? "text-light fs-22" : "text-dark fs-22"
                }
              />
            </button>
          </li>

          {user && (
            <>
              <li className="list-inline-item me-4">
                <Dropdown
                  isOpen={notificationDropdownOpen}
                  toggle={toggleNotificationDropdown}
                >
                  <DropdownToggle
                    tag="button"
                    className="header-item noti-icon position-relative border-0 bg-transparent"
                    aria-label="Notificações"
                  >
                    <i className="mdi mdi-bell fs-22"></i>
                    <div className="count position-absolute">3</div>
                  </DropdownToggle>
                  <DropdownMenu
                    className="dropdown-menu-md dropdown-menu-end p-0"
                    end
                  >
                    <div className="p-3 border-bottom">
                      <h6 className="m-0">Notificações</h6>
                    </div>
                    <div
                      className="px-2"
                      style={{ maxHeight: "300px", overflowY: "auto" }}
                    >
                      <div className="text-center py-3">
                        Nenhuma notificação
                      </div>
                    </div>
                  </DropdownMenu>
                </Dropdown>
              </li>

              <li className="list-inline-item">
                <Dropdown
                  isOpen={profileDropdownOpen}
                  toggle={toggleProfileDropdown}
                >
                  <DropdownToggle
                    tag="button"
                    className="header-item d-flex align-items-center border-0 bg-transparent"
                    aria-label="Menu do usuário"
                  >
                    <img
                      src={user.profileImage || profileImage}
                      alt={`Perfil de ${user.name}`}
                      width="35"
                      height="35"
                      className="rounded-circle me-1"
                    />
                    <span className="d-none d-md-inline-block fw-medium">
                      Olá, {user.name.split(" ")[0]}!
                    </span>
                  </DropdownToggle>
                  <DropdownMenu
                    className="dropdown-menu-md dropdown-menu-end p-0"
                    end
                  >
                    <div className="p-3 border-bottom">
                      <div className="d-flex align-items-center">
                        <img
                          src={user.profileImage || profileImage}
                          alt={`Perfil de ${user.name}`}
                          width="40"
                          height="40"
                          className="rounded-circle me-2"
                        />
                        <div>
                          <div className="fw-bold">{user.name}</div>
                          <div className="small text-muted">{user.email}</div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="px-2"
                      style={{ maxHeight: "300px", overflowY: "auto" }}
                    >
                      {profileDropdownItems.map((item) => (
                        <DropdownItem
                          key={item.path}
                          tag={Link}
                          to={item.path}
                          className="dropdown-item"
                        >
                          <i className={`mdi ${item.icon} me-2`}></i>
                          {item.label}
                        </DropdownItem>
                      ))}
                      <DropdownItem divider />
                      <DropdownItem
                        onClick={logout}
                        className="dropdown-item text-danger"
                      >
                        <i className="mdi mdi-logout me-2"></i>
                        Sair
                      </DropdownItem>
                    </div>
                  </DropdownMenu>
                </Dropdown>
              </li>
            </>
          )}

          {!user && (
            <li className="list-inline-item">
              <Link to="/signin">
                <Button
                  variant="outline-primary"
                  className="ms-2"
                  aria-label="Fazer login"
                >
                  <i className="mdi mdi-login me-1"></i>
                  Entrar
                </Button>
              </Link>
            </li>
          )}
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;
