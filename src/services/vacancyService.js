import { API_ENDPOINTS } from "../config/api";

export const getAllVacancies = async ({ page, size, search, location, category, yearsOfExperience, type, createdAt }) => {
  const params = new URLSearchParams();
  params.append("page", page);
  params.append("size", size);

  if (search) params.append("searchQuery", search);
  if (location) params.append("location", location);
  if (category) params.append("jobCategoryId", category);
  if (type) params.append("type", type);
  if (yearsOfExperience) params.append("yearsOfExperience", yearsOfExperience);
  if (createdAt) params.append("createdAt", createdAt);

  if (!API_ENDPOINTS?.VACANCIES) {
    throw new Error("Endpoint de vagas não configurado");
  }

  const response = await fetch(
    `${API_ENDPOINTS.VACANCIES}?${params.toString()}&sort=createdAt,desc`
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao buscar vagas");
  }

  return await response.json();
};

export const getSimilarVacancies = async (id) => {
  if (!API_ENDPOINTS?.VACANCIES) {
    throw new Error("Endpoint de vagas não configurado");
  }

  const response = await fetch(`${API_ENDPOINTS.VACANCIES}/similar/${id}`);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao buscar vagas");
  }

  return await response.json();
};

export const getJobCategories = async () => {
  if (!API_ENDPOINTS?.VACANCIES) {
    throw new Error("Endpoint de vagas não configurado");
  }

  const response = await fetch(`${API_ENDPOINTS.VACANCIES}/categories`);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao buscar categorias");
  }

  return await response.json();
}

export const getVacancyById = async (vacancyId) => {
  const response = await fetch(`${API_ENDPOINTS.VACANCIES}/${vacancyId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch vacancy with ID: ${vacancyId}`);
  }

  return response.json();
};
