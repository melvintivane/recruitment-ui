import React from "react";
import { Container, Row } from "reactstrap";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import { getCandidateById } from "../../../services/profileService";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const MyProfile = () => {
  document.title = "My Profile | Recruitment - Job Listing | MobiSolutions";

  const id = useParams().id || localStorage.getItem("candidateId");

  const {
    data: profile,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["profile", id],
    queryFn: () => getCandidateById(id),
    staleTime: 60 * 1000,
    retry: 1,
  });
  
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent data={profile} />
            <RightSideContent data={profile} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default MyProfile;
