import { API_ENDPOINTS } from "../config/api";

export const getAllEmployers = async ({ page, size, search, location, category }) => {
  const params = new URLSearchParams();
  params.append("page", page);
  params.append("size", size);

  /*if (search) params.append("searchQuery", search);
  if (location) params.append("location", location);
  if (category) params.append("jobCategoryId", category);*/

  if (!API_ENDPOINTS?.EMPLOYERS) {
    throw new Error("Endpoint de employers não configurado");
  }

  const response = await fetch(
    `${API_ENDPOINTS.EMPLOYERS}?${params.toString()}&sort=createdAt,desc`
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao buscar employers");
  }

  return await response.json();
};

export const getEmployerById = async (employerId) => {
  const response = await fetch(`${API_ENDPOINTS.EMPLOYERS}/${employerId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch employer with ID: ${employerId}`);
  }

  return response.json();
};