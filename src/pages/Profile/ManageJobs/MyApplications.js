import React, { useState } from "react";
import { Container } from "reactstrap";
import Section from "./Section";
import Selected from "./Selected";
import { useQuery } from "react-query";
import { getApplicationsByCandidate } from "../../../services/applicationService";
import { useLanguage } from "../../../context/LanguageContext";
import { useParams } from "react-router-dom";
import ApplicationList from "./ApplicationList";

const MyApplications = () => {
  const { language } = useLanguage();
  const params = useParams();
  document.title =
    language === "pt" ? "Minhas Candidaturas" : "My Applications";

  const id = params.id || localStorage.getItem("candidateId");

  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
  });

  const {
    data: applications,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["applications", id, pagination.page, pagination.size],
    queryFn: () =>
      getApplicationsByCandidate(id, {
        page: pagination.page,
        size: pagination.size,
      }),
    keepPreviousData: true,
    enabled: !!id, // Only fetch if user ID exists
  });

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < (applications?.totalPages || 0)) {
      setPagination((prev) => ({ ...prev, page: newPage }));
    }
  };

  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setPagination((prev) => ({ ...prev, size: newSize, page: 0 }));
  };

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
                <span className="visually-hidden">
                  {language === "pt" ? "Carregando..." : "Loading..."}
                </span>
              </div>
              <p className="mt-3">
                {language === "pt"
                  ? "Carregando suas candidaturas..."
                  : "Loading your applications..."}
              </p>
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
                {language === "pt"
                  ? "Erro ao carregar suas candidaturas"
                  : "Error loading your applications"}
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
          <Selected />
          <ApplicationList
            jobList={applications?.content || []}
            pagination={pagination}
            totalElements={applications?.totalElements || 0}
            totalPages={applications?.totalPages || 0}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
            language={language}
          />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default MyApplications;
