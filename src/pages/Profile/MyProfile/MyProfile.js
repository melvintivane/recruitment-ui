import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import { getCandidateById } from "../../../services/profileService";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { useAuth } from "../../../hooks/useAuth";

const MyProfile = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const params = useParams();
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  
  const id = params.id || localStorage.getItem("candidateId");

  useEffect(() => {
    if (authLoading) return; // Aguarda a verificação de autenticação

    if (!isAuthenticated) {
      navigate("/", { 
        replace: true,
        // state: { from: location.pathname }
      });
      return;
    }

  }, [language, navigate, id, isAuthenticated, authLoading]);

  const {
    data: profile,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["profile", id],
    queryFn: () => getCandidateById(id),
    staleTime: 60 * 1000,
    retry: 1,
  });

  if (isLoading) {
    return (
      <>
        <Section />
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
              <p className="mt-3">{language === "pt" ? "Carregando detalhes do perfil..." : "Loading profile details..."}</p>
            </div>
          </Container>
        </section>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Section />
        <section className="section">
          <Container>
            <div className="text-center py-5">
              <p className="mt-3 text-danger">
                {language === "pt" ? "Erro ao carregar o perfil: " : "Error loading profile: "}
              </p>
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
            <LeftSideContent data={profile} />
            <RightSideContent data={profile} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default MyProfile;
