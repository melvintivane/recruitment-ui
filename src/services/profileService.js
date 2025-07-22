import API_ENDPOINTS from "../config/api";

export const getCandidateById = async (candidateId) => {
  const response = await fetch(`${API_ENDPOINTS.CANDIDATES}/${candidateId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch candidate with ID: ${candidateId}`);
  }

  return response.json();
};

export const updateProfile = async (candidateId, userData) => {
  const response = await fetch(`${API_ENDPOINTS.CANDIDATES}/${candidateId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao atualizar candidato");
  }

  return await response.json();
};