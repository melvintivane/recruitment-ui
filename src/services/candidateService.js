import { API_ENDPOINTS } from "../config/api";

export const getAllCandidates = async ({ page, size, search, location, category, yearsOfExperience, jobType, timePeriod }) => {
  const params = new URLSearchParams();
  params.append("page", page);
  params.append("size", size);

  if (search) params.append("searchQuery", search);
  if (location) params.append("location", location);
  if (category) params.append("jobCategoryId", category);
  if (jobType) params.append("jobType", jobType);
  if (yearsOfExperience) params.append("yearsOfExperience", yearsOfExperience);
  if (timePeriod) params.append("timePeriod", timePeriod);

  if (!API_ENDPOINTS?.CANDIDATES) {
    throw new Error("Endpoint de candidatos não configurado");
  }

  const response = await fetch(
    `${API_ENDPOINTS.CANDIDATES}?${params.toString()}&sort=createdAt,desc`
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao buscar candidatos");
  }

  return await response.json();
};

export const getCandidateById = async (candidateId) => {
  const response = await fetch(`${API_ENDPOINTS.CANDIDATES}/${candidateId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch blog category with ID: ${candidateId}`);
  }

  return response.json();
};