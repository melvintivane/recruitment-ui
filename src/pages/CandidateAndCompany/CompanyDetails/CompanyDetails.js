import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { getEmployerById } from "../../../services/companyService";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import Section from "./Section";

const CompanyDetails = () => {
  document.title =
    "Company Details | Recruitment - Job Listing | MobiSolutions";
  const { id } = useParams();
  
    const {
      data: employer,
      isLoading,
      isError,
      error,
    } = useQuery({
      queryKey: ["jobDetails", id],
      queryFn: () => getEmployerById(id),
      staleTime: 60 * 1000,
      retry: 1,
    });

   
  
    if (isLoading) {
      return (
        <section className="section">
          <Section />
          <Container>
            <div className="text-center py-5">
              <div
                className="spinner-grow text-primary"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="visually-hidden">Carregando...</span>
              </div>
              <p className="mt-3">Carregando detalhes do blog...</p>
            </div>
          </Container>
        </section>
      );
    }
  
    if (isError) {
      return (
        <>
          <Section />
          <section className="section">
            <Container>
              <div className="text-center py-5 text-danger">
                Error: {error.message || "Failed to fetch blog details"}
              </div>
            </Container>
          </section>
        </>
      );
  }
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent data={employer} />
            <RightSideContent data={employer}/>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CompanyDetails;
