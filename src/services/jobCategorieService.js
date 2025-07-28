import { API_ENDPOINTS } from "../config/api";

export const getAllJobCategories = async ({ page, size, search, location, category, yearsOfExperience, jobType, timePeriod }) => {
  const params = new URLSearchParams();
  params.append("page", page);
  params.append("size", size);

  if (search) params.append("searchQuery", search);
  if (location) params.append("location", location);
  if (category) params.append("jobCategoryId", category);
  if (jobType) params.append("jobType", jobType);
  if (yearsOfExperience) params.append("yearsOfExperience", yearsOfExperience);
  if (timePeriod) params.append("timePeriod", timePeriod);

  if (!API_ENDPOINTS?.JOB_CATEGORIES) {
    throw new Error("Endpoint de categorias não configurado");
  }

  const response = await fetch(
    `${API_ENDPOINTS.JOB_CATEGORIES}?${params.toString()}&sort=createdAt,desc`
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao buscar categorias");
  }

  return await response.json();
};