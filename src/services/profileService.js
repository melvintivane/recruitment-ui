import API_ENDPOINTS from "../config/api";

export const getCandidateById = async (candidateId) => {
  const response = await fetch(`${API_ENDPOINTS.CANDIDATES}/${candidateId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch candidate with ID: ${candidateId}`);
  }

  return response.json();
};