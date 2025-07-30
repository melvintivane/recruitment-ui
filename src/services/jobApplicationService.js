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