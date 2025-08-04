import {API_ENDPOINTS} from "../config/api";


export const applyToVacancy = async (vacancyId, data) => {
  if (!API_ENDPOINTS?.JOB_APPLICATIONS) {
    throw new Error("Endpoint de candidaturas não configurado");
  }
  
  const response = await fetch(`${API_ENDPOINTS.JOB_APPLICATIONS}/${vacancyId}/apply`, {
    method: "POST",
    headers: {  
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao aplicar para a vaga");
  }

  return await response.json();
};

export const getApplicationsByCandidate = async (candidateId, { page, size }) => {
  if (!API_ENDPOINTS?.CANDIDATES) {
    throw new Error("Endpoint de candidatos não configurado");
  }

  // Cria a URL com os parâmetros de query
  const url = new URL(`${API_ENDPOINTS.CANDIDATES}/${candidateId}/applications`);
  url.searchParams.append('page', page);
  url.searchParams.append('size', size);

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Adicione o token de autenticação se necessário
      // "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao buscar candidaturas");
  }

  return await response.json();
};