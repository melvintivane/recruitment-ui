import classnames from "classnames";
import React, { useState } from "react";
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

//Components Imports
import { useLanguage } from "../../../context/LanguageContext.js";
import FeaturedJobs from "../JobList/FeaturedJobs";
import Freelancer from "../JobList/Freelancer.js";
import Fulltime from "../JobList/Fulltime.js";
import Parttime from "../JobList/Parttime.js";
import RecentJobs from "./RecentJobs";

const JobList = () => {
  const {language} = useLanguage();
  const [activeTab, setActiveTab] = useState("1");

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <React.Fragment>
      <div className="section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title">{language === 'pt' ? "Vagas Novas e Aleatórias" : "New and Random Vacancies"}</h4>
                <p className="text-muted mb-1">
                  {language === 'pt' ? "Publique uma vaga para nos contar sobre seu projeto. Iremos conectá-lo rapidamente com os candidatos certos." : "Post a job to tell us about your project. We'll quickly connect you with the right candidates."}
                  
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Nav
                tabs
                className="job-list-menu  nav-pills nav-justified flex-column flex-sm-row mb-4"
                id="pills-tab"
                role="tablist"
              >
                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      tabChange("1");
                    }}
                    id="recent-jobs-tab"
                    type="button"
                    role="tab"
                  >
                    {language === 'pt' ? "Recentes" : "Latest"}
                  </NavLink>
                </NavItem>

                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      tabChange("2");
                    }}
                    id="featured-jobs-tab"
                    type="button"
                    role="tab"
                  >
                    {language === 'pt' ? "Em Destaque" : "Featured"}
                  </NavLink>
                </NavItem>
                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      tabChange("3");
                    }}
                    id="freelancer-tab"
                    type="button"
                    role="tab"
                  >
                    Freelancer
                  </NavLink>
                </NavItem>
                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "4" })}
                    onClick={() => {
                      tabChange("4");
                    }}
                    id="part-time-tab"
                    type="button"
                    role="tab"
                  >
                    Part Time
                  </NavLink>
                </NavItem>
                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "5" })}
                    onClick={() => {
                      tabChange("5");
                    }}
                    id="full-time-tab"
                    type="button"
                    role="tab"
                  >
                    Full Time
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <RecentJobs />
                </TabPane>

                <TabPane tabId="2">
                  <FeaturedJobs />
                </TabPane>

                <TabPane tabId="3">
                  <Freelancer />
                </TabPane>

                <TabPane tabId="4">
                  <Parttime />
                </TabPane>

                <TabPane tabId="5">
                  <Fulltime />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default JobList;
