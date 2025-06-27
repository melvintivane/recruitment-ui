// services/vacancyService.js
import { API_ENDPOINTS } from "../config/api";

export const getAllVacancies = async ({ page, size, search, location, category }) => {
  const params = new URLSearchParams();
  params.append("page", page);
  params.append("size", size);

  if (search) params.append("search", search);
  if (location) params.append("location", location);
  if (category) params.append("category", category);

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
  try {
    if (!API_ENDPOINTS?.VACANCIES) {
      throw new Error("Endpoint de vagas não configurado");
    }

    const response = await fetch(`${API_ENDPOINTS.VACANCIES}/similar/${id}`);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Erro ao buscar vagas");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro no serviço de vagas:", error);
    throw error;
  }
};

export const getVacancyById = async (vacancyId) => {
  const response = await fetch(`${API_ENDPOINTS.VACANCIES}/${vacancyId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch vacancy with ID: ${vacancyId}`);
  }

  return response.json();
};
